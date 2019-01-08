<template>
  <div class="login">
    <Header/>
    <div class="form-wrapper text-center">
      <form class="form-signin">
        <img class="mb-4" src="white.png" alt width="100" height="100">
        <h1 class="h3 mb-3 font-weight-normal">Log in</h1>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          v-model="form.email"
          required
          autofocus
        >
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          v-model="form.password"
          required
        >
        <button class="btn btn-lg btn-block" id="btnLogin" @click="login" type="submit">Log in</button>
      </form>
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
}

.form-wrapper {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  /*background-color: #f5f5f5;*/
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin input[type="email"] {
  margin-bottom: 5px;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
}

#btnLogin {
  background-color: #bf6e26;
  color: white;
}

#btnLogin:hover {
  opacity: 0.9;
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
    name: "login",
  components: {
    Header
  },
  data: function() {
    return {
      form: {
        email: "",
        password: "",
        
      }
    };
  },
  methods: {

   login() {

     let user = {
       email: this.form.email,
       password: this.form.password,
     }

     let loginVerified = this.$store.getters.Login(user)
     if (loginVerified) {
       alert("Login efetuado com sucesso.")
     }
     else {
       alert("Os seus dados estão incorretos.")
     }
     

   }
  },
  
};
</script>
