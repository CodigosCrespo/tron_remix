function initCanvas() { // anything i need to do on canvas goes in here

    // canvas setup
    const ctx = document.getElementById('grid').getContext('2d'); /*900x450*/
    const cW = ctx.canvas.width,
        cH = ctx.canvas.height; // easy access

    // cycle attributes below: easy convert to class
    const cycleW = 6,
          cycleH = 6;
    let y = 50, // initial positioning
        x = 50; //hard coded. fix when other cycles are added.. 1-4? ai?
    // let cycleCenter = cycleW / 2;

    // event handlers
    let lastKey = null; // setting initial trajectory, below
    $(document).keydown(function(e) {
        if (e.which == 87) {
            lastKey = e.which; // console.log('pressed up');
        } else if (e.which == 65) {
            lastKey = e.which; // console.log('pressed left');
        } else if (e.which == 83) {
            lastKey = e.which; // console.log('pressed down');
        } else if (e.which == 68) {
            lastKey = e.which; // console.log('pressed right');
        }
    });

    // cycle rendering
    drawCycle = () => {
        ctx.fillStyle = '#0079D3';
        ctx.fillRect(x, y, cycleW, cycleH); //
        // add collision detection here
    }

    // render
    function animate() {
        ctx.save();
        // draw below
        drawCycle();
        // logic below
        let currentDir = lastKey;
        if (lastKey === null) {
            x++;
        } else if (lastKey === 87) {
            y--;
        } else if (lastKey === 65) {
            x--;
        } else if (lastKey === 83) {
            y++;
        } else if (lastKey === 68) {
            x++;
        }
    }
    const animateInterval = setInterval(animate, 30);
}
// wait for page to load before initiating the canvas & content
window.addEventListener('load', function(event) {
    initCanvas();
})
