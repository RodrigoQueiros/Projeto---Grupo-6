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
                <div class="col-3">
                  <img :src="user.photo" height="200" width="250" alt="" id="profilePhoto" class="mt-4 ml-2"> 
                </div>
                <div class="col-9">
            
                  <h4 class="mt-4" >Nome de Utilizador</h4>
                  <p v-if="clicked == false">{{user.firstName}} {{user.lastName}}</p>
                  <input v-if="clicked" type="text" class="form-control col-4 mb-1" v-model="user.firstName">
                  <input v-if="clicked" type="text" class="form-control col-4 mb-1" v-model="user.lastName">
                  
                  <h4>Email</h4>
                  <p v-if="clicked == false">{{user.email}}</p>
                  <input v-if="clicked" type="text" class="form-control col-4 mb-1" v-model="user.email" >
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

  .form-control {
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
    
  },

  methods: {
      editProfile() {
        if (this.clicked) {
          this.clicked = false
          
        }
        else {
          this.clicked = true
          this.users[this.userLoggedIn].firstName = this.user.firstName
          this.users[this.userLoggedIn].lastName = this.user.lastName
          this.users[this.userLoggedIn].email = this.user.email
        }
        
      }
  },
  computed: {

  }
};
</script>