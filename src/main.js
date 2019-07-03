import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Vuex from 'vuex'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import HeroesList from './components/ListOfHeroes'
import EditHero from './components/SingleHero'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(Vuex)

var heroes = [
  { name: "Syzyf", desc: "Król Koryntu. Bogowie bardzo go lubili, lecz on ich wykorzystywał. Gdy miarka się przebrała Dzeus ukarał go śmiercią. Syzyf jednak sprytnie wydostał się z podziemi. Żył na ziemi długi czas, lecz gdy bogowie przypomnieli sobie o nim, dostał w Hadesie najcięższą pracę: musiał wtaczać na szczyt góry wielki głaz. Lecz gdy był już blisko celu, kamień spadał na sam dół." },
  { name: "Herakles", desc: "Znany był z wielkiej siły, waleczności, męstwa, zapaśnictwa i umiejętności wojennych, zwłaszcza celnego strzelania z łuku." },
  { name: "Achilles", desc: "Bohater wojny trojańskiej. Iliada i Odyseja Homera oraz Cypria charakteryzują go jako największego wojownika." },
  { name: "Tezeusz", desc: "Był synem Ajgiasza i Ajtry. Miał zabić Minotaura. Zakochana w nim Ariadna dała mu nić, dzięki której wyszedł z labiryntu." }
]

const routes = [
  { path: '/', name: "main", component: HeroesList },
  { path: '/heroes', name: "list_of_heroes", component: HeroesList },
  { path: '/new_hero', name: "edit_hero", component: EditHero, props: { add_new: true } },
  { path: '/hero/:id', name: "edit_hero", component: EditHero, props: { add_new: false } },
]

const router = new Router({ mode: 'history', routes })

const store = new Vuex.Store({
  state: {
    heroes
  }
})

// eslint-disable-next-line
console.log("App restart...");

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
