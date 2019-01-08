<template>
  <div class="signup">
    <Header/>
    <div class="form-wrapper text-center">
      <form class="form-signin">
        <img class="mb-4" src="white.png" alt width="100" height="100">
        <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
        <label for="inputFirstName" class="sr-only">Nome</label>
        <input
          type="firstName"
          id="inputFirstName"
          class="form-control"
          placeholder="Nome próprio"
          v-model="form.firstName"
          required
        >
        <label for="inputLastName" class="sr-only">Nome</label>
        <input
          type="lastName"
          id="inputLastName"
          class="form-control"
          placeholder="Apelido"
          v-model="form.lastName"
          required
        >
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          v-model="form.email"
          required
         
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
        <label for="inputPassword2" class="sr-only">Repita a Password</label>
        <input
          type="password"
          id="inputPassword2"
          class="form-control"
          placeholder="Repita a Password"
          v-model="form.password2"
          required
        >
        
        <button class="btn btn-lg btn-block" id="btnSignup" @click="signup" type="submit">Sign up</button>
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

.form-signin input[type="firstName"] {
  margin-bottom: 5px;
}
.form-signin input[type="lastName"] {
  margin-bottom: 5px;
}
.form-signin input[type="email"] {
  margin-bottom: 5px;
}
.form-signin input[type="password"] {
  margin-bottom: 5px;
}
.form-signin input[type="password2"] {
  margin-bottom: 10px;
}

#btnSignup {
  background-color: #bf6e26;
  color: white;
}

#btnSignup:hover {
  opacity: 0.9;
}
</style>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "signup",
  components: {
    Header
  },
  data: function() {
    return {
      form: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        password2: ""
      }
    };
  },
  methods: {
    signup() {
      let user = {
        userId: this.$store.getters.getLastId,
        firstName: this.form.firstName,
        lastName: this.form.lastName,
        email: this.form.email,
        password: this.form.password,
        password2: this.form.password2
      };

      let strError = this.$store.getters.Signup(user);

      if (strError == "") {
        this.$store.state.users.push(user)
        alert("Registo efetuado com sucesso")
      
      }

      else{
        alert(strError)
      }
    }
  }
};
</script>

