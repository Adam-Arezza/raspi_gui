<template>
    <div id="proto">
        <div class="sensor" v-for="(sensor, index) in sensors" :key="index">

        </div>
    </div>
</template>

<script>
export default {
    props: ['sensors']
}
</script>

<style scoped>
#proto {
    background: white;
    max-width: 100%;
    height: 100%;
    margin: 5px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(4, 1fr);
}
</style>