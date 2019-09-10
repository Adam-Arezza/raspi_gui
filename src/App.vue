<template>
  <div id="app">
    <Menu></Menu>
    <Navigation></Navigation>
    <div id="main">
    <Gpio></Gpio>
    <DataStream></DataStream>
    </div>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
import Menu from './components/Menu'
import Gpio from './components/Gpio'
import DataStream from './components/DataStream'

export default {
  name: 'app',
  components: {Navigation, Menu, Gpio, DataStream}
}
</script>

<style>
body {
  margin: 0px;
}
#app {
  margin-top: 0px;
  min-height: 100vh;
}
#main {
  display: flex;
  justify-content: space-around;
}
</style>
