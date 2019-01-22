<template>
  <div class="home">
    <Header/>
   <br>
   <div class="box mt-4">
     <div class="row">
     <div class="col-12 col-md-6 ml-md-5">
     <Recomend/> 
     </div>
        <div class="col-12 col-md-4 ml-md-3" id="filterBar">
          <h3>Top Livros</h3>
              <div class="row">
        <div class="col-md-12" id="topBooks">
          <br>
        <img class="owlCovers" src="https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg">      
        <br>
        <br>
          <img class="owlCovers" src="https://images-na.ssl-images-amazon.com/images/I/51HSkTKlauL._SX346_BO1,204,203,200_.jpg">       
        <br>
        <br>
       

     

        </div>
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

.owlCovers {
  height: 200px;
  width: 150px;
  box-sizing: border-box;
  border: 3px solid white;
  border-radius: 5px;
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
      canvasControl: false
    };
  },
  created() {
  if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
  }
};
</script>
