<template>
  <!-- Renders the navbar with the respective router-links -->
  <!--<nav class="navbar navbar-expand-sm navbar-dark fixed-top navbarOwl">
    <a class="navbar-brand" href="/">Owl</a>
    <ul class="navbar-nav">
      <li class="nav-item">
        <router-link to="/">Home</router-link>|
      </li>
      <li class="nav-item">
        <router-link to="/catalog">Catalogo</router-link>|
      </li>
      <li class="nav-item">
        <router-link to="/rankings">Rankings</router-link>|
      </li>
      <li class="nav-item">
        <router-link to="/suggest">Sugerir livro</router-link>|
      </li>
      <li class="nav-item">
        <router-link to="/login">Login</router-link>|
      </li>
      <li class="nav-item">
        <router-link to="/signup">Signup</router-link>|
      </li>
    </ul>
  </nav>-->
  <div>
    <nav class="navbar navbar-light bg-light" id="navbar1">
        
        <router-link class="navbar-brand" to="/">
            <img src="../assets/logo.png" alt="" id="logo">
        </router-link>
   </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbarNav">
        
        <ul class="navbar-nav">
            <li class="nav-item " id="navLinks">
                <router-link class="nav-link" to="/" color="white">Home </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/catalog">Catalogo</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/rankings">Rankings</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/suggest">Sugerir Livro</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" id="right" to="/login">LogIn</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/signup">SignUp</router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" to="/signup">SignUp</router-link>
            </li>
            
        </ul>
    </nav>
  </div>
  
</template>

<style>


#navbar1 {
    background-color: #BF6E26 !important;
    color: white !important;
    height: 100px;
}

#logo {
    width:171px;
    height: 94px;
}

#navbarNav{
    background-color: #592316 !important;
    color: white !important;
}

.nav-link {
    color: white !important;
    padding-left: 25px !important; 
}

/* #right {
    padding-left: 1350px !important;
} */

</style>


<script>
export default {
  data: function() {
    return {
        
    };
  },
  methods: {

  },
  
};
</script>
