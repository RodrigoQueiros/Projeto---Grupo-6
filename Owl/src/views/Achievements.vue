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
        <div class="col-12 col-md-12 boxContent"> <!-- Show Points -->

            <div class="col-4 mt-3 mb-3" style="background-color:white">
              <div class="row">
              <div class="col-3"><i class="fas fa-star-half-alt mt-4 pb-3" style="font-size:60px;color:peru"></i></div>
              <div class="col-8">
              <h4 class="mt-5">
                Fazer 1 requisição <i class="far fa-check-circle" style="color:green" v-if="achReq>0"></i>
              </h4>
              </div>
              </div>              
            </div>
            <div class="col-4 mt-3 mb-3" style="background-color:white">
              <div class="row">
              <div class="col-3"><i class="fas fa-star-half-alt mt-4 pb-3" style="font-size:60px;color:peru"></i></div>
              <div class="col-8">
              <h4 class="mt-5">
                Fazer 1 requisição <i class="far fa-check-circle" style="color:green" v-if="achReq>0"></i>
              </h4>
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
      clickedBook: 0,
      buttonText: "Requisitar",
      requisitions: [],
      books: [],
      users: [],
      reviews: [],
      buttonActive: true,
      bookDeliver: false,
      bookReq: false,
      verifyEdit: false,
      editThatOne: -1,
      picked: 0,
      reviewArea: "",
      bookRating: 0,
      reviewCheck: 0,
      pageBookId: 0,
    };
    },
    components: {
    Header,
    Footer
    },
    methods: {

    },
    created(){

    },
};
</script>
    