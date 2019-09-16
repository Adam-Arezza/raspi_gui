<template>
  <div id="app">
    <Navigation v-on:switchView="switchView" :active="activeSection"></Navigation>
    <MainContent :activeSection="activeSection"></MainContent>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import MainContent from './components/MainContent'
import detectPi from 'detect-rpi'
import onOff from 'onoff'

export default {
  name: "app",
  components: { Navigation, MainContent },
  data() {
    return {
      activeSection: "main",
      runningOnPi: false
    }
  },
  methods: {
    switchView(view) {
      this.activeSection = view
    }
  },
  created() {
    if (detectPi()){
      console.log('running on a pi')
      this.runningOnPi = true
    }
    else {
      console.log('not a pi')
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
