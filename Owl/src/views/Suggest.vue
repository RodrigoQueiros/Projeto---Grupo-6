<template>
 <div class="home">
    <Header/>
   <div class="margin5 mt-4">
      <div class="row ">
        <div class="col-12 col-md-12 boxTitle" id="">
        <h3>Sugerir livro</h3>
      </div>

      </div>
      <div class="row ">        
        <div class="col-12 col-md-12 boxContent" id="">
          <form action="" id="formSugestion">
            <label for="formTitle" class="mt-3">Titulo</label>
            <input type="text" class="form-control" id="formTitle">
            <label for="formCover" class="mt-3">Capa</label>
            <input type="text" class="form-control" id="formCover">
            <label for="formAuthor" class="mt-3">Autor</label>
            <input type="text" class="form-control" id="formAuthor">
            <label for="formTag" class="mt-3">Género</label>
            <input type="text" class="form-control" id="formTag">
            <button type="button" id="btnSubmit" class="btn btn-lg mt-3">Submeter</button>
          </form>
        </div>
      </div>
      
    </div>   
  </div>
</template>

<style>
  #formSugestion {
    text-align: left;
  }

  .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }

  #btnSubmit {
    background-color: #592316;
    color: white;
    
  }

  #btnSubmit:hover {
    opacity: 0.9;
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
