<template>
  <div id="data-stream">
    <div class="data-btns">
      <button @click="showData = !showData">Toggle Data Window</button>
      <button @click="testing = []">Clear data Window</button>
    </div>
    <div v-if="showData" class="data-window">
      <p v-for="(data, index) in testing" :key="index">{{data}}</p>
    </div>
  </div>
</template>

<script>
import { clearInterval } from "timers";
export default {
  data() {
    return {
      //testing the data window
      testing: [],
      showData: false,
      myInterval: undefined
      //testing the data window
    };
  },
  methods: {
    //testing the data window
    testData() {
      this.testing.push("new data");
    }
  },
  //testing the data window
  created() {
    this.myInterval = window.setInterval(this.testData, 1000);
  },
  //testing the data window
  watch: {
    testing: function() {
      if (this.testing.length > 5) {
        window.clearInterval(this.myInterval);
      }
    }
  }
};
</script>

<style scoped>
#data-stream {
    max-width: 600px;
}
.data-btns {
    text-align: center;
}
.data-window {
  background: black;
  min-width: 250px;
  min-height: 250px;
  /* padding: 15px;
  margin: 10px; */
  color: white;
  overflow: scroll;
  resize: both;
  max-width: 500px;
}
</style>