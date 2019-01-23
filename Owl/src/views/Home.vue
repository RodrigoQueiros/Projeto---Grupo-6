<template>
  <div class="home">
    <Header/>
   <br>
  <div class="container">
      <div class="col-12 col-md-12 ml-md-3" id="catalogBar">
    
  
            
            <h3 id="catalogTitle">Recomendados</h3>
    
        </div>
           <div class="col-12 col-md-12 ml-md-3" id="catalogContents">
          <div class="row">
            <div class="col-6 col-md-3" v-for="book in books" :key="book.bookId" >
              <router-link v-on:mouseover.native="clickBook(book.bookId)" @click.native="addView(book.bookId)" :to="{ name: 'book', params:{id: clickedBook}}">
                <img class="owlCovers mt-3" v-bind:src="book.cover">
              </router-link>
              <h6 class="mt-2">{{book.title}}</h6>
              <h6>{{book.author}}</h6>
              <p v-if="book.availability == true">Disponivel</p>
              <p v-else>Indisponivel</p>
            </div>
          </div>
        </div>
        <br>

         <div class="col-12 col-md-12 ml-md-3" id="catalogBar">
    
  
            
            <h3 id="catalogTitle">Mais Vizualizados</h3>
    
        </div>
           <div class="col-12 col-md-12 ml-md-3" id="catalogContents">
          <div class="row">
            <div class="col-6 col-md-3" v-for="book in mostViews" :key="book.bookId" >
              <router-link v-on:mouseover.native="clickBook(book.bookId)" @click.native="addView(book.bookId)" :to="{ name: 'book', params:{id: clickedBook}}">
                <img class="owlCovers mt-3" v-bind:src="book.cover">
              </router-link>
              <h6 class="mt-2">{{book.title}}</h6>
              <h6>{{book.author}}</h6>
              <p v-if="book.availability == true">Disponivel</p>
              <p v-else>Indisponivel</p>
            </div>
          </div>
        </div>
  </div>
      
     
   <Footer/>
   </div>


</template>
<style>
#topBooks {
  background-color: #d9b97e;

  color: #592316;
  height: 552px;
}

.owlCoversTop {
  height: 200px;
  width: 150px;
  box-sizing: border-box;
  border: 3px solid white;
  border-radius: 5px;
}

.top {
  position: relative;
  height: 30px;
  width: 10px;
  bottom: 30px;
  right: 5px;
  background-color: #bf6e26;
  color: white;
  padding-left: 20px;
  padding-right: 20px;
}

#recBar {
  background-color: #bf6e26 !important;
  height: 50px;
  color: white;
  padding-top: 8px;
  text-align: left;
}
</style>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Recomend from "@/components/Recomend.vue";
import Footer from "@/components/Footer.vue";
//import Mainbar from '@/components/Mainbar.vue'
export default {
  name: "home",
  components: {
    Header,
    Recomend,
    Footer
    //Mainbar
  },
  data: function() {
    return {
      books: this.$store.state.books,
      recommended: [],
      mostViews: []
    };
  },
  created() {
    this.mostViews = this.books.sort(function orderByViews(a, b) {
      if (a.nViews > b.nViews) return -1;
      if (a.nViews < b.nViews) return 1;
      else return 0;
    });

    console.log(this.mostViews)
  },
  methods: {
    getTop2() {
      this.top2 = this.books2.sort(function orderByViews(a, b) {
        if (a.nViews > b.nViews) return -1;
        if (a.nViews < b.nViews) return 1;
        else return 0;
      });
    }
  }
};
</script>
