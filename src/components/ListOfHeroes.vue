<template>
  <div class="list_of_heroes">
    <div class="container">
      <h3>Lista bohaterów</h3>
      <br />
      <div class="row">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(hero, id) in $store.state.heroes"
            v-bind:key="hero.id"
          >
            <h2>{{ hero.Name }}</h2>
            {{hero.Desc}}
            <p />
            <p align="left">
              <router-link
                :to="{ name: 'edit_hero', params: { id }, props: { add_new: false} }"
                class="btn btn-primary"
              >Edycja bohatera</router-link>
            </p>
            <p align="right">
              <button
                type="button"
                style="width:100px"
                class="btn btn-outline-danger btn-sm"
                v-on:click="Usun(id)"
              >Usuń</button>
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created () {
    // eslint-disable-next-line
    console.log("Created!");
    axios.get('http://localhost:8090/api/v1/heroes')
      .then(response => (this.$store.state.heroes = response.data))
  },
  methods: {
    Usun: function(numer) {
      // eslint-disable-next-line
      console.log("Usunięto " + numer);

      axios.delete('http://localhost:8090/api/v1/heroes/' + numer)
      // this.$store.state.heroes.splice(numer, 1);
    }
  }
};
</script>

<style>
</style>
