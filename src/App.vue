<template>
  <h1>Flight Plan
  </h1>
  <i class="bi bi-ui-checks"></i>
  <div class="container">
    <FlightDashboard />
  </div>
  <!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import FlightDashboard from "@/components/FlightDashboard";

export default {
  name: 'App',
  components: {
    FlightDashboard
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
