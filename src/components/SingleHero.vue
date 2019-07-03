<template>
  <div class="single_hero">
    <h3
      v-if="this.$route.params.id != 'new_hero'"
    >Edycja bohatera nr {{ $route.params.id }} {{ $store.state.heroes[$route.params.id].name }}</h3>

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
  props: {
    add_new: false
  },
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

      if (this.$route.params.id == 'new_hero') {
        this.$store.state.heroes.push({ name: this.nazwa, desc: this.opis });
        // eslint-disable-next-line
        console.log("Zapis nowego");
      } else {
        this.$store.state.heroes[this.$route.params.id].name = this.nazwa;
        this.$store.state.heroes[this.$route.params.id].desc = this.opis;
        // eslint-disable-next-line
        console.log("Zapis starego");
      }

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
