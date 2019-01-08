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
  },
  data: function() {
    return {
      users: this.$store.state.users,
      user: {
          userName: "",
          email: "",
          photo: "../assets/perfil.jpg"
      }
    };
  },

  created() {
    
  },

  methods: {
      getUserProfile() {
        for (let i = 0; i < this.users.length; i++) {
            if (this.users[i].userId == this.userLoggedIn) {
                this.user.userName = this.users[i].firstName + " " + this.users[i].lastName
                this.user.email = this.users[i].email
            }
        }
          
      }
  },
  computed: {
    
  }
};
</script>