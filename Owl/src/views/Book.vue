<template>
 <div class="book">
    <Header/>

    <!--Book info-->
    <div class="margin5 mt-4">
      <div class="row ">
        <div class="col-12 col-md-12 boxTitle" id="">
        <h3>Detalhes do livro</h3>
        </div>

      </div>
      <div class="row ">        
        <div class="col-12 col-md-12 boxContent" id="">
        <!-- Imagem -->

        <div class="row ">  
        <div class="col-12 col-md-3">
          
          <img v-bind:src="books[1].cover" alt="" class="img-thumbnail rounded img-fluid margin5 bookCoverBig float-left">
          
        </div >
        <!-- Info -->
        <div class="col-12 col-md-9">

          <div class="row">
            <div class="col-12"><h1 class="margin5  bookInforHeaders">{{books[this.clickedBook].title}}</h1>
          <h4 class="margin5  bookInforHeaders">{{books[this.clickedBook].author}}</h4></div>
          
          </div>

          <div class="row">
          <h4 class="margin5 float-left bookInforHeaders">{{books[this.clickedBook].author}}</h4>
          </div>

          <div class="row">

          </div>

          <div class="row">
          <h4 class="margin5 float-left bookInforHeaders">Sinopse</h4>
          <p>{{books[this.clickedBook].description}}</p>
          </div>
          
          
          <button @click="requesition(this.clickedBook)" class="btn">Requisição</button>

        </div>       

        </div>
        </div>
      
      </div>
    </div>   
    <!--Reviews-->
    <div>
    </div>
  </div>
  <!-- <router-link :to="{name:'nomePage'}"><b-button class="btn"></b-button></router-link> -->
   
</template>

<style>
</style>


<script>
import Header from "@/components/Header.vue";
export default {
  data: function(){
    return {
      userID:0,
      buttonText:0} 
  },
  method:{
    checkUser(){

    },
    checkRequesition(bookID, userID){
      
      for (let i = 0; i < requesitions.length; i++) {
        
        if(requesitions[i].bookId == bookID && requesitions[i].userId){

          //Se encontrar é pq o book esta requesitado, modificar button, caso nao preciso verifcar disponibilidade do livre se sim posso req se nao posso recebber not
        }

      }
    },
    requesition(bookID){

      //Check book id and user id on requesitions (on load) (change button name to requesitado)

      //Requesitions generates a id, saves book id and user id, current date, devliverydate and book status

    }
  },
  components: {
    Header
  },
  computed:{
    
    ClickedBook(){
      return this.$store.getters.ClickedBook; //Get var from store
    },
    books(){
      return this.$store.getters.books;
    },
    requesitions(){
      return this.$store.getters.requisitions;
    }


  },
  created() {

    this.loggedUser = localStorage.getItem("userLoggedIn")
    this.clickedBook = 2 //Alterar para localstorage mais tarde

    checkRequesition(this.clickedBook, this.loggedUser )


  }
};

</script>
