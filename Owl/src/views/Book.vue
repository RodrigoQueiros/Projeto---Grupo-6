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
        <div class="col-12 col-md-4">
          
          <img v-bind:src="books[1].cover" alt="" class="img-thumbnail rounded img-fluid">
          
        </div >
        <!-- Info -->
        <div class="col-12 col-md-4">
          <h1>Book title</h1>
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
    return {bookID:ClickedBook} //To give a name to a getter*
  },
  method:{
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

  }
};

</script>
