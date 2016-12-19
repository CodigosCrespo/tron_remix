function initCanvas() { // anything i need to do on canvas goes in here
  const ctx = document.getElementById('grid').getContext('2d'); /*756x480*/ // compresses the two variables context and canvas into one var.. will have to experiment to see how effective this works at my level
  const cW = ctx.canvas.width, cH = ctx.canvas.height; // easy access
  // initial positioning
  let y = 50, x = 50; //hard coded. fix when other cycles are added.. 1-4? ai?

  let lastKey = null; // setting initial trajectory, below
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

/* Pseudo & Reference:
if W is pressed, lastKey = turnUp
if A is pressed, lastKey = turnLeft
if S is pressed, lastKey = turnDown
if D is pressed, lastKey = turnRight
up: [38, 87], // up-arrow, W
left: [37, 65], // left-arrow, A
down: [40, 83], // down-arrow, S
right: [39, 68], // right-arrow, D
start_game: [13, 32] // enter, spacebar
// e.preventDefault(); // for when spacebar reset & arrow keys are added
*/

  drawCycle = () => {
      ctx.fillStyle = '#0079D3';
      let start = ctx.fillRect(x, y, 5, 4); //start @ xpixel/ypixel, draw 5pxwide/4pxhigh
      // add collision detection here
    }

  function animate(){
    ctx.save();
    // draw below
    drawCycle();
    // logic below
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
  }
  const animateInterval = setInterval(animate, 30);
}

window.addEventListener('load', function(event) {
  initCanvas();
})


/*
Pseudo for collision detection:



*/
