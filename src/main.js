import Vue from 'vue'
import App from './App.vue'
//importujemo Vue router
import VueRouter from 'vue-router';
//1. ako imenujemo konstantu koristimo sintaks u viticastim zagradama
import { routes } from './routes';

Vue.config.productionTip = false;

Vue.use(VueRouter);

//2.
const router = new VueRouter({
  //automatski je obaviti mapiranje imace key: routes i value: routes
  //moze i samo routes da stavimo (ako su isti key i name)
    routes,
    //Hash Vs. History
    //da bi smo rekli da zelimo da koristimo rute bez #:
    mode: 'history'
});

new Vue({
  render: h => h(App),
  //3. registujemo router glavnoj Vue instanci
  //note: vue router default mode je sa #
  //# sprecava da se svaki request ka odredjenoj ruti salje na server (to je generalno defaultno ponasanje u spa)ali vue ima nacin da to zaobidjemo
  //treba namestiti na serveru da uvek vraca index.html file
  router,
}).$mount('#app')
