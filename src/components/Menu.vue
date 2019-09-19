<template>
  <div id="menu">
    <div id="menu-grid">
      <div class="items" v-for="(item, index) in sensors" :key="index" @click="addSensor(item.name)" >
        <img class="item-icon" :src="item.img" @mouseenter="tooltip(item.name)"/>
        <div class="tooltip" v-bind:class="{showtip: item.showtip}">
          <p>{{item.name}}</p>
        </div>
        {{item.name}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sensors: [
        { name: "Accelerometer", img: require("../assets/accel.png"), showtip: false },
        {name: "Altimeter"},
        {name: "Animation"},
        {name: "Barometer"},
        {name: "Button"},
        {name: "GPS"},
        {name: "Gyro"},
        {name: "IMU"},
        {name: "Joystick"},
        {name: "Keypad"},
        {name: "LCD"},
        {name: "LED"},
        {name: "LEDs"},
        {name: "Light"},
        {name: "Motion"},
        {name: "Motor"},
        {name: "Motors"},
        {name: "Piezo"},
        {name: "Pin"},
        {name: "Proximity"},
        {name: "Relay"},
        {name: "Relays"},
        {name: "Servo"},
        {name: "Servos"},
        {name: "Stepper"},
        {name: "Switch"},
        {name: "Thermometer"}
      ]
    };
  },
  methods: {
    tooltip(name) {
      let icon = this.sensors.find(item => item.name == name)
      icon.showtip = !icon.showtip
      // console.log('tooltip popup')
    },
    addSensor(name) {
      this.$emit('addSensor', [name])
    }
  }
};
</script>

<style scoped>
#menu {
  display: flex;
  max-width: 100%;
  flex-direction: column;
}

#menu-grid {
  display: grid;
  grid-template-columns: repeat(15, auto);
  grid-template-rows: repeat(2, auto);
  background: rgb(89, 147, 206);
}

.items {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 0.8em;
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
  align-self: center;
  background: rgba(150, 150, 150, 50);
  color: white;
  padding: 2px;
  margin: 1px;
}

.items:hover {
  cursor: pointer;
  background: rgba(100, 100, 100, 50);
}
.item-icon {
  height: 25px;
  width: 25px;
}
.tooltip {
  display: none;
  position: relative;
  height: 15px;
  width: 30px;
  background: white;
  color: black;
  z-index: 1;
}
</style>