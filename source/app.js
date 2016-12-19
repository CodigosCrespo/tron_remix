function initCanvas() { // anything i need to do on canvas goes in here
  const ctx = document.getElementById('grid').getContext('2d'); /*756x480*/ // compresses the two variables context and canvas into one var.. will have to experiment to see how effective this works at my level
  const cW = ctx.canvas.width, cH = ctx.canvas.height; // easy access
  // initial positioning
  let y = 50, x = 50;
  // let curDir = x++; // initial trajectory of poorman's hacky lightCycle


  // variables to turn on event
  let lastKey = null;
  $(document).keydown(function(e) {
    if (e.which == 87){
      console.log('pressed up');
      lastKey = e.which;
    } else if (e.which == 65){
      console.log('pressed left');
      lastKey = e.which;
    } else if (e.which == 83){
      console.log('pressed down');
      lastKey = e.which;
    } else if (e.which == 68){
      console.log('pressed right');
      lastKey = e.which;
    }
  });

/*
  $(document).keydown(function(e) {
    if (e.which === 87){
      console.log('pressed up')
      lastKey = turnUp;
    } else return;
  });

  $(document).keydown(function(e) {
    if (e.which === 65){
      console.log('pressed left');
      lastKey = turnLeft;
    } else return;
  });

  $(document).keydown(function(e) {
    if (e.which === 83){
      console.log('pressed down');
      lastKey = turnDown;
    } else return;
  });

  $(document).keydown(function(e) {
    if (e.which === 68){
      console.log('pressed right');
      lastKey = turnRight;
    } else return;
  });
*/


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
    let currentDir = lastKey;
    if (lastKey === null){
      x++;
    } else if (lastKey === 87){
      y--;
    } else if (lastKey === 65){
      x--;
    } else if (lastKey === 83){
      y++;
    } else if (lastKey === 68){
      x++;
    }
    // if (x == 50){ // when game starts,
    //   let moveX = 0; // set initial trajectory
    // }

    /*logic above*/
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
