<template>
  <div>
    <backOfficeNav/>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle" id>
          <h3>Livros</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent" id>
          <div class="col-12 col-md-12 boxContent">
            <table class="table mt-4">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Titulo</th>
                  <th scope="col">Url</th>
                  <th scope="col">Autor</th>
                  <th scope="col">Editora</th>
                  <th scope="col">Tag</th>
                  <th scope="col">Data</th>
                  <th scope="col">Descriçao</th>
                  <th scope="col">Disponibilidade</th>
                  <th scope="col">Estado</th>
                  <th scope="col">Ações</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="book in books" :key="book.bookId">
                  <td>{{book.bookId}}</td>
                  <td>{{book.title}}</td>
                  <td>
                    <input type="button" @click="seeCover(book.cover)" value="+">
                  </td>
                  <td>{{book.author}}</td>
                  <td>{{book.publisher}}</td>
                  <td>{{book.tags}}</td>
                  <td>{{book.launchDate}}</td>
                  <td>
                    <input type="button" @click="seeDescription(book.description)" value="+">
                  </td>
                  <td>{{book.disponibility}}</td>
                  <td>{{book.bookStatus}}</td>
                  <td>
                    <button type="button" style="color:white" @click="editInformation" class="btn btn-dark">
                      <i class="fas fa-edit"></i>
                    </button>
                  </td>
                  <td>
                    <button type="button" style="color:white" @click="editInformation" class="btn btn-danger">
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
  </div>
</template>

<style>
.coverSize {
  height: 200px;
  width: 150px;
}
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
      books: this.$store.state.books
    };
  },

  methods: {
    seeDescription(description) {
      swal({
        type: "info",
        title: "Descrição",
        text: description,
        showConfirmButton: true
      });
    },

    seeCover(cover) {
      swal({
        title: "Url",
        text: cover,
        html:
          '<img src="' +
          cover +
          '" alt="" class="coverSize">' +
          '<p class="mt-1">' +
          cover +
          "</p>",
        showConfirmButton: true,
        showCancelButton: true,
        cancelButtonText: "Edit",
        cancelButtonColor: "#592316"
      }).then(result => {
        if (result.dismiss == "cancel") {
          console.log("oi");
        }
      });
    }
  }
};
</script>
