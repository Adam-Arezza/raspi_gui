<template>
  <div id="Navigation">
    <div
      class="view-selector"
      v-for="(section, index) in sections"
      :key="index"
      @click="goToSection(section)"
      v-bind:class="{activeSection: active == section}"
    >{{section.toUpperCase()}}</div>
  </div>
</template>

<script>
export default {
    props: {
        active: ""
    },
  data() {
    return {
      sections: ["main", "sensors", "virtual Components"]
    };
  },
  methods: {
    goToSection(s) {
      this.$emit("switchView", [s]);
    }
  }
};
</script>

<style scoped>
#Navigation {
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 2px gray solid;
  width: 100%;
}
.view-selector {
  padding: 10px;
  font-size: 1.2em;
  background: lightgray;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  margin: 5px;
}

.view-selector:hover {
  cursor: pointer;
}
.activeSection {
    background: green;
}
</style>