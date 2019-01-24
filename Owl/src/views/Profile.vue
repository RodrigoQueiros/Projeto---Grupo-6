<template>
  <div class="home">
    <Header/>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle" id>
          <h3>Perfil</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-9 col-md-9 boxContent" id>
          <div v-for="user in users" :key="user.userId">
            <div v-if="user.userId == userLoggedIn">
              <div class="row" style="text-align:left">
                <div class="col-12 col-md-6 col-lg-3">
                  <img
                    v-if="clicked == false"
                    :src="user.photo"
                    height="200"
                    width="250"
                    alt
                    id="profilePhoto"
                    class="mt-4 ml-2 mb-4"
                  >
                  <input
                    v-if="clicked"
                    type="text"
                    class="form-control editInput col-9 mt-5 col-lg-7 mb-2"
                    v-model="user.photo"
                  >
                </div>
                <div class="col-12 col-md-6 col-lg-9">
                  <h4 class="mt-4">Nome de Utilizador</h4>
                  <p v-if="clicked == false">{{user.firstName}} {{user.lastName}}</p>
                  <div class="row">
                    <input
                      v-if="clicked"
                      type="text"
                      class="form-control editInput col-4 col-lg-3 mb-1 ml-3"
                      v-model="user.firstName"
                    >
                    <input
                      v-if="clicked"
                      type="text"
                      class="form-control editInput col-4 col-lg-3 ml-1 mb-2"
                      v-model="user.lastName"
                    >
                  </div>

                  <h4>Email</h4>
                  <p v-if="clicked == false">{{user.email}}</p>
                  <input
                    v-if="clicked"
                    type="text"
                    class="form-control editInput col-9 col-lg-7 mb-2"
                    v-model="user.email"
                  >
                  <a id="btnEdit" @click="editProfile" class="btn btn-dark mt-1">
                    <i class="fas fa-edit"></i> Editar perfil
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-3 col-md-3 boxContent" id v-if="clicked == false">
          <h4 class="mt-4">Tags Favoritas</h4>
          <ul>
            <li class="text-left" v-for="teste in testes" :key="teste">{{teste}}</li>
          </ul>
        </div>
        <div class="col-3 col-md-3 boxContent" id v-if="clicked">
          <h4 class="mt-4">Tags Favoritas</h4>
          <div class="scrollbox">
            <p v-for="(tag,index) in tags" :key="tag">
              <input :id="index" type="checkbox" :value="index">
              {{tag.tagDescription}}
            </p>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <div class="row">
          <div class="col-12 col-md-12 boxTitle" id>
            <h3>Requisicoes</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12 boxContent">
            <div v-for="requisition in requisitions" :key="requisition.requisitionId">
              <div v-for="book in books" :key="book.bookId">
                <div
                  v-if="requisition.userId == userLoggedIn && requisition.active == true && requisition.bookId == book.bookId"
                >
                  <div class="row" style="text-align:left">
                    <div class="col-12 col-md-2">
                       <router-link v-on:mouseover.native="clickBook(book.bookId)" @click.native="addView(book.bookId)" :to="{ name: 'book', params:{id: clickedBook}}">
                        <img v-bind:src="book.cover" class="owlCovers mt-4 ml-3">
                       </router-link>
                    </div>
                    <div class="col-12 col-md-10">
                      <h4 class="mt-5">{{book.title}}</h4>
                      <h5>de {{book.author}}</h5>
                      <p class="mt-4">
                        <b>Data de Requisição:</b>
                        {{requisition.requisitionDate}}
                      </p>
                      <a class="btn buttonColor" style="color:white" @click="deliverBook(book.bookId, userLoggedIn)">Entregar</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-4">
        <div class="row">
          <div class="col-12 col-md-12 boxTitle" id>
            <h3>Historico Requisicoes</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-12 boxContent">
            <table class="table mt-4" table-responsive>
              <thead>
                <tr>
                  <th scope="col">Titulo</th>
                  <th scope="col">Capa</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Data de Requisicao</th>
                  <th scope="col">Data de Entrega</th>
                </tr>
              </thead>
              <tbody v-for="requisition in requisitions" :key="requisition.requisitionId">
                <tr v-for="book in books" :key="book.bookId">
                  <td v-if="requisition.userId == userLoggedIn && requisition.active == false && requisition.bookId == book.bookId">{{book.title}}</td>
                  <td v-if="requisition.userId == userLoggedIn && requisition.active == false && requisition.bookId == book.bookId">
                    <input type="button" @click="seeCover(book.cover)" value="+">
                  </td>
                  <td v-if="requisition.userId == userLoggedIn && requisition.active == false && requisition.bookId == book.bookId">{{book.author}}</td>
                  <td v-if="requisition.userId == userLoggedIn && requisition.active == false && requisition.bookId == book.bookId">{{requisition.requisitionDate}}</td>
                  <td v-if="requisition.userId == userLoggedIn && requisition.active == false && requisition.bookId == book.bookId">{{requisition.deliveryDate}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div class="row">

      <div class="col-6 m-auto">

      <div class="row mt-4">
        <div class="col-12 col-md-12 boxTitle " id>
            <h3>Achievements</h3>
          </div>
         <div class="col-12 col-md-12 boxContent pb-3">

            <div class="col-12 mt-3" style="background-color:white">
              <div class="row">

              <div class="col-3"><i class="fas fa-star-half-alt mt-4 pb-3" style="font-size:60px;color:peru"></i></div>
              <div class="col-8">
              <h4 class="mt-5">
                Fazer 1 requisição <i class="far fa-check-circle" style="color:green" v-if="achReq>0"></i>
              </h4>
              </div>


              </div>
              
            </div>

            <div class="col-12 mt-3" style="background-color:white">
              <div class="row">

              <div class="col-3"><i class="fas fa-star-half-alt mt-4 pb-3" style="font-size:60px;color:peru"></i></div>
              <div class="col-8">
              <h4 class="mt-5">
                Fazer 5 requisição <i class="far fa-check-circle" style="color:green" v-if="achReq>4"></i>
              </h4>
              </div>             

              </div>        
              
            </div>


            <div class="col-12 mt-3" style="background-color:white">
              <div class="row">

              <div class="col-3"><i class="fas fa-star-half-alt mt-4 pb-3" style="font-size:60px;color:peru"></i></div>
              <div class="col-8">
              <h4 class="mt-5">
                Fazer 5 comentarios <i class="far fa-check-circle" style="color:green" v-if="achRev>4"></i>
              </h4>
              </div>


              </div>
              
            </div>


            <div class="col-12 mt-3" style="background-color:white">
              <div class="row">

              <div class="col-3"><i class="fas fa-star-half-alt mt-4 pb-3" style="font-size:60px;color:peru"></i></div>
              <div class="col-8">
              <h4 class="mt-5">
                Receber 20 upvotes <i class="far fa-check-circle" style="color:green" v-if="achVot>19"></i>
              </h4>
              </div>


              </div>
              
            </div>


           </div>


      </div>
      
      </div>
      <div class="col-5 m-auto">

      <div class="row mt-4">
        <div class="col-12 col-md-12 boxTitle" id>
            <h3>Notificações</h3>
          </div>
         <div class="col-12 col-md-12 boxContent">
           </div>


      </div>

      </div>






      </div>
      
      



    </div>
    <Footer/>
  </div>
</template>

<style>
.boxContent {
  background-color: #d9b97e;
  height: 260px;
  color: #592316;
}

#profilePhoto {
  box-sizing: border-box;
  border: 3px solid white;
  border-radius: 5px;
}

