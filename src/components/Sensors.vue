<template>
  <div id="sensors">
    <h2>Create Sensor</h2>
    <div id="create-sensor">
      <label for="sensor-name">Name of sensor</label>
      <input name="sensor-name" v-model="name" />
      <label for="pins">Number of pins (exclude Vcc and Gnd)</label>
      <select name="pins" v-model="selectedPins">
        <option v-for="(pins, index) in numberOfPins" :key="index">{{pins}}</option>
      </select>
      <label for="voltage">Voltage required</label>
      <select name="voltage" v-model="selectedVolts">
        <option v-for="(v, index) in voltageReq" :key="index">{{v}} volts</option>
      </select>
      <label for="sense-type">Type of sensor</label>
      <select name="sense-type" v-model="selectedType">
        <option v-for="(type, index) in types" :key="index">{{type}}</option>
      </select>
      <button v-bind:class="{disabled: !allFieldsFull}" class="addSensor" @click="addToSelected()">Add to gpio</button>
    </div>
    <!-- <h2>Sensors Available</h2>
    <div id="sensor-grid">
      <div class="sensor" v-for="(sensor, index) in sensorList" :key="index">
        <p>{{sensor.name}}</p>
        <p>{{sensor.type}}</p>
        <p>{{sensor.numberOfPins}}</p>
        <button class="addSensor" @click="addToSelected(sensor)">Add to gpio</button>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      types: [
        "Temperature",
        "Pressure",
        "Motion",
        "Proximity",
        "Sound",
        "Vibration",
        "Humidity",
        "Colour/Light",
        "Infrared",
        "Acceleration/Gyro"
      ],
      numberOfPins: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      voltageReq: [1, 3.3, 5],
      // sensorList: [
      //   {
      //     name: "HC_SR04",
      //     type: "ultrasonic-distance",
      //     numberOfPins: 4,
      //     voltage: "5V",
      //     pins: ["VCC", "ground", "trigger", "echo"]
      //   },
      //   {
      //     name: "PIR",
      //     type: "infrared-motion",
      //     numberOfPins: 3,
      //     voltage: "3V",
      //     pins: ["VCC", "ground", "signal"]
      //   }
      // ]
      selectedType: undefined,
      selectedVolts: undefined,
      selectedPins: undefined
    };
  },
  methods: {
    addToSelected() {
      let sensor = {
        name: this.name,
        type: this.selectedType,
        voltage: this.selectedVolts,
        pins: this.selectedPins,
        pinAssignment: {}
      }
      this.$emit("addSensor", [sensor]);
      this.selectedType = undefined
      this.selectedVolts = undefined
      this.selectedPins = undefined
      this.name = ""
    }
  },
  computed: {
    allFieldsFull() {
      if(this.selectedType && this.selectedVolts && this.selectedPins && this.name) {
        console.log(this.selectedPins)
        console.log(this.selectedType)
        console.log(this.selectedVolts)
        console.log(this.name)
        return true
      }
      return false
    }
  }
};
</script>

<style scoped>
#sensor-grid {
  display: grid;
  grid-template-columns: repeat(6, 150px);
  grid-template-rows: auto;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
}
.sensor {
  background: lightblue;
  text-align: center;
  border: solid black 1px;
  min-height: 100px;
}
.addSensor {
  border: none;
  background: rgb(22, 103, 184);
  font-size: 1.2em;
  margin: 4px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
}
#create-sensor {
  display: flex;
  justify-content: space-around;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
  padding: 15px;
}
.disabled {
  cursor: not-allowed;
  pointer-events: none;
  background: grey;
}
</style>