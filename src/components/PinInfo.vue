<template>
  <div class="pin-info">
    <div class="pin-data" v-if="pinData">
      <h2>Pin Info</h2>
      <p>Pin Number: {{pinData[0].pinNum}}</p>
      <p v-if="pinData[0].gpioPin" >GPIO Number: {{pinData[0].gpioPin}}</p>
      <p v-if="pinData[0].gpioPin">Assigned: {{pinData[0].assigned}}</p>
      <p v-if="!pinData[0].gpioPin">Assigned: true</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["pinData"]
};
</script>

<style scoped>
.pin-info {
    display: flex;
}
.pin-data {
  justify-self: flex-start;
  text-align: center;
  background: lightgray;
  height: 200px;
  width: 125px;
  border-radius: 10px;
  margin: 10px;
}
</style>