<template>
  <div>
    <nav class="navbar navbar-light bg-light alignLeft" id="navbar1">
      <router-link :to="{name: 'home'}">
        <img src="../assets/logo.png" class="navbar-brand" alt id="logo">
      </router-link>
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'profile'}" id="pc">
            <div v-if="userLoggedIn != -1" style="color:white">
              <i class="fas fa-user fa-2x mr-2"></i>
              <h4>{{userName}}</h4>
            </div>
          </router-link>
        </li>
      </ul>
      <router-link class="nav-link" :to="{name: 'users'}" id="pc">
        <i
          v-if="userLoggedIn != -1 && type == 'admin'"
          style="color:white"
          class="fas fa-cog fa-2x"
        ></i>
      </router-link>
    </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbarNav">
      <ul class="navbar-nav alignLeft">
        <li class="nav-item">
          <router-link class="nav-link a" :to="{name: 'home'}" color="white">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link a" :to="{name: 'catalog'}">Catalogo</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link a" :to="{name: 'rankings'}">Rankings</router-link>
        </li>
        <li class="nav-item" v-if="userLoggedIn != -1">
          <router-link class="nav-link a" :to="{name: 'suggest'}">Sugerir Livro</router-link>
        </li>
        <li class="nav-item" v-if="userLoggedIn != -1">
          <router-link class="nav-link a" :to="{name:'achievements'}">Conquistas</router-link>
        </li>
        <li class="nav-item" v-if="userLoggedIn != -1">
          <router-link class="nav-link a" :to="{name:'profile'}" id="mobile">
            <i class="fas fa-user"></i>
            {{userName}}
          </router-link>
        </li>
        <li class="nav-item" v-if="userLoggedIn != -1 && type == 'admin'" id="mobile">
          <router-link class="nav-link a" :to="{name:'users'}">
            <i style="color:white" class="fas fa-cog"></i>
            Definições
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            v-if="userLoggedIn == -1"
            class="nav-link a"
            id="right"
            :to="{name: 'login'}"
          >LogIn</router-link>
        </li>
        <li class="nav-item">
          <router-link v-if="userLoggedIn == -1" class="nav-link a" :to="{name: 'signup'}">SignUp</router-link>
        </li>
        <li class="nav-item">
          <a v-if="userLoggedIn != -1" href @click="logout" class="nav-link a">Logout</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
#navbar1 {
  background-color: #bf6e26 !important;
  color: white !important;
  height: 100px;
}

h4 {
  display: inline;
}

#logo {
  width: 171px;
  height: 94px;
  padding-bottom: 10px;
}

#navbarNav {
  background-color: #592316 !important;
  color: white !important;
}

.a {
  color: white !important;
  padding-left: 25px !important;
}

@media screen and (max-width: 484px) {
  #pc {
    display: none;
  }
  #logo {
    width: 171px;
    height: 94px;
    margin-left: auto
  }
}

@media screen and (min-width: 484px) {
  #mobile {
    display: none;
  }
}

/* #right {
    padding-left: 1350px !important;
} */
</style>


<script>
export default {
  data: function() {
    return {
      userLoggedIn: localStorage.getItem("userLoggedIn"),
      users: this.$store.state.users,
      userName: "",
      type: ""
    };
  },

  created() {
    if (localStorage.getItem("userLoggedIn") == null) {
      localStorage.setItem("userLoggedIn", -1);
    }

    this.getUser();
    console.log(this.userName);
  },
  methods: {
    logout() {
      localStorage.setItem("userLoggedIn", -1);
      //this.$router.push("/")
      //por sweetalert
    },

    getUser() {
      for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].userId == this.userLoggedIn) {
          this.userName =
            this.users[i].firstName + " " + this.users[i].lastName[0] + ".";
          this.type = this.users[i].type;
        }
      }
    }
  },
  computed: {}
};
</script>
