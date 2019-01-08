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
          <h1 class="margin5 float-left bookInforHeaders">{{books[bookID].title}}</h1>
          </div>

          <div class="row">
          <h4 class="margin5 float-left bookInforHeaders">{{books[bookID].author}}</h4>
          </div>

          <div class="row">

          </div>

          <div class="row">
          <h4 class="margin5 float-left bookInforHeaders">Sinopse</h4>
          <p>{{books[bookID].description}}</p>
          </div>
          
          
          <button @click="requesition(bookID)" class="btn">Requisição</button>

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
      bookID:localStorage.getItem("userLoggedIn")} //To give a name to a getter*
  },
  method:{
    checkUser(){

    },
    checkBook(bookID){

    },
    checkRequesition(bookID, userID){

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
  created:{
//localStorage.getItem("userLoggedIn")
  }
};

</script>
