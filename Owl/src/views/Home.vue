<template>
  <div class="home">
    <Header/>
    <br>
    <div class="container">
      <div v-if="userLoggedIn != -1">
        <div class="col-12 col-md-12 ml-md-3" id="catalogBar">
          <h3 id="catalogTitle">Recomendados</h3>
        </div>
        <div class="col-12 col-md-12 ml-md-3" id="catalogContents">
          <div class="row">
            <div class="col-6 col-md-3" v-for="book in recommended  " :key="book.bookId">
              <router-link
                v-on:mouseover.native="clickBook(book.bookId)"
                @click.native="addView(book.bookId)"
                :to="{ name: 'book', params:{id: clickedBook}}"
              >
                <img class="owlCovers mt-3" v-bind:src="book.cover">
              </router-link>
              <h6 class="mt-2">{{book.title}}</h6>
              <h6>{{book.author}}</h6>
            </div>
          </div>
        </div>
      </div>

      <br>

      <div class="col-12 col-md-12 ml-md-3" id="catalogBar">
        <h3 id="catalogTitle">Mais Populares</h3>
      </div>
      <div class="col-12 col-md-12 ml-md-3" id="catalogContents">
        <div class="row">
          <div class="col-6 col-md-3" v-for="book in mostViews" :key="book.bookId">
            <router-link
              v-on:mouseover.native="clickBook(book.bookId)"
              @click.native="addView(book.bookId)"
              :to="{ name: 'book', params:{id: clickedBook}}"
            >
              <img class="owlCovers mt-3" v-bind:src="book.cover">
            </router-link>
            <h6 class="mt-2">{{book.title}}</h6>
            <h6>{{book.author}}</h6>
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
import Footer from "@/components/Footer.vue";
//import Mainbar from '@/components/Mainbar.vue'
export default {
  name: "home",
  components: {
    Header,
    Footer
    //Mainbar
  },
  data: function() {
    return {
      userLoggedIn: localStorage.getItem("userLoggedIn"),
      users: this.$store.state.users,
      books: this.$store.state.books,
      recommended: [],
      mostViews: [],
      userTags: [],
      clickedBook: 0
    };
  },
  created() {
    console.log("userLoggedIn: " + this.userLoggedIn);

    this.mostViews = this.books.sort(function orderByViews(a, b) {
      if (a.nViews > b.nViews) return -1;
      if (a.nViews < b.nViews) return 1;
      else return 0;
    });

     this.mostViews.splice(4,this.mostViews.length-1)

    console.log(this.mostViews);
    console.log(this.books);

    this.userTags = this.users[this.userLoggedIn].favTags;

    for (let i = 0; i < this.books.length; i++) {
      for (let j = 0; j < this.books[i].idTag.length; j++) {
        for (let z = 0; z < this.userTags.length; z++) {

           if(this.recommended.length >= 4){
              break;
            }

          if (this.books[i].idTag[j] == this.userTags[z]) {
            this.recommended.push(this.books[i]);

            if (this.recommended[i] == this.recommended[i + 1]) {
              this.recommended.splice(i + 1, 1);
            }
          }
        }
      }
    }
  },
  methods: {
    getTop2() {
      this.top2 = this.books2.sort(function orderByViews(a, b) {
        if (a.nViews > b.nViews) return -1;
        if (a.nViews < b.nViews) return 1;
        else return 0;
      });
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
    }
  }
};
</script>
