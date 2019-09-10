<template>
  <div id="gpio">
    <button
      v-for="(pin) in gpioPins"
      :key="pin.pinNum"
      @click="pinInfo(pin.gpioPin)"
      v-bind:class="{'gpio-pin': pin.gpio, 'no-gpio': !pin.gpio}"
    >{{pin.label}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gpioPins: [
        {
          pinNum: 1,
          gpio: false,
          gpioPin: undefined,
          label: "3V3",
          assigned: false
        },
        {
          pinNum: 2,
          gpio: false,
          gpioPin: undefined,
          label: "5V",
          assigned: false
        },
        {
          pinNum: 3,
          gpio: true,
          gpioPin: 2,
          label: "SDA1 I2C",
          assigned: false
        },
        {
          pinNum: 4,
          gpio: false,
          gpioPin: undefined,
          label: "5V",
          assigned: false
        },
        {
          pinNum: 5,
          gpio: true,
          gpioPin: 3,
          label: "SCL1 I2C",
          assigned: false
        },
        {
          pinNum: 6,
          gpio: false,
          gpioPin: undefined,
          label: "Ground",
          assigned: false
        },

        {
          pinNum: 7,
          gpio: true,
          gpioPin: 4,
          label: "GPIO4",
          assigned: false
        },
        {
          pinNum: 8,
          gpio: true,
          gpioPin: 14,
          label: "UART0_TXD",
          assigned: false
        },
        {
          pinNum: 9,
          gpio: false,
          gpioPin: undefined,
          label: "Ground",
          assigned: false
        },
        {
          pinNum: 10,
          gpio: true,
          gpioPin: 15,
          label: "UART0_RXD",
          assigned: false
        },
        {
          pinNum: 11,
          gpio: true,
          gpioPin: 17,
          label: "GPIO17",
          assigned: false
        },
        {
          pinNum: 12,
          gpio: true,
          gpioPin: 18,
          label: "GPIO18",
          assigned: false
        },
        {
          pinNum: 13,
          gpio: true,
          gpioPin: 27,
          label: "GPIO27",
          assigned: false
        },
        {
          pinNum: 14,
          gpio: false,
          gpioPin: undefined,
          label: "Ground",
          assigned: false
        },
        {
          pinNum: 15,
          gpio: true,
          gpioPin: 22,
          label: "GPIO22",
          assigned: false
        },
        {
          pinNum: 16,
          gpio: true,
          gpioPin: 23,
          label: "GPIO23",
          assigned: false
        },
        {
          pinNum: 17,
          gpio: false,
          gpioPin: undefined,
          label: "3V3",
          assigned: false
        },
        {
          pinNum: 18,
          gpio: true,
          gpioPin: 24,
          label: "GPIO24",
          assigned: false
        },
        {
          pinNum: 19,
          gpio: true,
          gpioPin: 10,
          label: "SPI0_MOSI",
          assigned: false
        },
        {
          pinNum: 20,
          gpio: false,
          gpioPin: undefined,
          label: "Ground",
          assigned: false
        },
        {
          pinNum: 21,
          gpio: true,
          gpioPin: 9,
          label: "SPI0_MISO",
          assigned: false
        },
        {
          pinNum: 22,
          gpio: true,
          gpioPin: 25,
          label: "GPIO25",
          assigned: false
        },
        {
          pinNum: 23,
          gpio: true,
          gpioPin: 11,
          label: "SPI0_SCLK",
          assigned: false
        },
        {
          pinNum: 24,
          gpio: true,
          gpioPin: 8,
          label: "SPI0_CE0_N",
          assigned: false
        },
        {
          pinNum: 25,
          gpio: false,
          gpioPin: undefined,
          label: "Ground",
          assigned: false
        },
        {
          pinNum: 26,
          gpio: true,
          gpioPin: 7,
          label: "SPI0_CE1_N",
          assigned: false
        },
        {
          pinNum: 27,
          gpio: false,
          gpioPin: undefined,
          label: "ID_SD",
          assigned: false
        },
        {
          pinNum: 28,
          gpio: false,
          gpioPin: undefined,
          label: "ID_SC",
          assigned: false
        },
        {
          pinNum: 29,
          gpio: true,
          gpioPin: 5,
          label: "GPIO5",
          assigned: false
        },
        {
          pinNum: 30,
          gpio: false,
          gpioPin: undefined,
          label: "Ground",
          assigned: false
        },
        {
          pinNum: 31,
          gpio: true,
          gpioPin: 6,
          label: "GPIO6",
          assigned: false
        },
        {
          pinNum: 32,
          gpio: true,
          gpioPin: 12,
          label: "GPIO12",
          assigned: false
        },
        {
          pinNum: 33,
          gpio: true,
          gpioPin: 13,
          label: "GPIO13",
          assigned: false
        },
        {
          pinNum: 34,
          gpio: false,
          gpioPin: undefined,
          label: "Ground",
          assigned: false
        },
        {
          pinNum: 35,
          gpio: true,
          gpioPin: 19,
          label: "GPIO19",
          assigned: false
        },
        {
          pinNum: 36,
          gpio: true,
          gpioPin: 16,
          label: "GPIO16",
          assigned: false
        },
        {
          pinNum: 37,
          gpio: true,
          gpioPin: 26,
          label: "GPIO26",
          assigned: false
        },
        {
          pinNum: 38,
          gpio: true,
          gpioPin: 20,
          label: "GPIO20",
          assigned: false
        },
        {
          pinNum: 39,
          gpio: false,
          gpioPin: undefined,
          label: "Ground",
          assigned: false
        },
        {
          pinNum: 40,
          gpio: true,
          gpioPin: 21,
          label: "GPIO21",
          assigned: false
        }
      ]
    };
  },
  methods: {
    pinInfo(pin) {
      let selectedPin = this.gpioPins.find(p => p.gpioPin == pin);
      console.log(selectedPin);
    }
  }
};
</script>

<style scoped>
#gpio {
  display: grid;
  background: green;
  max-width: 250px;
  grid-template-columns: 100px 100px;
  justify-content: center;
  padding: 5px;
  margin: 0px;
}
.gpio-pin {
  background: lightblue;
}
.gpio-pin:hover {
    cursor: pointer;
}
.no-gpio {
    background: lightsalmon;
}
.no-gpio {
    cursor: pointer;
}
</style>