function initCanvas() { // anything i need to do on canvas goes in here
  const ctx = document.getElementById('grid').getContext('2d'); /*756x480*/ // compresses the two variables context and canvas into one var.. will have to experiment to see how effective this works at my level
  const cW = ctx.canvas.width, cH = ctx.canvas.height; // easy access
  // initial positioning
  let y = 50, x = 50;
  // let curDir = x++; // initial trajectory of poorman's hacky lightCycle


  // variables to turn on event
  let lastKey = null;
  let turnUp; //W triggers and binds var to lastKey //y--;
  let turnLeft; //A triggers and binds var to lastKey //x--;
  let turnDown; //S triggers and binds var to lastKey //y++;
  let turnRight; //D triggers and binds var to lastKey //x++;
  $(document).keydown(function(e) {
    if (e.which == 87){
      console.log('pressed up')
      lastKey = turnUp;
    } else if (e.which == 65){
      console.log('pressed left')
      lastKey = turnLeft;
    } else if (e.which == 83){
      console.log('pressed down')
      lastKey = turnDown;
    } else if (e.which == 68){
      console.log('pressed right')
      lastKey = turnRight;
    }
  });

/*
if W is pressed, lastKey = turnUp
if A is pressed, lastKey = turnLeft
if S is pressed, lastKey = turnDown
if D is pressed, lastKey = turnRight
up: [38, 87], // up-arrow, W
left: [37, 65], // left-arrow, A
down: [40, 83], // down-arrow, S
right: [39, 68], // right-arrow, D
start_game: [13, 32] // enter, spacebar
*/



  function animate(){ // firing rapidly, keep code slim
    ctx.save(); //saves changes before refiring animate
    /*ctx.clearRect(0, 0, cW, cH); //commenting this out, I want my tron to 'draw' where it drives*/
    // draw below
    ctx.fillStyle = '#0079D3';
    let start = ctx.fillRect(x, y, 5, 4); //start @ xpixel/ypixel, draw 5pxwide/4pxhigh
    /*draw above*/
    if (lastKey === null){
      x++;
    } else if (lastKey === turnUp){
      y--;
    } else if (lastKey === turnLeft){
      x--;
    } else if (lastKey === turnDown){
      y++;
    } else if (lastKey === turnRight){
      x++;
    }
    // if (x == 50){ // when game starts,
    //   let moveX = 0; // set initial trajectory
    // }




    /*logic above*/
    ctx.restore; // may not need, returns last saved board state before clear
  }
  const animateInterval = setInterval(animate, 30); //this is what is making the animate function fire so frequently (for smoother animation)
}

window.addEventListener('load', function(event) {
  initCanvas();
})


/*

if (y == 50){ // change to if (keyevent) gonna be ignored cause not 50
      shiftY = 0;
      x++
    } else if (x == 0) {let shiftY = y++;} hi

// outside animate
let x = 50, y = 50; //this will be starting position, outside of animate
let curDir = x++; // initial trajectory of poorman's hacky lightCycle

//inside animate
ctx.fillRect(x, y, 5, 4);  // poorman's hacky lightCycle + lightWall
if (up) {
  console.log(up);
}





*/
