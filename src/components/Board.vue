<script>
import five from "johnny-five";

export default {
  props: ["sensors", "startBoard"],
  data() {
    return {
      board: undefined,
      checkReady: undefined
    };
  },
  render() {
    return null;
  },
  methods: {
      checkBoard() {
          console.log('Checking for board')
      },
      newBoard() {
          this.board = new five.Board()
      }
  },
  watch: {
      startBoard: function() {
          if(this.startBoard == true) {
              window.clearInterval(this.checkReady)
              this.newBoard()
              console.log(this.board)
          }
          else {
              this.board = undefined
          }
      },
      board: function() {
          if(this.board) {
              this.board.on('ready', function() {
                  console.log('Board is ready to go!')
              })
              this.board.on('fail', function(event) {
                  console.log(event)
              })
          }
      }
  },
  created() {
    console.log("Board component initialized");
    this.checkReady = window.setInterval(this.checkBoard, 1000)
  }
};
</script>