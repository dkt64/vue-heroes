<template>
  <div class="list_of_heroes">
    <h1>List of Heroes</h1>
    <ul>
      <li v-for="hero in $store.state.heroes" v-bind:key="hero.id">
        <h3> {{ hero.name }} </h3> {{hero.desc}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    
}
</script>

<style>
ul {
  text-align: left;
}
</style>
