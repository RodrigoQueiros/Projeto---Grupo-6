<template>
  <div>
    <backOfficeNav/>
    <div class="margin5 mt-4">
      <div class="row">
        <div class="col-12 col-md-12 boxTitle">
          <h3>Utilizadores</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-12 boxContent">
          <table class="table mt-4">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Nome Próprio</th>
                <th scope="col">Último Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.userId">
                <td> {{user.userId}} </td>
                <td> {{user.firstName}} </td>
                <td> {{user.lastName}} </td>
                <td> {{user.email}} </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
</style>

<script>
import backOfficeNav from "@/components/backOfficeNav.vue";

export default {
  components: {
    backOfficeNav
  },
  data: function() {
    return {
      users: this.$store.state.users,
    };
  },
  
  created() {
      
  }
};
</script>

