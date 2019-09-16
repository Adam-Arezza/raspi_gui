<template>
  <div id="sensors">
    <h2>Sensors Available</h2>
    <div id="sensor-grid">
      <div class="sensor" v-for="(sensor, index) in sensorList" :key="index">
        <p>{{sensor.name}}</p>
        <p>{{sensor.type}}</p>
        <p>{{sensor.numberOfPins}}</p>
        <button class="addSensor" @click="addToSelected(sensor)">Add to gpio</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        IDs: 1,
      sensorList: [
        {
          name: "HC_SR04",
          type: "ultrasonic-distance",
          numberOfPins: 4,
          voltage: "5V",
          pins: ['VCC', 'ground', 'trigger', 'echo']
        },
        {
          name: "PIR",
          type: "infrared-motion",
          numberOfPins: 3,
          voltage: "3V",
          pins: ['VCC', 'ground', 'signal']
        }
      ]
    };
  },
  methods: {
    addToSelected(sensor) {
        let selected = this.sensorList.find(s => s.name == sensor.name)
        this.$emit('sensorSelect', [selected])
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
  background: rgb(10, 50, 90);
  font-size: 1.2em;
  margin: 4px;
  cursor: pointer;
  border-radius: 5px;
  color: white;
}
</style>