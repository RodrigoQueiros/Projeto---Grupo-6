<template>
  <div class="Achievements">
    <Header/>

    <div class="margin5 mt-4">
      <!--Header row-->
      <div class="row">
        <div class="col-12 col-md-12 boxTitle">
          <h3>Conquistas</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-md-12 boxContent">
          <!-- Show Points -->
          <div class="row">
            <div
              class="col-4 mt-3 mb-3 pl-5 pr-5"
              v-for="(achievement,i) in achievements.type1"
              :key="achievement"
            >
              <div class="row" style="background-color:white">
                <div class="col-3">
                  <i
                    class="fas fa-star-half-alt mt-4 pb-3"
                    style="font-size:60px"
                    v-bind:style="{ color: getTheRightAch(i)[0]}"
                  ></i>
                </div>
                <div class="col-8">
                  <h4 class="mt-4" v-if="getTheRightAch(i)[1]==1">
                    {{achievements.text1[0]}}{{achievements.type1[i]}}{{achievements.text1[1]}}
                    <i class="far fa-check-circle" style="color:green" v-if="achievementReq(achievements.type1[i])>achievements.type1[i]"></i>
                  </h4>
                  <h4 class="mt-4" v-if="getTheRightAch(i)[1]==2">
                    {{achievements.text2[0]}}{{achievements.type1[i]}}{{achievements.text2[1]}}
                    <i class="far fa-check-circle" style="color:green" v-if="achReq>0"></i>
                  </h4>
                  <h4 class="mt-4" v-if="getTheRightAch(i)[1]==3">
                    {{achievements.text3[0]}}{{achievements.type1[i]}}{{achievements.text3[1]}}
                    <i class="far fa-check-circle" style="color:green" v-if="achReq>0"></i>
                  </h4>
                  <h4 class="mt-4" v-if="getTheRightAch(i)[1]==4">
                    {{achievements.text4[0]}}{{achievements.type1[i]}}{{achievements.text4[1]}}
                    <i class="far fa-check-circle" style="color:green" v-if="achReq>0"></i>
                  </h4>
                  <div class="progress">
                    <div v-if="achievementReq(achievements.type1[i])[1]==100"
                      class="progress-bar progress-bar-striped bg-primary"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      v-bind:style="{width: achievementReq(achievements.type1[i])[2]}"
                    >Completo</div>
                    <div v-if="achievementReq(achievements.type1[i])[1]<100"
                      class="progress-bar progress-bar-striped progress-bar-animated bg-success"
                      role="progressbar"
                      aria-valuenow="75"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      v-bind:style="{width: achievementReq(achievements.type1[i])[2]}"
                    >{{achievementReq(achievements.type1[i])[2]}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>
<style>
</style>
<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import swal from "sweetalert2";
export default {
  data: function() {
    return {
      loggedUser: 0,
      requisitions: [],
      books: [],
      users: [],
      reviews: [],
      achievements: []
    };
  },
  components: {
    Header,
    Footer
  },
  methods: {
    getTheRightAch(pos) {
      let index1 = "";
      let index2 = 0;

      if (pos < 3) {
        //Have the right text
        index2 = 1;
      } else if (pos < 6) {
        index2 = 2;
      } else if (pos < 9) {
        index2 = 3;
      } else {
        index2 = 4;
      }

      while (pos > 2) {
        pos -= 3;
      }

      if ((pos + 1) % 3 == 0) {
        //Change color of star (bronze, silver, gold)
        index1 = "Gold";
      } else if ((pos + 1) % 2 == 0) {
        index1 = "Silver";
      } else {
        index1 = "Peru";
      }

      return [index1, index2];
    },
    achievementReq(n){
      let numberReq = 0
      let percent = 0
      let text = ""


      for (let i = 0; i< this.requisitions.length; i++) {
        
        if(this.requisitions[i].userId == this.userLoggedIn){
          numberReq++
        }
       
      }

      if(numberReq>n){
        text= 100 + "%"
        percent = 100
        console.log(percent)
      }
      else{
        percent = parseInt(numberReq/n * 100)
        text= percent + "%"
        
      }

      console.log(n)
      console.log(numberReq)
      console.log(percent)
      console.log(text)
      return [numberReq,percent,text]
    },
  },
  beforeMount() {
    this.loggedUser = localStorage.getItem("userLoggedIn");
    this.clickedBook = this.$route.params.id;

    this.requisitions = this.$store.getters.requisitions;
    this.books = this.$store.getters.books;
    this.users = this.$store.getters.users;
    this.reviews = this.$store.getters.reviews;
    this.achievements = this.$store.state.achievements;
    console.table(this.achievements);
  }
};
</script>
    