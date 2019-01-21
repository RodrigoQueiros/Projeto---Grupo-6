<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light" id="navbarNav">
      <router-link class="navbar-brand" to="/" style="color:white">
        OWL
      </router-link>
      <ul class="navbar-nav">
        <li class="nav-item" id="navLinks">
          <router-link class="nav-link" to="/users">Utilizadores</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/books">Livros</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/tags">Tags</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/suggestions">Sugestões</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/">Voltar</router-link>
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

</style>
