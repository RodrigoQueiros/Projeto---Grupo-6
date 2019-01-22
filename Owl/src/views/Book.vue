<template>
  <div class="book">
    <Header/>

    <!--Book info-->
    <div class="margin5 mt-4">
      <!--Header row-->
      <div class="row">
        <div class="col-12 col-md-12 boxTitle">
          <h3>Detalhes do livro</h3>
        </div>
      </div>

      <!--Content row-->
      <div class="row">
        <div class="col-12 col-md-12 boxContent">
          <!--Cover row-->
          <div class="row">
            <div class="col-12 col-md-3">
              <img
                v-bind:src="books[this.clickedBook].cover"
                alt
                class="img-thumbnail rounded img-fluid margin5 bookCoverBig float-left ml-4 mt-4"
              >
            </div>

            <!-- Info -->
            <div class="col-12 col-md-9">
              <div class="row" style="margin-top:2%">
                <h1
                  class="bookInforHeaders alignLeft font-weight-bold"
                >{{books[this.clickedBook].title}}</h1>
              </div>

              <div class="row">
                <h4 class="bookInforHeaders alignLeft">{{books[this.clickedBook].author}}</h4>
              </div>

              <div class="row mt-4">
                <h4 class="alignLeft bookInforHeaders">
                  <b>Editora:</b>
                  {{books[this.clickedBook].publisher}}
                  <b>Categoria:</b>
                  {{books[this.clickedBook].idTag}} ...
                </h4>
              </div>

              <div class="row mt-4">
                <h4 class="alignLeft bookInforHeaders font-weight-bold">Sinopse</h4>
                <p class="mr-4" style="text-align:left">{{books[this.clickedBook].description}}</p>
              </div>

              <div class="row">
                <button
                  @click="requesition(clickedBook, loggedUser)"
                  :disabled="buttonActive == false"
                  class="btn buttonColor float-right"
                >{{buttonText}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Reviews-->
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle">
          <h3>Comentários</h3>
        </div>
      </div>
      <!--Comentar-->
      <div class="row">
        <div class="form-group boxContent col-12 col-md-12">
          <div class="margin5">
            <div class="row">
              <!-- Estrelinhaas-->
              <div class="row">
                <label for="comment" class="font-weight-bold" style="font-size:20px">Comment:</label>

                <fieldset class="rate">
                  <input class="starInput" id="rate1-star5" type="radio" name="rate1" value="5">
                  <label class="star" for="rate1-star5" title="Excellent">5</label>
                  
                  <input class="starInput" id="rate1-star4" type="radio" name="rate1" value="4">
                  <label class="star" for="rate1-star4" title="Good">4</label>
                  
                  <input class="starInput" id="rate1-star3" type="radio" name="rate1" value="3">
                  <label class="star" for="rate1-star3" title="Satisfactory">3</label>
                  
                  <input class="starInput" id="rate1-star2" type="radio" name="rate1" value="2">
                  <label class="star" for="rate1-star2" title="Bad">2</label>
                  
                  <input class="starInput" id="rate1-star1" type="radio" name="rate1" value="1">
                  <label class="star" for="rate1-star1" title="Very bad">1</label>
                </fieldset>
              </div>

              <textarea class="form-control" rows="5" id="comment"></textarea>

              <!-- Send Review -->
              <button
                style="margin:auto"
                @click="requesition(clickedBook, loggedUser)"
                :disabled="buttonActive == false"
                class="btn buttonColor col-6"
              >Publicar</button>
            </div>
          </div>
        </div>
      </div>
      <!--Comentarios-->
      <div class="row boxContent">
        <div class="col-12 col-md-12" v-for="review in reviews" :key="review.reviewId">
          <!-- User Image-->
          <template v-if="review.bookId == clickedBook">
            <div class="col-3">
              <img
                v-bind:src="getInfoFromUser(review.userId).photo"
                alt
                class="img-thumbnail rounded img-fluid margin5 bookCoverBig float-left ml-4 mt-4"
              >
            </div>
            <div class="col-9">
              <!-- Info User -->
              <div class="row">
                <h3>{{getInfoFromUser(review.userId).firstName}} {{getInfoFromUser(review.userId).lastName}}</h3>
                <h6>{{review.date}}</h6>
                <h5>{{review.rating}} stars</h5>
                <!-- Precisa linha -->
              </div>
              <!-- Review Info -->
              <div class="row">
                <p v-if="verifyEdit==false">{{review.comment}}</p>
                <textarea name id cols="30" rows="10" v-if="verifyEdit" v-modal="review.comment"></textarea>
              </div>
              <!-- Rating -->
              <div class="row">
                <button
                  class="btn-success"
                  @click="upVote(review.reviewId, loggedUser,clickedBook)"
                >
                  <i class="fas fa-long-arrow-alt-up"></i>
                  {{review.upVote.length}}
                </button>
                <!-- upVote -->
                <button
                  class="btn-danger"
                  @click="downVote(review.reviewId, loggedUser,clickedBook)"
                >
                  <i class="fas fa-long-arrow-alt-down"></i>
                  {{review.downVote.length}}
                </button>
                <!-- downVote -->
              </div>

              <div class="row" v-if="loggedUser == getInfoFromUser(review.userId).userId">
                <button class="btn-primary" @click="editReview(review.reviewId)">
                  <i class="fas fa-edit"></i>
                </button>
                <!-- Edit -->
                <button class="btn-dark" @click="deleteReview(review.reviewId)">
                  <i class="fas fa-times"></i>
                </button>
                <!-- Trash -->
              </div>

              <!-- Fazer editar e eliminar -->
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>

  <!-- <router-link :to="{name:'nomePage'}"><b-button class="btn"></b-button></router-link> -->
</template>

<style>
.rate {
  display: inline-block;
  margin: 0;
  padding: 0;
  border: none;
}

.starInput {
  display: none;
}

.star {
  float: right;
  font-size: 0;
  color: #d9d9d9;
}

.star:before {
  content: "\f005";
  font-family: FontAwesome;
  font-size: 20px;
}

.star:hover,
.star:hover ~ .star {
  color: #fcd000;
  transition: 0.2s;
}

.starInput:checked ~ .star {
  color: #fcd000;
}
</style>


<script>
import Header from "@/components/Header.vue";
export default {
  //Fazer filtro de reviews com id do livro
  data: function() {
    return {
      loggedUser: 0,
      clickedBook: 0,
      buttonText: "Requisitar",
      requisitions: [],
      books: [],
      users: [],
      reviews: [],
      buttonActive: true,
      bookDeliver: false,
      bookReq: false,
      verifyEdit: false
    };
  },
  methods: {
    editReview(reviewID) {
      if (this.verifyEdit == false) {
        this.verifyEdit = true;
      } else {
        this.verifyEdit = false;
      }
    },
    deleteReview(reviewID) {
      for (let i = 0; i < this.reviews.length; i++) {
        console.table(this.reviews);
        if (this.reviews[i].reviewId == reviewID) {
          this.$store.dispatch("delete_review", i);
        }
      }
    },

    upVote(reviewID, userID, bookID) {
      let verify = true;
      let checkUp = true;

      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i].reviewId == reviewID) {
          for (let j = 0; j < this.reviews[i].upVote.length; j++) {
            if (this.reviews[i].upVote[j] == userID) {
              verify = false;
            }
          }
        }
        for (let k = 0; k < this.reviews[i].downVote.length; k++) {
          if (this.reviews[i].downVote[k] == userID) {
            checkUp = false;
          }
        }
      }

      if (verify == true) {
        this.$store.dispatch("up_vote", [reviewID, userID, true, checkUp]);
      } else {
        this.$store.dispatch("up_vote", [reviewID, userID, false, checkUp]);
      }
    },
    downVote(reviewID, userID, bookID) {
      let verify = true;
      let checkDown = true;

      for (let i = 0; i < this.reviews.length; i++) {
        if (this.reviews[i].reviewId == reviewID) {
          for (let j = 0; j < this.reviews[i].downVote.length; j++) {
            if (this.reviews[i].downVote[j] == userID) {
              verify = false;
            }
          }
        }
        for (let k = 0; k < this.reviews[i].upVote.length; k++) {
          if (this.reviews[i].upVote[k] == userID) {
            checkDown = false;
          }
        }
      }

      if (verify == true) {
        this.$store.dispatch("down_vote", [reviewID, userID, true, checkDown]);
      } else {
        this.$store.dispatch("down_vote", [reviewID, userID, false, checkDown]);
      }
    },

    getInfoFromUser(userID) {
      let a = true;
      let all = 0;
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].userId == userID && a == true) {
          all = this.users[i];
          a = false;
        }
      }
      return all;
    },
    checkRequesition(bookID, userID) {
      console.log(userID);
      console.log();
      this.bookReq = false
      if (userID != -1) {
        for (let i = 0; i < this.requisitions.length; i++) {
          if (
            this.requisitions[i].bookId == bookID &&
            this.requisitions[i].userId == userID &&
            this.requisitions[i].active == true
          ) {
            this.buttonText = "Entregar";
            this.bookReq = true;
            this.buttonActive = true;
            this.bookDeliver = true;
          } else if (this.books[bookID].availability == false) {
            this.buttonText = "Não disponivel";
            //show button sino
            //<i class="fas fa-bell"></i>
            this.bookReq = true;
            this.buttonActive = false;
          }
        }
        if (this.bookReq == false) {
          this.buttonText = "Requisitar";
        }
      } else {
        //Remeter para criar conta ou registar ou erro
        console.log("Offline user");
      }
    },

    requesition(bookID, userID) {
      //Check book id and user id on requesitions (on load) (change button name to requesitado)
      //Requesitions generates a id, saves book id and user id, current date, devliverydate and book status

      if (userID == -1) {
        this.$router.push("login"); //Não tem conta, precisa de fazer login
      } else if (this.bookReq == false) {
        //Devia ser true
        let currentDate = new Date();
        //Requisitar

        let req = {
          requisitionId: this.$store.getters.getLastIdReq,
          bookId: bookID,
          userId: userID,
          requisitionDate:
            currentDate.getDate() +
            "/" +
            (currentDate.getMonth() + 1) +
            "/" +
            currentDate.getFullYear() +
            " @ " +
            currentDate.getHours() +
            ":" +
            currentDate.getMinutes(),
          deliveryDate:
            currentDate.getDate() +
            5 +
            "/" +
            (currentDate.getMonth() + 1) +
            "/" +
            currentDate.getFullYear() +
            " @ " +
            currentDate.getHours() +
            ":" +
            currentDate.getMinutes(),
          deliveryBookStatus: this.books[bookID].bookStatus,
          active: true
        };
        let reqs = [req,bookID]
        console.table(this.requisitions);
        this.$store.dispatch("add_req", reqs);
        console.table(this.requisitions);
        alert("Livro Requisitado");
        console.log(req);
        this.checkRequesition(bookID, userID);
      } else {
        

        for (let i = 0; i < this.requisitions.length; i++) {
          if (this.requisitions[i].bookId == bookID &&
              this.requisitions[i].userId == userID &&
              this.requisitions[i].active == true)
           {
             /*if(this.requisitions.deliveryDate < currDate){
               let del = [i,this.loggedUser,-100] //Saber a posição e pontos para o user
              this.$store.dispatch("delivery_book", del);
             }
             else
             {*/
              let del = [i,userID,50,bookID] //Saber a posição e pontos para o user
              this.$store.dispatch("delivery_book", del);
              alert("Livro entregado");
             //}
            this.checkRequesition(bookID, userID);
            console.table(this.users)
            console.table(this.requisitions)
            console.table(this.books)
            
          }
        }
      }
    }
  },
  components: {
    Header
  },
  computed: {},
  beforeMount() {
    this.loggedUser = localStorage.getItem("userLoggedIn");
    this.clickedBook = this.$route.params.id;
    console.log("clickedbook: " + this.clickedBook);
    this.requisitions = this.$store.getters.requisitions;
    this.books = this.$store.getters.books;
    this.users = this.$store.getters.users;
    this.reviews = this.$store.getters.reviews;

    console.log(this.requisitions.length);
    console.log(this.requisitions);
    this.checkRequesition(this.clickedBook, this.loggedUser);
  }
};
</script>
