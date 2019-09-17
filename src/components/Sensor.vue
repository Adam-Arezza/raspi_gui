<template>
    <div id="sensor" v-if="sensorData">
        <p>Name: {{sensorData.name}}</p>
        <p># of pins: {{sensorData.pins}}</p>
        <ul v-if="sensorData.pinAssignment">
            <li v-for="(pin, index) in sensorData.pinAssignment" :key="index">{{pin}}</li>
        </ul>
        <button v-if="pinAssignment.length < 1" @click="(gpioAssign(sensorData))">Assign Gpio</button>
    </div>
</template>

<script>
export default {
    props: ['sensorData'],
    data() {
        return {
            pinAssignment: [

            ]
        }
    },
    methods: {
        gpioAssign(pins) {
            // console.log(pins)
            this.$emit('gpioAssign', [pins])
        }
    }
}
</script>

<style scoped>
p {
    margin: 0px;
}
#sensor {
    margin: 10px;
    background: rgb(151, 236, 162);
    border: dashed 1px black;
    padding: 5px;
}
li {
    list-style: none;
}

</style>