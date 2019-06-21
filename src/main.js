import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import RouteHeroes from './components/ListOfHeroes'
import RouteEditHero from './components/SingleHero'
import RouteHelp from './components/Help'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)

var heroes = [
  { id: 1, name: "Herakles", desc: "Znany był z wielkiej siły, waleczności, męstwa, zapaśnictwa i umiejętności wojennych, zwłaszcza celnego strzelania z łuku." },
  { id: 2, name: "Achilles", desc: "Bohater wojny trojańskiej. Iliada i Odyseja Homera oraz Cypria charakteryzują go jako największego wojownika." }
]

const routes = [
  { path: '/', component: RouteHeroes },
  { path: '/heroes', component: RouteHeroes },
  { path: '/hero/:id', component: RouteEditHero },
  { path: '/help', component: RouteHelp }
]

const router = new Router ({mode: 'history', routes})

const store = new Vuex.Store({
  state: {
    heroes
  }
})

new Vue({
  render: h => h(App),
  router, 
  store
}).$mount('#app')
