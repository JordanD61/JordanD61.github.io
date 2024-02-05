/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "RIGHT": 39,
    "DOWN": 40,

  };
  // Game Item Objects
  var walker = {
   "positionX":  0, 
   "positionY":  0,
   "speedX":  0, 
   "speedY":  0,
  }
  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);   
  $(document).on('keyup', handleKeyUp);                    // change 'eventType' to the type of event you want to handle

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("LEFT PRESSED");
      walker.speedX = -5;
    }
    if (event.which === KEY.UP) {
      console.log("UP PRESSED");
      walker.speedY = -5;
    }
    if (event.which === KEY.RIGHT) {
      console.log("RIGHT PRESSED");
      walker.speedX = 5;
    }
    if (event.which === KEY.DOWN) {
      console.log("DOWN PRESSED");
      walker.speedY = 5;
    }
  }
  function handleKeyUp(){
    walker.speedX = 0;
    walker.speedY = 0;
  }


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
function repositionGameItem(){
  walker.positionX += walker.speedX;
  walker.positionY += walker.speedY;
}

function redrawGameItem(){
$("#walker").css("left", walker.positionX);
$("#walker").css("top", walker.positionY);
$("#walker").css("bottom", walker.positionY);
$("#walker").css("right", walker.positionX);
$("#walker2").css("left", walker2.positionX);
$("#walker2").css("bottom", walker2.positionY);
$("#walker2").css("right", walker2.positionY);
$("#walker2").css("top", walker2.positionX);
}


  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
