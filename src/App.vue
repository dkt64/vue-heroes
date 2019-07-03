<template>
  <div id="app" class="container">
    <div class="row">
      <h1>Heroes app</h1>
    </div>
    <div class="row">
      <img alt="Vue logo" src="./assets/logo.png" />
    </div>

    <div>
      <ul class="nav">
        <li class="nav-item">
          <router-link to="/heroes" class="nav-link">Lista bohaterów</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/hero/new_hero" class="nav-link">Dodaj bohatera</router-link>
        </li>
      </ul>
    </div>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
