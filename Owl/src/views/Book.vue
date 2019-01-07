<template>
 <div class="book">
    <Header/>
   <h1>This is the book page</h1>

    <button @click="requesition(bookID)"></button>
  <!-- <router-link :to="{name:'nomePage'}"><b-button class="btn"></b-button></router-link> -->
  </div>  
</template>

<style></style>


<script>
import Header from "@/components/Header.vue";
export default {
  data: function(){
    return {bookID:ClickedBook} //To give a name to a getter*
  },
  method:{
    requesition(bookID){

      

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
    }

  }
};

</script>
