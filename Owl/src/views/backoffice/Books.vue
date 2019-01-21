<template>
  <div>
    <backOfficeNav/>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle" id>
          <h3>Adicionar Livro</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent">
          <form action id="formBooks">
            <div class="row alignLeft mt-2">
              <div class="col-4">
                <label for="inputTitle">Titulo</label>
                <input type="text" id="inputTitle" class="form-control" v-model="form.title">
              </div>
              <div class="col-4">
                <label for="inputCover">Capa</label>
                <input type="text" id="inputCover" class="form-control" v-model="form.cover">
              </div>
              <div class="col-4">
                <label for="inputAuthor">Autor</label>
                <input type="text" id="inputAuthor" class="form-control" v-model="form.author">
              </div>
            </div>
            <div class="row alignLeft mt-2">
              <div class="col-4">
                <label for="inputTitle">Editora</label>
                <input type="text" id="inputTitle" class="form-control" v-model="form.publisher">
              </div>
              <div class="col-4">
                <label for="inputCover">Tags</label>
                <input type="text" id="inputCover" class="form-control" v-model="form.tags">
              </div>
              <div class="col-4">
                <label for="inputAuthor">Data Lançamento</label>
                <input type="text" id="inputAuthor" class="form-control" v-model="form.launchDate">
              </div>
            </div>
            <div class="row alignLeft mt-2">
              <div class="col-4">
                <label for="inputTitle">Descrição</label>
                <input type="text" id="inputTitle" class="form-control" v-model="form.description">
              </div>
              <div class="col-4">
                <label for="inputCover">Disponibilidade</label>
                <input
                  type="text"
                  id="inputCover"
                  class="form-control"
                  v-model="form.disponibility"
                >
              </div>
              <div class="col-4">
                <label for="inputAuthor">Estado do livro</label>
                <input type="text" id="inputAuthor" class="form-control" v-model="form.bookStatus">
              </div>
              <div class="col-4">
                <button
                  type="button"
                  id="btnSubmit"
                  @click="addBook"
                  class="btn btn-lg mt-3 mb-3"
                >Adicionar Livro</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle" id>
          <h3>Livros</h3>
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
                <td v-if="editBool  || book.bookId != editID">{{book.title}}</td>
                <td v-if="editBool == false && book.bookId == editID">
                  <input type="text" class="form-control editInput" v-model="edit.title">
                </td>
                <td>
                  <input type="button" @click="seeCover(book.cover)" value="+">
                </td>
                <td v-if="editBool || book.bookId != editID">{{book.author}}</td>
                <td v-if="editBool == false && book.bookId == editID">
                  <input type="text" class="form-control editInput" v-model="edit.author">
                </td>
                <td v-if="editBool || book.bookId != editID">{{book.publisher}}</td>
                <td v-if="editBool == false && book.bookId == editID">
                  <input type="text" class="form-control editInput" v-model="edit.publisher">
                </td>
                <td v-if="editBool || book.bookId != editID">{{book.tags}}</td>
                <td v-if="editBool == false && book.bookId == editID">
                  <input type="text" class="form-control editInput">
                </td>
                <td v-if="editBool || book.bookId != editID">{{book.launchDate}}</td>
                <td v-if="editBool == false && book.bookId == editID">
                  <input type="text" class="form-control editInput" v-model="edit.launchDate">
                </td>
                <td>
                  <input type="button" @click="seeDescription(book.description)" value="+">
                </td>
                <td>{{book.disponibility}}</td>
                <td v-if="editBool || book.bookId != editID">{{book.bookStatus}}</td>
                <td v-if="editBool == false && book.bookId == editID">
                  <input type="text" class="form-control editInput" v-model="edit.bookStatus">
                </td>
                <td>
                  <button
                    type="button"
                    style="color:white"
                    @click="editBook(book.bookId)"
                    class="btn btn-dark"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    style="color:white"
                    @click="deleteBook(book.bookId)"
                    class="btn btn-danger"
                  >
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
.coverSize {
  height: 200px;
  width: 150px;
}

.editInput {
  height: 35px;
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
      books: this.$store.state.books,
      editBool: true,
      editID: 0,
      created: false,
      edit: {
        title: "",
        author: "",
        publisher: "",
        // tags: "",
        launchDate: "",
        bookStatus: ""
      },
      form: {
        title: "",
        cover: "",
        author: "",
        publisher: "",
        tags: "",
        launchDate: "",
        description: "",
        disponibility: "",
        bookStatus: ""
      }
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
    },

    editBook(id) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].bookId === id) {
          if (this.created == false) {
            this.edit.title = this.books[i].title;
            this.edit.author = this.books[i].author;
            this.edit.publisher = this.books[i].publisher;
            this.created = true;
          }

          if (this.editBool && this.created) {
            this.editID = id;
            this.edit.title = this.books[i].title;
            this.edit.author = this.books[i].author;
            this.edit.publisher = this.books[i].publisher;
            this.editBool = false;
          } else {
            this.editBool = true;
            this.editID = i;
            this.$store.dispatch("edit_book", {
              bookId: this.editID,
              title: this.edit.title,
              author: this.edit.author,
              publisher: this.edit.publisher
            });
            swal({
              type: "success",
              title: "Livro editado com sucesso."
            });
          }
        }
      }
    },

    deleteBook(id) {
      swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].bookId === id) {
              this.$store.dispatch("delete_book", i);
              swal("Deleted!", "Book has been deleted.", "success"); 
            }
          }
        }
      });
    },

    addBook() {
      this.$store.dispatch("add_book", {
        bookId: this.$store.getters.getLastIdBooks,
        title: this.form.title,
        cover: this.form.cover,
        author: this.form.author,
        publisher: this.form.publisher,
        tags: this.form.tags,
        launchDate: this.form.launchDate,
        description: this.form.description,
        availability: this.form.disponibility,
        bookStatus: this.form.bookStatus
      });
      swal({
        type: "success",
        title: "Livro adicionado com sucesso."
      });
      document.getElementById("formBooks").reset();
    }
  },

  created() {}
};
</script>
