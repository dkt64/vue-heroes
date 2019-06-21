<template>
  <div id="app">
    <h1>Heroes app</h1>
    <img alt="Vue logo" src="./assets/logo.png">

     <ul>

      <li>
        <a> 
          <router-link to="/heroes">Lista bohaterów</router-link> 
        </a>
      </li>
      <li>
        <a> 
          <router-link to="/hero/1">Edycja bohatera nr 1</router-link>
        </a>
      </li>
      <li style="float:right">
        <a> 
          <router-link to="/help">Help</router-link>
        </a>
      </li>

    </ul> 

    <router-view></router-view>

  </div>
</template>

<script>
export default{

}
</script>

<style scoped>

* {
  text-align: center;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #42b983;
}

li {
  float:left;
  border-right: 2px solid white;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 8px 24px;
  text-decoration: none;
}

li:last-child {
  border-right: none;
  border-left: 2px solid white;
  background-color: rgb(131, 136, 131);
}

li a:hover {
  background-color:  #008549;
}

</style>
