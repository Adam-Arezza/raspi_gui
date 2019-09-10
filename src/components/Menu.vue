<template>
<div id="menu">
    <button class="menuItem" v-for="(item, index) in menuItems" :key="index" @click="menuEvent(item)">{{item}}</button>
</div>
</template>

<script>
const remote = require('electron').remote

export default {
    data(){
        return {
            menuItems: ['File', 'Close']
        }
    },
    methods: {
        menuEvent(e){
            let frame = remote.getCurrentWindow()
            if (e === "Close"){
                frame.close()
            }
            if (e === "File"){
                console.log('clicked File')
            }
        }
    }
}
</script>

<style scoped>
#menu {
    background: black;
}
.menuItem {
    outline: none;
    border: none;
    font-size: 14px;
    background: black;
    color: white;
    padding: 8px;
}
.menuItem:hover {
    background: rgb(100, 100, 100);
    cursor: pointer;
}

</style>