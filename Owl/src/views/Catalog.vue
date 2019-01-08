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
          <select class="form-control" id="filterAuthors">
            <option>Todos</option>
            <option v-for="book in books" :key="book">{{book.author}}</option>
          </select>
          
          <label for="filterPublisher" class="mt-2">Por Editora:</label>
          <select class="form-control" id="filterPublisher">
            <option>Todos</option>
            <option v-for="publisher in publishers" :key="publisher">{{publisher}}</option>
          </select>
          
          <label for="filterTag" class="mt-2">Por Tag:</label>
          <select class="form-control" id="filterTag">
            <option>Todos</option>
            <option v-for="tag in tags" :key="tag">{{tag.tagDescription}}</option>
          </select>
        </div>
        <div class="col-12 col-md-8 ml-md-3" id="catalogContents">
          <div class="row">
            <div class="col-6 col-md-3" v-for="book in books" :key="book">
              <router-link to="/book">
                <img class="owlCovers mt-3" v-bind:src="book.cover">
              </router-link>
              <h6 class="mt-2">{{book.title}}</h6>
              <h6>{{book.author}}</h6>
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
  height: 300px;
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
      publishers: []
    };
  },

  created() {
    getPublishers();
  },

  methods: {
    
  },
  computed: {
    getPublishers() {
      for (let i = 0; i < this.books.length; i++) {
        if (this.publishers.indexOf(this.books[i].publisher) == -1) {
          this.publishers.push(this.books[i].publisher);
        }
      }
    }
  }
};
</script>
