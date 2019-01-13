<template>
  <div class="book">
    <Header/>

    <!--Book info-->
    <div class="margin5 mt-4">

      <!--Header row-->
    <div class="row">
        <div class="col-12 col-md-12 boxTitle" >
          <h3>Detalhes do livro</h3>
        </div>
      </div>

      <!--Content row-->
    <div class="row">
      <div class="col-12 col-md-12 boxContent" >
       <!--Cover row-->
        <div class="row">
            <div class="col-12 col-md-3">
              <img
                v-bind:src="books[this.clickedBook].cover"
                alt
                class="img-thumbnail rounded img-fluid margin5 bookCoverBig float-left ml-4 mt-4">
            </div>


            <!-- Info -->
            <div class="col-12 col-md-9">
                <div class="row" style="margin-top:2%">                  
                  <h1 class="bookInforHeaders alignLeft font-weight-bold" >{{books[this.clickedBook].title}}</h1>
                </div>


                <div class="row">
                  <h4 class="bookInforHeaders alignLeft" >{{books[this.clickedBook].author}}</h4>
                </div>


                <div class="row mt-4">
                  
                  <h4 class="alignLeft bookInforHeaders "><b>Editora: </b> {{books[this.clickedBook].publisher}}     <b>Categoria: </b>{{books[this.clickedBook].idTag}} ...</h4>
                </div>

                <div class="row mt-4">
                <h4 class="alignLeft bookInforHeaders font-weight-bold">Sinopse</h4>
                <p class="mr-4" style="text-align:left">{{books[this.clickedBook].description}}</p>
                </div>

                <div class="row">
                  <button @click="requesition(clickedBook, loggedUser)" :disabled="buttonActive == false" class="btn buttonColor float-right">{{buttonText}}</button>
                </div>
                
              </div>


            
        </div>   
        
                    
                

        
      </div>
    </div>
    </div>

    <!--Reviews-->
    <div class="margin5 mt-4">
        <div class="row">
        <div class="col-12 col-md-12 boxTitle" >
          <h3>Comentários</h3>
        </div>
        </div>
        <!--Comentar-->
        <div class="row ">
          <div class="form-group boxContent col-12 col-md-12">
          <div class="margin5">                        
              <label for="comment" class="font-weight-bold" style="font-size:20px">Comment:</label>            
                                                       

            <textarea class="form-control" rows="5" id="comment"></textarea>

            <!-- Estrelinhaas-->
            <div class="row"><p style="font-size:20px" class="font-weight-bold">Classificação:</p>

              <fieldset class="rate">
              <input id="rate1-star5" type="radio" name="rate1" value="5" />
              <label for="rate1-star5" title="Excellent">5</label>

              <input id="rate1-star4" type="radio" name="rate1" value="4" />
              <label for="rate1-star4" title="Good">4</label>

              <input id="rate1-star3" type="radio" name="rate1" value="3" />
              <label for="rate1-star3" title="Satisfactory">3</label>

              <input id="rate1-star2" type="radio" name="rate1" value="2" />
              <label for="rate1-star2" title="Bad">2</label>

              <input id="rate1-star1" type="radio" name="rate1" value="1" />
              <label for="rate1-star1" title="Very bad">1</label>
              </fieldset>
              
              <!-- Send Review -->
              <button @click="requesition(clickedBook, loggedUser)" :disabled="buttonActive == false" class="btn buttonColor float-right">{{buttonText}}</button>
              
              </div>
          </div>
          </div> 
        </div>
        <!--Comentarios-->
        <div class="row">

          <div class="col-12 col-md-12" v-for="review in reviews" :key="review.reviewId" >
            <!-- User Image-->
            <div class="col-3">
                <img
                v-bind:src="getInfoFromUser(review.userId).photo"
                alt
                class="img-thumbnail rounded img-fluid margin5 bookCoverBig float-left ml-4 mt-4">
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
                  <p>{{review.comment}}</p>

                </div>
                <!-- Rating -->
                <div class="row">

                  <button class="btn-success"><i class="fas fa-long-arrow-alt-up"></i>{{review.upVote.length}}</button>
                  <button class="btn-danger"><i class="fas fa-long-arrow-alt-down"></i>{{review.downVote.length}}</button>
                </div>

                <div class="row">

                  <button class="btn-primary"><i class="fas fa-edit"></i></button>
                  <button class="btn-dark"><i class="fas fa-times"></i></button>
                </div>

                <!-- Fazer editar e eliminar -->
            </div>


          </div>


        </div>
      </div>

    </div>
  
  <!-- <router-link :to="{name:'nomePage'}"><b-button class="btn"></b-button></router-link> -->
