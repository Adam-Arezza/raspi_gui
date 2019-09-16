<template>
  <div id="main-content">
    <div id="main" v-if="activeSection == 'main'">
      <img @click="showGpio = !showGpio" class="piLogo" src="../assets/pi-logo.png" />
      <Gpio v-on:selectPin="pinSelect" :key="1"></Gpio>
      <DataStream></DataStream>
    </div>
    <div id="sensor-grid" v-if="selectedSensors && activeSection == 'main'">
        <Sensor
          v-for="(sensor, index) in selectedSensors"
          :key="sensor.name + index"
          :sensorData="sensor"
          v-on:gpioAssign="assignGpio"
        ></Sensor>
      </div>
    <div id="sensors" v-if="activeSection == 'sensors'">
      <Sensors v-on:sensorSelect="addSensor"></Sensors>
    </div>
    <div id="virtualComponent" v-if="activeSection == 'virtual Components'">
      <VirtualComponent></VirtualComponent>
    </div>
    <div id="assignGpio" v-if="gpioAssign">
      <h1>Assign gpio pop-up</h1>
      <button @click="closeAssign">Done</button>
    </div>
  </div>
</template>

<script>
import DataStream from "./DataStream";
import Gpio from "./Gpio";
import VirtualComponent from "./VirtualComponent";
import Sensors from "./Sensors";
import Sensor from "./Sensor";

export default {
  props: ["activeSection"],
  components: { DataStream, Gpio, VirtualComponent, Sensors, Sensor },
  data() {
    return {
      selectedPin: "",
      showGpio: false,
      selectedSensors: [],
      gpioAssign: false
    };
  },
  methods: {
    pinSelect(pin) {
      this.selectedPin = pin;
    },
    addSensor(sensor) {
      let numberOfSensors = this.selectedSensors.filter(s => s.name == sensor[0].name).length

      this.selectedSensors.push(sensor[0]);
    },
    assignGpio(pins) {
      this.gpioAssign = true;
      console.log(pins[0]);
    },
    closeAssign() {
      this.gpioAssign = false;
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
#sensor-grid {
  margin: 10px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: auto;
  max-height: 200px;
}
</style>