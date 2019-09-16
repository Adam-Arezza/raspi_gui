<template>
  <div class="pin-info">
    <div class="pin-data" v-if="pinData">
      <h2>Pin Info</h2>
      <p>Pin Number: {{pinData.pinNum}}</p>
      <p v-if="pinData.gpioPin" >GPIO Number: {{pinData.gpioPin}}</p>
      <p v-if="pinData.gpioPin">Assigned: {{pinData.assigned}}</p>
      <p v-if="!pinData.gpioPin">Assigned: true</p>
      <button class="close-btn" @click="closePinInfo">X</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pinData"],
  methods: {
    closePinInfo() {
      this.$emit('closePin')
    }
  }
};
</script>

<style scoped>
h2 {
  margin: 0px;
}
p {
  font-size: 1.25em;
}
.pin-data {
  display: flex;
  flex-direction: column;
  background: lightgray;
  text-align: center;
  width: 100%;
  border: 1px dashed black;
}
.close-btn {
  background: black;
  color: white;
  border: none;
  padding: 8px;
  font-size: 1.1em;
}
.close-btn:hover {
  cursor: pointer;
}
</style>