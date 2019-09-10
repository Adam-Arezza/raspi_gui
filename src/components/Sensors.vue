<template>
    <div id="sensors">
        <h1 @click="sensorMenu">Sensors</h1>
    </div>
</template>

<script>
export default {
    methods: {
        sensorMenu(){
            console.log('Sensor menu')
        }
    }
}
</script>

<style scoped>
#sensors {
    background: rgb(150, 150, 150);
    margin: 5px;
    padding: 5px
}
#sensors:hover {
    cursor: pointer;
}
</style>