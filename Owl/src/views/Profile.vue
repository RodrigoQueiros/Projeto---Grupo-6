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
                  <img :src="user.photo" height="250" width="250" alt="" class="mt-4 ml-2"> 
                </div>
                <div class="col-9">
            
                  <h4 class="mt-5" >Nome de Utilizador</h4>
                  <p>{{user.firstName}} {{user.lastName}}</p>
                  <h4>Email</h4>
                  <p>{{user.email}}</p>
            
                  <a id="edit" href="#" data-toggle='modal' data-target='#editarPerfilModal' class="btn btn-dark "><i class="fas fa-edit"></i> Editar perfil</a> 
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

  .boxContent{
    background-color:#D9B97E;
    height: 300px
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
      userLoggedIn: localStorage.getItem("userLoggedIn")
      // user: {
      //     userName: "",
      //     email: "",
      //     photo: "../assets/perfil.jpg"
      // }
    };
  },

  created() {
    
  },

  methods: {
      // getUserProfile() {
      //   for (let i = 0; i < this.users.length; i++) {
      //       if (this.users[i].userId == this.userLoggedIn) {
      //           this.user.userName = this.users[i].firstName + " " + this.users[i].lastName
      //           this.user.email = this.users[i].email
      //       }
      //   }
          
      // }
  },
  computed: {
    
  }
};
</script>