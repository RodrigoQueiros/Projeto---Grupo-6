<template>
  <div class="book">
    <Header/>

    <!--Book info-->
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle" id>
          <h3>Detalhes do livro</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent" id>
          <!-- Imagem -->
          <div class="row">
            <div class="col-12 col-md-3">
              <img
                v-bind:src="books[1].cover"
                alt
                class="img-thumbnail rounded img-fluid margin5 bookCoverBig float-left"
              >
            </div>
            <!-- Info -->
            <div class="col-12 col-md-9">
              <div class="row">
                <div class="col-12">
                  <h1 class="margin5 bookInforHeaders">{{books[this.clickedBook].title}}</h1>
                  <h4 class="margin5 bookInforHeaders">{{books[this.clickedBook].author}}</h4>
                </div>
              </div>

              <div class="row">
                <h4 class="margin5 float-left bookInforHeaders">{{books[this.clickedBook].author}}</h4>
              </div>

              <div class="row"></div>

              <div class="row">
                <h4 class="margin5 float-left bookInforHeaders">Sinopse</h4>
                <p>{{books[this.clickedBook].description}}</p>
              </div>

              <button @click="requesition(clickedBook, loggedUser)" :disabled="buttonActive == false" class="btn">{{buttonText}}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Reviews-->
    <div></div>
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
      buttonText: "Requisitar0",
      requisitions: [],
      books : [],
      buttonActive : true,
      bookDeliver : false,
    };
  },
  methods: {
    checkRequesition(bookID, userID) {
      let bookReq = false

      if (userID != -1) {
        for (let i = 0; i < this.requisitions.length; i++) {
          
          if (
            this.requisitions[i].bookId == bookID &&
            this.requisitions[i].userId == userID &&
            this.requisitions[i].active == true
          ) {
            
            this.buttonText = "Entregar";
            bookReq = true
            this.buttonActive = true
            this.bookDeliver = true

          } 
          else if (this.books[bookID].availability == false) {
            this.buttonText = "Não disponivel";
            //show button sino
            bookReq = true
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
      if(this.bookReq==false)//Devia ser true
      {


      }
      else{
        
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
    this.clickedBook = 2; //Alterar para localstorage mais tarde

    this.requisitions = this.$store.getters.requisitions;
    this.books = this.$store.getters.books;

    this.checkRequesition(this.clickedBook, this.loggedUser);
  }
};
</script>
