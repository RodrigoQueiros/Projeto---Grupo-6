<template>
  <div>
    <backOfficeNav/>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle">
          <h3>Utilizadores</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent">
          <table class="table mt-4">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome Próprio</th>
                <th scope="col">Último Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Foto</th>
                <th scope="col">Type</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userId">
                <td>{{user.userId}}</td>
                <td>{{user.firstName}}</td>
                <td>{{user.lastName}}</td>
                <td>{{user.email}}</td>
                <td>{{user.photo}}</td>
                <td>{{user.type}}</td>
                <td>
                  <button
                    type="button"
                    style="color:white"
                    @click="deleteUser(user.userId)"
                    class="btn btn-danger mr-2"
                  >
                    <i class="fas fa-trash-alt"></i>
                  </button>
                  <button v-if="user.type != 'admin'" type="button" style="color:white" @click="addAdmin(user.userId)" class="btn btn-dark">Tornar Admin</button>
                  <button v-if="user.type == 'admin'" type="button" style="color:white" @click="deleteAdmin(user.userId)" class="btn btn-dark">Retirar Admin</button>
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
      users: this.$store.state.users
    };
  },

  created() {

  },

  methods: {
    deleteUser(id) {
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
          this.$store.dispatch("delete_user", id);
          swal("Deleted!", "User has been deleted.", "success");
        }
      });
    },

    addAdmin(id) {
      this.$store.dispatch("add_admin", id);
    },

    deleteAdmin(id) {
      this.$store.dispatch("delete_admin", id);
    }
  }
};
</script>

