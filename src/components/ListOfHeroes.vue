<template>
  <div class="list_of_heroes">
    <div class="container">
      <div class="row">
        <h3>Lista bohaterów</h3>
      </div>
      <div class="row">
        <ul class="list-group">
          <li
            class="list-group-item"
            v-for="(hero, id) in $store.state.heroes"
            v-bind:key="hero.id"
          >
            <h2>{{ hero.name }}</h2>
            {{hero.desc}}
            <router-link :to="{ name: 'edit_hero', params: { id }, props: { add_new: false} }" class="nav-link">Edycja bohatera</router-link>
            <button type="button" class="btn btn-outline-danger btn-sm" v-on:click="Usun(id)">Usuń</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    Usun: function(numer) {
      // eslint-disable-next-line
      console.log("Usunięto " + numer);

      this.$store.state.heroes.splice(numer, 1);
    }
  }
};
</script>

<style>
</style>
