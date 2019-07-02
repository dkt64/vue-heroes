<template>
  <div class="list_of_heroes">
    <div class="container">
      <div class="row">
        <h3>Lista bohaterów</h3>
      </div>
      <div class="row">
        <ul class="list-group">
          <li class="list-group-item" v-for="hero in this.$heroes" v-bind:key="hero.id">
            <h2>{{ hero.name }} ID {{ hero.id }}</h2>
            {{hero.desc}}
            <router-link :to="{ name: 'edit_hero', params: { id: hero.id }}" class="nav-link">Edycja bohatera</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
