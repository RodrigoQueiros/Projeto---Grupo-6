<template>
 <div class="home">
    <Header/>
   <div class="margin5 mt-4">
      <div class="row ">
        <div class="col-12 col-md-12 boxTitle" id="">
        <h3>Perfil</h3>
      </div>

      </div>
      <div class="row ">
        <div class="col-12 col-md-12 boxContent" id="">
          <div v-for="user in users" :key="user">
            <div v-if="user.userId == userLoggedIn">
              <div class="row" style="text-align:left">
                <div class="col-12 col-md-6 col-lg-3">
                  <img :src="user.photo" height="200" width="250" alt="" id="profilePhoto" class="mt-4 ml-2 mb-4">
                </div>
                <div class="col-12 col-md-6 col-lg-9">

                  <h4 class="mt-4" >Nome de Utilizador</h4>
                  <p v-if="clicked == false">{{user.firstName}} {{user.lastName}}</p>
                  <div class="row">
                    <input v-if="clicked" type="text" class="form-control editInput col-4 col-lg-3 mb-1 ml-3" v-model="user.firstName">
                    <input v-if="clicked" type="text" class="form-control editInput col-4 col-lg-3 ml-1 mb-2" v-model="user.lastName">
                  </div>
                  
                  <h4>Email</h4>
                  <p v-if="clicked == false">{{user.email}}</p>
                  <input v-if="clicked" type="text" class="form-control editInput col-9 col-lg-7 mb-2" v-model="user.email">
                  <a id="btnEdit" @click="editProfile" class="btn btn-dark mt-1"><i class="fas fa-edit"></i> Editar perfil</a>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>

  .boxContent{
    background-color:#D9B97E;
    height: 260px;
    color: #592316
  }

  #profilePhoto {
    box-sizing: border-box;
    border: 3px solid white;
    border-radius: 5px;
  }

  #btnEdit {
    color: white;
    background-color: #592316
  }

  .editInput {
    height: 35px;
  }

  #btnEdit:hover {
    opacity: 0.9;
  }

</style>

<script>

import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  },
  data: function() {
    return {
      users: this.$store.state.users,
      userLoggedIn: localStorage.getItem("userLoggedIn"),
      clicked: false,
      user: {
        firstName: "",
        lastName: "",
        email: ""
      }
    };
  },

  created() {
    this.user.firstName = this.users[this.userLoggedIn].firstName
    this.user.lastName =  this.users[this.userLoggedIn].lastName
    this.user.email = this.users[this.userLoggedIn].email
  },

  methods: {
      editProfile() {
        this.$store.dispatch("delete_book", this.user)

      }
  },
  computed: {

  }
};
</script>