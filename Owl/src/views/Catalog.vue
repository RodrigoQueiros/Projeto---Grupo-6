<template>
 <div class="home">
    <Header/>
   <h1>This the catalog page</h1>
    <router-link to="/book">Book</router-link> 
  <div class="box">
    <div class="row ">
      <div class="col-12 col-md-3" id="filterBar">
        <h3>Filtros</h3>
      </div>
      <div class="col-12 col-md-8 offset-1" id="catalogBar">
        <h3>Catalogo</h3>
      </div>
    </div>
    <div class="row ">
      <div class="col-12 col-md-3" id="filterContents"></div>
      <div class="col-12 col-md-8 offset-1" id="catalogContents"></div>
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
  text-align: left

}
#filterContents{
    background-color:#D9B97E;
    height: 200px;
    
}
#catalogBar {
  background-color: #bf6e26 !important;
  height: 50px;
  color: white;
  padding-top: 8px;
  text-align: left
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
