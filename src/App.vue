<template>
  <div class="titleContainer">
    <h1>Flight Plan
    </h1>
    <i class="bi bi-ui-checks" style="font-size: 2rem; margin: 1rem;"></i>
  </div>
  <div class="container">
    <FlightDashboard />
  </div>
</template>

<script>
import FlightDashboard from "@/views/FlightDashboard";

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

.titleContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
