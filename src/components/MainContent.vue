<template>
  <div id="main-content">
    <div id="main">
      <img class="piLogo" src="../assets/pi-logo.png" />
      <Gpio v-on:selectPin="pinSelect" :key="1" :gpioAssigned="gpioAssigned"></Gpio>
    </div>
    <ProtoArea :sensors="sensorList"></ProtoArea>
  </div>
</template>

<script>
import DataStream from "./DataStream";
import Gpio from "./Gpio";
import ProtoArea from './ProtoArea'

export default {
  components: { DataStream, Gpio, ProtoArea},
  props: ['sensorList'],
  data() {
    return {
      selectedPin: "",
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