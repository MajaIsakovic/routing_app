<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6-col-md-offset-3">
        <h2>Routing</h2>
        <hr><br>
        <appHeader></appHeader>
        <br><br>
        <!-- 4. registrujemo gde ce router da se loaduje -->
        <router-view></router-view>     
      </div>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue';

  export default {
    components:{
      appHeader: Header
    }
  }

</script>

<style>

</style>
