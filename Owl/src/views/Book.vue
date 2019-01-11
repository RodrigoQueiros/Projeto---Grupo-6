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
                class="img-thumbnail rounded img-fluid margin5 bookCoverBig float-left">
            </div>
        </div>
      <!--Content row-->
        <div class="row">

        </div>
      </div>
    </div>




    </div>
    <!--Reviews-->
    <div class="margin5 mt-4">
      ola

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
      buttonActive : true,
      bookDeliver : false,
      bookReq : false,
      
    };
  },
  methods: {
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
            this.bookReq = true
            this.buttonActive = false
          }           
        }
        if(bookReq==false){
          
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
    this.clickedBook = this.$store.state.currentBookId;
 
    this.requisitions = this.$store.getters.requisitions;
    this.books = this.$store.getters.books;

    this.checkRequesition(this.clickedBook, this.loggedUser);
  }
};
</script>
