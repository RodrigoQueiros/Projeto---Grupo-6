<template>
  <div class="home">
    <Header/>
    <div class="box mt-4">
      <div class="row">
        <div class="col-12 col-md-3" id="filterBar">
          <h3>Filtros</h3>
        </div>
        <div class="col-12 col-md-8 ml-md-3" id="catalogBar">
          <h3>Catálogo</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-3" id="filterContents">
          <label for="filterAuthors" class="mt-2">Por Autor:</label>
          <select class="form-control" id="filterAuthors" v-model="authorFilter">
            <option>Todos</option>
            <option v-for="author in authors" :key="author">{{author}}</option>
          </select>
          
          <label for="filterPublisher" class="mt-2">Por Editora:</label>
          <select class="form-control" id="filterPublisher" v-model="publisherFilter">
            <option>Todos</option>
            <option v-for="publisher in publishers" :key="publisher">{{publisher}}</option>
          </select>
          
          <label for="filterTag" class="mt-2">Por Tag:</label>
          <select class="form-control" id="filterTag" v-model="tagFilter">
            <option>Todos</option>
            <option v-for="tag in tags" :key="tag">{{tag.tagDescription}}</option>
          </select>
          <br>
          <button class="btn btn-lg btn-block" id="btnLogin" @click="filterBooks">Filtrar</button>

        </div>
        <div class="col-12 col-md-8 ml-md-3" id="catalogContents">
          <div class="row">
            <div class="col-6 col-md-3" v-for="book in filteredBooks" :key="book">
              <router-link to="/book" v-on:click.native="clickBook(book.bookId)">
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
    </div>
  </div>
</template>

<style>
#filterBar {
  background-color: #bf6e26 !important;
  height: 50px;
  color: white;
  padding-top: 8px;
  text-align: left;
}
#filterContents {
  background-color: #d9b97e;
  height: 330px;
  text-align: left;
  color: #592316;
}
#catalogBar {
  background-color: #bf6e26 !important;
  height: 50px;
  color: white;
  padding-top: 8px;
  text-align: left;
}
#catalogContents {
  background-color: #d9b97e;
  height: 400px;
  color: #592316;
}
.box {
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 5%;
}
.owlCovers {
  height: 200px;
  width: 150px;
  box-sizing: border-box;
  border: 3px solid white;
  border-radius: 5px;
}
.owlCovers:hover {
  /* border-color: #592316; */
  opacity: 0.8;
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  data: function() {
    return {
      books: this.$store.state.books,
      tags: this.$store.state.tags,
      publishers: [],
      authors: [],
      filteredBooks: this.$store.state.books,
      authorFilter: "Todos",
      publisherFilter: "Todos",
      tagFilter: "Todos",
      temp: []
    };
  },
  created() {
    for (let i = 0; i < this.books.length; i++) {
      if (this.publishers.indexOf(this.books[i].publisher) == -1) {
        this.publishers.push(this.books[i].publisher);
      }
    }
    for (let i = 0; i < this.books.length; i++) {
      if (this.authors.indexOf(this.books[i].author) == -1) {
        this.authors.push(this.books[i].author);
      }
    }
  },
  methods: {
    clickBook(index) {
      this.$store.dispatch("open_book", index);
      console.log(index);
    },
   

    filterBooks() {
      console.log(this.filteredBooks);
      this.filteredBooks = [];

      console.log(this.tagFilter);
      this.filteredBooks = this.books.filter(
        book =>
          book.author === this.authorFilter || this.authorFilter == "Todos"
      );
      this.filteredBooks = this.filteredBooks.filter(
        book =>
          book.publisher === this.publisherFilter ||
          this.publisherFilter == "Todos"
      );


      //tag filter not working
      if (this.tagFilter != "Todos") {
        for (let i = 0; i < this.filteredBooks.length; i++) {
          for (let j = 0; j < this.filteredBooks[i].idTag.length; j++) {
            for (let z = 0; z < this.tags.length; z++) {
              if (this.filteredBooks[i].idTag[j] == this.tags[z].tagID) {
                this.temp.push(this.filteredBooks[i]);
              }
            }
          }
        }
      }

      console.log(this.temp);
      console.log(this.filteredBooks);
    }
  },
  computed: {}
};
</script>