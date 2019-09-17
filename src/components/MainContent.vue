<template>
  <div id="main-content">
    <div id="main" v-if="activeSection == 'main'">
      <img @click="showGpio = !showGpio" class="piLogo" src="../assets/pi-logo.png" />
      <Gpio v-on:selectPin="pinSelect" :key="1" :gpioAssigned="gpioAssigned"></Gpio>
      <DataStream></DataStream>
    </div>
    <div id="sensor-grid" v-if="sensorList && activeSection == 'main'">
        <Sensor
          v-for="(sensor, index) in sensorList"
          :key="sensor.name + index"
          :sensorData="sensor"
          v-on:gpioAssign="assignGpio"
        ></Sensor>
      </div>
    <div id="sensors-section" v-if="activeSection == 'sensors'">
      <Sensors v-on:addSensor="addSensor"></Sensors>
    </div>
    <div id="virtualComponent" v-if="activeSection == 'virtual Components'">
      <VirtualComponent></VirtualComponent>
    </div>
    <div id="assignGpio" v-if="gpioAssign">
      <h1>Assign gpio pop-up</h1>
      <div v-for="(pin, index) in sensorSelect" :key="index">
      </div>
      <span v-if="!selectedPin">Select the gpio pin you would like to assign to</span>
      <div v-if="selectedPin">
        <p>Assign to GPIO pin {{selectedPin.gpioPin}}?</p>
        <button @click="assign">Yes</button>
        <button @click="cancelAssign">Cancel</button>
      </div>
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
  components: { DataStream, Gpio, VirtualComponent, Sensors, Sensor},
  data() {
    return {
      selectedPin: "",
      sensorList: [],
      gpioAssign: false,
      gpioAssigned: undefined,
      sensorSelect: undefined
    };
  },
  methods: {
    pinSelect(pin) {
      this.selectedPin = pin[0];
    },
    addSensor(sensor) {
      console.log(sensor)
      this.sensorList.push(sensor[0]);
    },
    assignGpio(pins) {
      this.gpioAssign = true;
      this.sensorSelect = pins[0]
      console.log(pins[0]);
    },
    closeAssign() {
      this.gpioAssign = false;
    },
    assign() {
      console.log('Assigning to: ')
      console.log(this.selectedPin)
      let sensor = this.sensorSelect
      let pin = this.selectedPin
      this.gpioAssigned = {
        gpio: sensor.pins
      }
    },
    cancelAssign() {
      console.log('Cancelled pin assignment')
      this.selectedPin = undefined
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
#sensors-section {
  width: 100%;
}
</style>