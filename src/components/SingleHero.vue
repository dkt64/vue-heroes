<template>
  <div class="single_hero">
    <h1>Edycja bohatera nr {{ $route.params.id }}</h1>
    <h2> {{ $store.state.heroes[$route.params.id].name }} </h2>
    <input v-model="nazwa" v-on:keyup.enter="Zapis">
    <button v-on:click="Zapis">Zapis</button>
  </div>
</template>

<script>

export default {
  data() {
    return {
      nazwa : ''
    }
  },
  methods: {
    Zapis: function () {
      this.$store.state.heroes[this.$route.params.id].name = this.nazwa
    }
  }
}

</script>

<style>
  ul {
    text-align: left;
}
</style>
