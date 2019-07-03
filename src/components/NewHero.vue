<template>
  <div class="single_hero">
    <h3>Dodanie nowego bohatera</h3>

    <div class="form-group">
      <label>Nazwa bohatera</label>
      <input class="form-control" v-model="nazwa" v-on:keyup.enter="Zapis" size="50" />
    </div>

    <div class="form-group">
      <label>Opis bohatera</label>
      <input class="form-control" v-model="opis" v-on:keyup.enter="Zapis" size="50" />
    </div>

    <button v-on:click="Anuluj">Anuluj</button>
    <button v-on:click="Zapis">Zapis</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nazwa: "",
      opis: ""
    };
  },
  methods: {
    Anuluj: function() {
      history.back();
    },
    Zapis: function() {
      this.$store.state.heroes.push({ name: this.nazwa, desc: this.opis });
      // eslint-disable-next-line
      console.log("Zapis");

      history.back();
    },
    created: function() {
      // eslint-disable-next-line
      console.log("created");
    }
  }
};
</script>

<style>
</style>
