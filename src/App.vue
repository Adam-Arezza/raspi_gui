<template>
  <div id="app">
    <Navigation v-on:switchView="switchView" :active="activeSection"></Navigation>
    <MainContent :activeSection="activeSection"></MainContent>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import MainContent from './components/MainContent'

export default {
  name: "app",
  components: { Navigation, MainContent },
  data() {
    return {
      activeSection: "main"
    }
  },
  methods: {
    switchView(view) {
      this.activeSection = view
    }
  }
};
</script>

<style>
body {
  margin: 0px;
}
#app {
  margin-top: 0px;
  min-height: 100vh;
}
</style>
