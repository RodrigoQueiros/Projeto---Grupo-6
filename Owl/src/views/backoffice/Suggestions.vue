<template>
  <div>
    <backOfficeNav/>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle">
          <h3>Sugestões</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent">
          <table class="table mt-4 table-responsive">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Titulo</th>
                <th scope="col">Capa</th>
                <th scope="col">Autor</th>
                <th scope="col">Utilizador</th>
                <th scope="col">Ações</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bookSuggestion in bookSuggestions" :key="bookSuggestion.bookSuggestionId">
                <td>{{bookSuggestion.suggestionId}}</td>
                <td>{{bookSuggestion.suggestionTitle}}</td>
                <td>
                  <input type="button" @click="seeCover(bookSuggestion.suggestionCover)" value="+">
                </td>
                <td>{{bookSuggestion.suggestionAuthor}}</td>
                <td>{{username}}</td>
                <td>
                  <button type="button" style="color:white" class="btn btn-dark">
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button type="button" style="color:white" class="btn btn-danger">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import backOfficeNav from "@/components/backOfficeNav.vue";
import swal from "sweetalert2";

export default {
  components: {
    backOfficeNav
  },
  data: function() {
    return {
      bookSuggestions: this.$store.state.bookSuggestions,
      users: this.$store.state.users,
      username: ""
    };
  },

  created() {
    this.username = this.getUsername()
  },

  methods: {
    seeCover(cover) {
      swal({
        title: "Capa",

        html: '<img src="' + cover + '" alt="" class="coverSize">' + "</p>",
        showConfirmButton: true
      });
    },

    getUsername() {
      for (let i = 0; i < this.users.length; i++) {
        for (let j = 0; j < this.bookSuggestions.length; j++) {
          if (this.users[i].userId == this.bookSuggestions[j].userId) {
            this.username =
              this.users[i].firstName + " " + this.users[i].lastName;
          }
        }
      }
      return this.username;
    }
  }
};
</script>
