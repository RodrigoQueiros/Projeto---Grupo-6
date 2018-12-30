<template>
  <div class="login">
    <Header/>
    <div class="form-wrapper text-center">
      <form class="form-signin">
        <img class="mb-4" src="white.png" alt width="100" height="100">
        <h1 class="h3 mb-3 font-weight-normal">Sign up</h1>
        <label for="inputNome" class="sr-only">Nome</label>
        <input
          type="nome"
          id="inputPassword"
          class="form-control"
          placeholder="Nome"
          required
        >
        <label for="inputEmail" class="sr-only">Email address</label>
        <input
          type="email"
          id="inputEmail"
          class="form-control"
          placeholder="Email address"
          required
          autofocus
        >
        <label for="inputPassword" class="sr-only">Password</label>
        <input
          type="password"
          id="inputPassword"
          class="form-control"
          placeholder="Password"
          required
        >
        <label for="inputPassword2" class="sr-only">Repita a Password</label>
        <input
          type="password2"
          id="inputPassword2"
          class="form-control"
          placeholder="Repita a Password"
          required
        >
        
        <button class="btn btn-lg btn-block" id="btnSignup" type="submit">Sign up</button>
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

.form-signin input[type="nome"] {
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
  components: {
    Header
  }
};
</script>

