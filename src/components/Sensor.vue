<template>
    <div id="sensor" v-if="sensorData">
        <p>{{sensorData.id}}</p>
        <p>Pin List</p>
        <ul>
            <li v-for="(pin, index) in sensorData.pins" :key="index">{{pin}}</li>
        </ul>
        <button v-if="pinAssignment.length < 1" @click="(gpioAssign(sensorData.pins))">Assign Gpio</button>
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