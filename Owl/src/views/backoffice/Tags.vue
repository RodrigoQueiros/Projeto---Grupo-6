<template>
  <div>
    <backOfficeNav/>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle" id>
          <h3>Adicionar Tag</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent" id>
          <form action id="formTags">
            <div class="row alignLeft mt-2">
              <div class="col-4">
                <label for="inputTag">Categoria</label>
                <input type="text" id="inputTag" class="form-control" v-model="tag">
              </div>
              <div class="col-4 mt-3">
                <button
                  type="button"
                  id="btnSubmit"
                  @click="addTag"
                  class="btn btn-lg mt-3 mb-3"
                >Adicionar Tag</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle" id>
          <h3>Tags</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent">
          <table class="table mt-4 table-responsive">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Titulo</th>
                <th scope="col">Ações</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="tag in tags" :key="tag.tagId">
                <td>{{tag.tagId}}</td>
                <td v-if="editBool || tag.tagId != editID">{{tag.tagDescription}}</td>
                <td v-if="editBool == false && tag.tagId == editID">
                  <input type="text" class="form-control editInput" v-model="edit.tagDescription">
                </td>
                <td>
                  <button
                    type="button"
                    style="color:white"
                    @click="editTag(tag.tagId)"
                    class="btn btn-dark"
                  >
                    <i class="fas fa-edit"></i>
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    style="color:white"
                    @click="deleteTag(tag.tagId)"
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
      tags: this.$store.state.tags,
      tag: "",
      edit: {
        tagDescription: ""
      },
      editBool: true,
      editID: 0,
      created: false
    };
  },

  methods: {
    editTag(id) {
      let a = false;
      let b = false
      let storeEditId = 0;
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].tagId === id) {
          if (this.created == false) {
            this.edit.tagDescription = this.tags[i].tagDescription;
            this.created = true;
          }
          if (this.editBool && this.created) {
            this.editID = id;
            this.edit.tagDescription = this.tags[i].tagDescription;
            this.editBool = false;
          } else {
            b = true
            console.log("d")
            storeEditId = i;
            for (let j = 0; j < this.tags.length; j++) {
              
              console.log(this.edit.tagDescription);
              if (this.tags[j].tagDescription === this.edit.tagDescription) {
                a = true;
              }
            }
          }
        }
      }
      if (a) {
        swal({
          type: "error",
          title: "Tag já existente."
        });
      } else if(b){
        this.editBool = true;
        this.$store.dispatch("edit_tag", {
          tagId: storeEditId,
          tagDescription: this.edit.tagDescription
        });
        swal({
          type: "success",
          title: "Tag editada com sucesso."
        });
      }
    },

    deleteTag(id) {
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
          for (let i = 0; i < this.tags.length; i++) {
            if (this.tags[i].tagId === id) {
              this.$store.dispatch("delete_tag", i);
              swal("Deleted!", "Tag has been deleted.", "success");
            }
          }
        }
      });
    },

    addTag() {
      let tagExists = false;
      for (let i = 0; i < this.tags.length; i++) {
        if (this.tags[i].tagDescription === this.tag) {
          tagExists = true;
        }
      }
      if (tagExists) {
        swal({
          type: "error",
          title: "Tag já existente."
        });
        document.getElementById("formTags").reset();
      } else {
        this.$store.dispatch("add_tag", {
          tagId: this.$store.getters.getLastIdTags,
          tagDescription: this.tag
        });
        swal({
          type: "success",
          title: "Tag adicionada com sucesso."
        });
        document.getElementById("formTags").reset();
      }
    }
  }
};
</script>
