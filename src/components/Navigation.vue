<template>
<div id="Navigation">
    <Sensors></Sensors>
    <VirtualComponent></VirtualComponent>
    <Robot></Robot>
</div>
    
</template>

<script>
import Sensors from './Sensors'
import Robot from './Robot'
import VirtualComponent from './VirtualComponent'
export default {
    name: 'Navigation',
    components: {Sensors, Robot, VirtualComponent}
}
</script>

<style scoped>
#Navigation {
    display: flex;
    flex-direction: row;
    justify-content: center;
    border-bottom: 2px gray solid;
}
</style>