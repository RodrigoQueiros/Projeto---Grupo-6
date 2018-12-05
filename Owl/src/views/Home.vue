<template>

  <div class="home">
    <Mainbar/>
    <Header/>

    <h1>Home page</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
//import Mainbar from '@/components/Mainbar.vue'
export default {
  name: 'home',
  components: {
    Header,
    //Mainbar
  }
}
</script>
