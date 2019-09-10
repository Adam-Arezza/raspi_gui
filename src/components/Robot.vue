<template>
    <div id="robot">
        <h1 @click="openRobotMenu">Robot</h1>
    </div>
</template>

<script>
export default {
    methods: {
        openRobotMenu(){
            console.log('Robot menu')
        }
    }
}
</script>

<style scoped>
#robot{
    background: rgb(150, 150, 150);
    margin: 5px;
    padding: 5px;
}

#robot:hover {
    cursor: pointer;
}

</style>