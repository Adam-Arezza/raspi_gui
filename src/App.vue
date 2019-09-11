<template>
  <div id="app">
    <Menu></Menu>
    <Navigation v-on:switchView="switchView" :active="activeSection"></Navigation>
    <div id="main-content">
      <div id="main" v-if="activeSection == 'main'">
        <img @click="showGpio = !showGpio" class="piLogo" src="./assets/pi-logo.png"/>
        <Gpio v-if="showGpio" v-on:selectPin="pinSelect"></Gpio>
        <PinInfo v-if="showGpio" :pinData="selectedPin"></PinInfo>
        <DataStream></DataStream>
      </div>
      <div id="sensors" v-if="activeSection == 'sensors'">
        <Sensors></Sensors>
      </div>
      <div id="virtualComponent" v-if="activeSection == 'virtualComponents'"> 
        <VirtualComponent></VirtualComponent>
      </div>
      <div id="robot" v-if="activeSection == 'robot'">
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "./components/Navigation";
import Menu from "./components/Menu";
import Gpio from "./components/Gpio";
import DataStream from "./components/DataStream";
import Sensors from "./components/Sensors"
import VirtualComponent from "./components/VirtualComponent"
import PinInfo from "./components/PinInfo"

export default {
  name: "app",
  components: { Navigation, Menu, Gpio, DataStream, Sensors, VirtualComponent, PinInfo },
  data() {
    return {
      activeSection: "main",
      selectedPin: "",
      showGpio: false
    }
  },
  methods: {
    switchView(view) {
      this.activeSection = view
    },
    pinSelect(pin) {
      this.selectedPin = pin
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
#main {
  display: flex;
  /* justify-content: space-around; */
}
#main-content {
  margin-top: 10px;
}
.piLogo {
  width: 40px;
  height: 40px;
}

</style>
