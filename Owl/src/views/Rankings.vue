<template>
 <div class="home">
    <Header/>
   
   <div class="margin5 mt-4">

    <div class="row">
        <div class="col-12 col-md-5 boxTitle" style="margin:auto">
          <h3>Rank de utilizadores</h3>
        </div>
        
        <div class="col-12 col-md-5 boxTitle" style="margin:auto">
          <h3>Rank de livros</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-12 col-md-5 boxContent" style="margin:auto">

          <div class="row">
            <div class="col-2"><h4>#</h4></div>
            <div class="col-7"><h4>Nome</h4></div>
            <div class="col-3"><h4>Pontos</h4></div>
          </div>
          <div v-for="(users,i) in filtredUsers" :key="users.userId">
            <div class="row">
              <div class="col-2"><p>{{i+1}}</p></div>
              <div class="col-1">
                <i class="fas fa-trophy" style="color:gold" v-if="i+1==1"></i>
                <i class="fas fa-trophy" style="color:silver" v-if="i+1==2"></i>
                <i class="fas fa-trophy" style="color:bronze" v-if="i+1==3"></i>
                </div>
              <div class="col-6"><p style="text-align: left">{{users.firstName}} {{users.lastName}}</p></div>
              <div class="col-3"><p>{{users.points}}</p></div>           
              
            </div>

          </div>

          
        </div>
        
        <div class="col-12 col-md-5 boxContent" style="margin:auto">
          <div class="row">
            <div class="col-2"><h4>#</h4></div>
            <div class="col-7"><h4>Livro</h4></div>
            <div class="col-3"><h4>Views</h4></div>
          </div>
          <div v-for="(book, i) in filtredBooks" :key="book.bookId">
            <div class="row">
              
              <div class="col-2"><p>{{i+1}}</p></div>
              <div class="col-1">
                <i class="fas fa-trophy" style="color:gold" v-if="i+1==1"></i>
                <i class="fas fa-trophy" style="color:silver" v-if="i+1==2"></i>
                <i class="fas fa-trophy" style="color:DarkGoldenRod" v-if="i+1==3"></i>
                </div>
              <div class="col-6"><p style="text-align: left">{{book.firstName}} {{book.title}}</p></div>
              <div class="col-3"><p>{{book.nViews}}</p></div>           
              
            </div>

          </div>
        </div>
    </div>

    </div>

   <Footer/>
  </div>
</template>


<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  },
  data: function() {
    return {      
      requisitions: [],
      books: [],
      users: [],
      reviews: [], 
      filtredUsers: [],
      filtredBooks:[],
      count:[1,2,3,4,5,6,7,8,9,10],
    }
  },
    methods: {
      bookRank(){
        const top = this.books.sort(
        function orderByViews(a, b) {
          if (a.nViews > b.nViews) return -1;
          if (a.nViews < b.nViews) return 1;
          else return 0;
        }
      )

      return top.slice(0, 10)
      },
      
      userRank(){

      const top = this.users.sort(
        function orderByPoints(a, b) {
          if (a.points > b.points) return -1;
          if (a.points < b.points) return 1;
          else return 0;
        }
      )

      return top.slice(0, 10)
      },


    },
    computed: {},
    beforeMount() {
    this.requisitions = this.$store.getters.requisitions;
    this.books = this.$store.getters.books;
    this.users = this.$store.getters.users;
    this.reviews = this.$store.getters.reviews;
    this.filtredUsers = this.userRank();
    this.filtredBooks = this.bookRank();

    }
}
</script>
