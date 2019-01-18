<template>
  <div class="home">
    <Header/>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle" id>
          <h3>Sugerir livro</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent" id>
          <form action id="formSugestion">
            <label for="formTitle" class="mt-3">Titulo</label>
            <input type="text" class="form-control" id="formTitle" v-model="form.title">
            <label for="formCover" class="mt-3">Capa</label>
            <input type="text" class="form-control" id="formCover" v-model="form.cover">
            <label for="formAuthor" class="mt-3">Autor</label>
            <input type="text" class="form-control" id="formAuthor" v-model="form.author">
            <button
              type="button"
              id="btnSubmit"
              @click="addSuggestion"
              class="btn btn-lg mt-3 mb-3"
            >Submeter</button>
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
import swal from "sweetalert2";

export default {
  components: {
    Header
  },
  data: function() {
    return {
      userLoggedIn: localStorage.getItem("userLoggedIn"),
      form: {
        title: "",
        cover: "",
        author: ""
      }
    };
  },

  methods: {
    addSuggestion() {
      this.$store.dispatch("add_suggestion", {
        suggestionId: this.$store.getters.getLastIdSuggestions,
        suggestionTitle: this.form.title,
        suggestionAuthor: this.form.cover,
        suggestionCover: this.form.author,
        userId: this.userLoggedIn
      });
      swal({
        type: "success",
        title: "Livro sugerido com sucesso."
      });
      document.getElementById("formSugestion").reset();
    }
  }
};
</script>
