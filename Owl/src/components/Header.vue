<template>
  <!-- Renders the navbar with the respective router-links -->  
  <nav class="navbar navbar-expand-sm navbar-dark fixed-top navbarOwl">
    <a class="navbar-brand" href="/">Owl</a>
    <ul class="navbar-nav">
      <li class="nav-item">
      <router-link to="/">Home</router-link> |
      </li>
      <li class="nav-item">
          <router-link to="/catalog">Catalogo</router-link> |
      </li>
      <li class="nav-item">
          <router-link to="/rankings">Rankings</router-link> |
      </li>
      <li class="nav-item">
          <router-link to="/suggest">Sugerir livro</router-link> |
      </li>
    </ul>
  </nav>
</template>