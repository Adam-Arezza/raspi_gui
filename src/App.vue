<template>
  <div id="app">
    <Menu v-on:addSensor="addSensor"></Menu>
    <MainContent :sensorList="sensorList"></MainContent>
    <DataStream></DataStream>
    <Board :sensors="sensorList" :startBoard="start"></Board>
    <button @click="startBoard">START</button>
    <button @click="boardDisconnect">DISCONNECT</button>
  </div>
</template>

<script>
import Menu from "./components/Menu";
import MainContent from './components/MainContent'
import detectPi from 'detect-rpi'
import Board from './components/Board'
import DataStream from './components/DataStream'

export default {
  name: "app",
  components: { Menu, MainContent, Board, DataStream},
  data() {
    return {
      runningOnPi: false,
      sensorList: [],
      start: false
    }
  },
  created() {
    if (detectPi()){
      console.log('running on a pi')
      this.runningOnPi = true
    }
    else {
      console.log('not a pi')
    }
  },
  methods: {
    addSensor(name) {
      console.log(name[0])
    },
    startBoard() {
      this.start = true
    },
    boardDisconnect() {
      this.start = false
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
  background: rgb(226, 226, 226);
}
</style>
