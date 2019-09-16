<template>
  <div id="main-content">
    <div id="main" v-if="activeSection == 'main'">
      <img @click="showGpio = !showGpio" class="piLogo" src="../assets/pi-logo.png" />
      <Gpio v-on:selectPin="pinSelect" :key="1"></Gpio>
      <DataStream></DataStream>
    </div>
    <div id="sensors" v-if="activeSection == 'sensors'">
      <Sensors></Sensors>
    </div>
    <div id="virtualComponent" v-if="activeSection == 'virtual Components'">
      <VirtualComponent></VirtualComponent>
    </div>
    <div id="robot" v-if="activeSection == 'robot'"></div>
  </div>
</template>

<script>
import DataStream from "./DataStream";
import Gpio from "./Gpio";
import VirtualComponent from "./VirtualComponent";
import Sensors from "./Sensors";

export default {
  props: ["activeSection"],
  components: { DataStream, Gpio, VirtualComponent, Sensors },
  data() {
    return {
      selectedPin: "",
      showGpio: false
    };
  },
  methods: {
    pinSelect(pin) {
      this.selectedPin = pin;
    }
  }
};
</script>

<style scoped>
#main-content {
  margin-top: 10px;
  display: flex;
}
#main {
  display: flex;
}
.piLogo {
  width: 40px;
  height: 40px;
}
</style>