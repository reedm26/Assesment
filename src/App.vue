<template>
  <div class="background">
    <div class="titleContainer">
      <h1>Flight Plan</h1>
      <i class="bi bi-ui-checks" style="font-size: 2rem; margin: 1rem"></i>
    </div>
    <div class="container-fluid">
      <FlightDashboard />
    </div>
  </div>
</template>

<script>
import FlightDashboard from "@/views/FlightDashboard";

export default {
  name: "App",
  components: {
    FlightDashboard,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.titleContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.background {
  padding-top: 3rem;
  background-color: #c1ddfa;
  min-height: 100vh;
}
</style>