</template>

<style>
</style>


<script>
import Header from "@/components/Header.vue";
export default {
  data: function() {
    return {
      loggedUser: 0,
      clickedBook: 0,
      buttonText: "Requisitar",
      requisitions: [],
      books : [],
      users: [],
      reviews: [],
      buttonActive : true,
      bookDeliver : false,
      bookReq : false,
      
    };
  },
  methods: {

    getInfoFromUser(userID){
      let a = true
      let all = 0
      for (let i = 0; i < this.users.length; i++) {  
        
        if(this.users[i].userId == userID && a == true ){
          
          all = this.users[i]
          a = false
          
        }
        
      }
      return all
      
    },
    checkRequesition(bookID, userID) {
      

      
      console.log(userID)
      console.log()
      if (userID != -1) {
        for (let i = 0; i < this.requisitions.length; i++) {          
          if (
            this.requisitions[i].bookId == bookID &&
            this.requisitions[i].userId == userID &&
            this.requisitions[i].active == true
          ) {
            
            this.buttonText = "Entregar";
            this.bookReq = true
            this.buttonActive = true
            this.bookDeliver = true

          } 
          else if (this.books[bookID].availability == false) {
            this.buttonText = "Não disponivel";
            //show button sino
            //<i class="fas fa-bell"></i>
            this.bookReq = true
            this.buttonActive = false
          }           
        }
        if(this.bookReq==false){
          
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

      if(userID == -1){

        this.$router.push("login") //Não tem conta, precisa de fazer login
      }
      else if(this.bookReq==false)//Devia ser true
      {
        let currentDate = new Date();
        //Requisitar
        let req = {
            requisitionId: this.$store.getters.getLastIdReq,
            bookId: bookID,
            userId: userID,
            requisitionDate: currentDate.getDate() + "/"
                + (currentDate.getMonth()+1)  + "/" 
                + currentDate.getFullYear() + " @ "
                + currentDate.getHours() + ":"
                + currentDate.getMinutes(),
            deliveryDate: currentDate.getDate()+5 + "/" //Preciso verificar se muda de mes ou não, ou ate de ano
                + (currentDate.getMonth()+1)  + "/" 
                + currentDate.getFullYear() + " @ "
                + currentDate.getHours() + ":"
                + currentDate.getMinutes(),
            deliveryBookStatus: this.books[bookID].bookStatus,
            active: true
          }
          this.requisitions.push(req) //Adicionar a store, need mutation
          alert("Livro Requisitado")
          checkRequesition(bookID,userID)
      }
      else{
        //Passar true para false
        //Verificar data


        //if(this.bookDeliver = true){
          console.log("ola")
          let req = {
            requisitionId: this.$store.getters.getLastIdReq,
            bookId: bookID,
            userId: userID,
            requisitionDate: "",
            deliveryDate: "",
            deliveryBookStatus: this.books[bookID].bookStatus,
            active: true
          }
          this.requisitions.push(req) 
          alert("Livro entregado")


      }


    }
  },
  components: {
    Header
  },
  computed: {   
   
  },
  beforeMount() {
    this.loggedUser = localStorage.getItem("userLoggedIn");
    this.clickedBook = this.$route.params.id;
 
    this.requisitions = this.$store.getters.requisitions;
    this.books = this.$store.getters.books;
    this.users = this.$store.getters.users;
    this.reviews = this.$store.getters.reviews;
    console.log(this.users)
    console.log(this.reviews)
    this.checkRequesition(this.clickedBook, this.loggedUser);
  }
};
</script>
