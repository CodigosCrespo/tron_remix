/*attempt 4ish*/
function initCanvas() { // anything i need to do on canvas goes in here
  const ctx = document.getElementById('grid').getContext('2d'); /*756x480*/ // compresses the two variables context and canvas into one var.. will have to experiment to see how effective this works at my level
  const cW = ctx.canvas.width, cH = ctx.canvas.height; // easy access
  let y = 0, x = 0;
  function animate(){ // firing rapidly, keep code slim
    ctx.save(); //saves changes before refiring animate
    /*ctx.clearRect(0, 0, cW, cH); //commenting this out, I want my tron to 'draw' where it drives*/
    // draw below
    ctx.fillStyle = '#0079D3';
    ctx.fillRect(x, y, 10, 8); // start at 0, 0, 5 wide, 4 high
    // draw above
    // logic below
    if (y == 50){ // change to if (keyevent)
      shiftY = 0;
      x++
    }
    if (x == 0) {let shiftY = y++;}
    // logic above
    ctx.restore; //
  }
  const animateInterval = setInterval(animate, 30); //this is what is making the animate function fire so frequently (for smoother animation)
}
//

//
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
