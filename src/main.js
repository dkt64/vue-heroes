import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import RouteHeroes from './components/ListOfHeroes'
import RouteEditHero from './components/SingleHero'

Vue.config.productionTip = false

Vue.use(Router)

var heroes = [
  { id: 0, name: "Herakles", desc: "Znany był z wielkiej siły, waleczności, męstwa, zapaśnictwa i umiejętności wojennych, zwłaszcza celnego strzelania z łuku." },
  { id: 1, name: "Achilles", desc: "Bohater wojny trojańskiej. Iliada i Odyseja Homera oraz Cypria charakteryzują go jako największego wojownika." }
]

const routes = [
  { path: '/', name: "main", component: RouteHeroes },
  { path: '/heroes', name: "list_of_heroes", component: RouteHeroes },
  { path: '/hero/:id', name: "edit_hero", component: RouteEditHero },
]

const router = new Router ({mode: 'history', routes})

new Vue({
  render: h => h(App),
  router,
  heroes
}).$mount('#app')
