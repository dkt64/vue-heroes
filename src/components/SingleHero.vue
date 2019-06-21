<template>
  <div class="single_hero">
    <h1>Edycja bohatera nr {{ $route.params.id }}</h1>
    <h2> {{ $store.state.heroes[$route.params.id].name }} </h2>
    <input v-model="nazwa">
    <button v-on:click="Zapis">Zapis</button>
  </div>
</template>

<script>

var nazwa = 'blabla'

export default {
  data: nazwa,
  methods: {
    Zapis: function () {
      
    }
  }
}

</script>

<style>
ul {
  text-align: left;
}
</style>

