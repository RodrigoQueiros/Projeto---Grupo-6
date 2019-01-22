<template>
  <div class="home">
    <Header/>
   <br>
    <Recomend/>



  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Recomend from '@/components/Recomend.vue'
//import Mainbar from '@/components/Mainbar.vue'
export default {
  name: 'home',
  components: {
    Header,
    Recomend
    //Mainbar
  }
}
</script>
