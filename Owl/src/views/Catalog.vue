<template>
 <div class="home">
    <Header/>
   <h1>This the catalog page</h1>
    <router-link to="/book">Book</router-link> 
  <div class="box">
    <div class="row">
      <div class="col-4" id="filterBar">Filtros</div>
      <div class="col-8" id="catalogBar"> Catalogo</div>
    </div>
    <div class="row">
      <div class="col-4" id="filterContents">Coiso e tal</div>
      <div class="col-8" id="catalogContents"> Catalogo</div>
    </div>
  </div>

  </div>

  
</template>

<style>
#filterBar {
  background-color: #bf6e26 !important;
  height: 50px;
  padding-right: 10px
}
#filterContents{
    background-color:#D9B97E;
    height: 200px;
    padding-right: 10px
}
#catalogBar {
  background-color: #bf6e26 !important;
  height: 50px;
}
#catalogContents{
    background-color:#D9B97E;
    height: 200px
}
.box {
  margin-left: 5%;
  margin-right: 5%
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