#btnEdit {
  color: white;
  background-color: #592316;
}

.editInput {
  height: 35px;
}

#btnEdit:hover {
  opacity: 0.9;
}

.scrollbox {
  height: 200px;
  overflow-x: scroll;
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import swal from "sweetalert2";
export default {
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      users: this.$store.state.users,
      userLoggedIn: localStorage.getItem("userLoggedIn"),
      requisitions: this.$store.state.requisitions,
      books: this.$store.state.books,
      reviews: this.$store.state.reviews,
      clicked: false,
      user: {
        firstName: "",
        lastName: "",
        email: "",
        favTags: [],
        photo: ""
      },
      tags: this.$store.state.tags,
      testes: [],
      clickedBook: 0,
      achReq: 0,
      achRev: 0,
      achVot: 0,
    };
  },

  created() {
    this.user.firstName = this.users[this.userLoggedIn].firstName;
    this.user.lastName = this.users[this.userLoggedIn].lastName;
    this.user.email = this.users[this.userLoggedIn].email;
    this.user.favTags = this.users[this.userLoggedIn].favTags;
    this.user.photo = this.users[this.userLoggedIn].photo;
    this.achReq = this.achievementReq()
    this.achRev = this.achievementRev()
    this.achVot = this.achievementVot()
    for (let i = 0; i < this.user.favTags.length; i++) {
      for (let j = 0; j < this.tags.length; j++) {
        if (this.user.favTags[i] == this.tags[j].tagId) {
          this.testes.push(this.tags[i].tagDescription);
        }
      }
    }
  },
  updated() {
    this.checkCheckboxes();
  },

  methods: {
    achievementReq(){
      let numberReq = 0

      for (let i = 0; i< this.requisitions.length; i++) {
        
        if(this.requisitions[i].userId == this.userLoggedIn){
          numberReq++
        }
       
      }
      return numberReq
    },
    achievementRev(){
      let numberRev = 0

      for (let i = 0; i< this.reviews.length; i++) {
        
        if(this.reviews[i].userId == this.userLoggedIn){
          numberRev++
        }
       
      } console.log(numberRev)
      return numberRev
    },
    achievementVot(){
      let numberVot = 0

      for (let i = 0; i< this.reviews.length; i++) {
        
        if(this.reviews[i].userId == this.userLoggedIn){
          numberVot += this.reviews[i].upVote.length
        }
       
      }
      return numberVot
    },


    deliverBook(bookID, userID){

      for (let i = 0; i < this.requisitions.length; i++) {
          if (this.requisitions[i].bookId == bookID &&
              this.requisitions[i].userId == userID &&
              this.requisitions[i].active == true)
           {
             
             let currentDate = new Date();
             let date = (currentDate.getDate() +
            "/" +
            (currentDate.getMonth() + 1) +
            "/" +
            currentDate.getFullYear() + " " +
            currentDate.getHours() +
            ":" +
            currentDate.getMinutes())
              let del = [i,userID,50,bookID,date] //Saber a posição e pontos para o user
              this.$store.dispatch("delivery_book", del);
           }}



    },
    editProfile() {
      if (this.clicked) {
        this.clicked = false;
        this.user.firstName = this.users[this.userLoggedIn].firstName;
        this.user.lastName = this.users[this.userLoggedIn].lastName;
        this.user.email = this.users[this.userLoggedIn].email;
        this.user.photo = this.users[this.userLoggedIn].photo;
        this.$store.dispatch("edit_profile", {
          userId: this.userLoggedIn,
          firstName: this.user.firstName,
          lastName: this.user.lastName,
          email: this.user.email,
          photo: this.user.photo,
        });

        this.testes = [];
        this.user.favTags = [];
        for (let i = 0; i < this.tags.length; i++) {
          console.log("entrou no for do coiso");
          if (document.getElementById(i.toString()).checked) {
            console.log("entrou no if do coiso");
            this.testes.push(this.tags[i].tagDescription);
            this.user.favTags.push(this.tags[i].tagId);
            console.log(this.user.favTags);
          }
        }
        this.$store.dispatch("update_favtags", [this.userLoggedIn,this.user.favTags]);

      } else {
        this.clicked = true;
        // this.users[this.userLoggedIn].firstName = this.user.firstName
        // this.users[this.userLoggedIn].lastName = this.user.lastName
        // this.users[this.userLoggedIn].email = this.user.email
      }
    },
    checkCheckboxes() {
      for (let i = 0; i < this.tags.length; i++) {
        for (let j = 0; j < this.user.favTags.length; j++) {
          if (i == this.user.favTags[j]) {
            document.getElementById(i.toString()).checked = true;
          }
        }
      }
      
    },
     clickBook(index) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].bookId === index) {
          this.$store.dispatch("open_book", i);
          this.clickedBook = i;
        }
      }
    },

    addView(id) {
      console.log("entrou");
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].bookId === id) {
          this.$store.dispatch("add_view", i);
          console.log("oi");
        }
      }
    },

    seeCover(cover) {
      swal({
        title: "Capa",
        text: cover,
        html: '<img src="' + cover + '" alt="" class="coverSize">',
        showConfirmButton: true
      });
    }
  },
  computed: {}
};
</script>