function initCanvas() { // anything i need to do on canvas goes in here
    const ctx = document.getElementById('grid').getContext('2d'); /*756x480*/ // compresses the two variables context and canvas into one var.. will have to experiment to see how effective this works at my level
    const cW = ctx.canvas.width,
          cH = ctx.canvas.height; // easy access
    let y = 50, // initial positioning
        x = 50; //hard coded. fix when other cycles are added.. 1-4? ai?

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

    drawCycle = () => {
        ctx.fillStyle = '#0079D3';
        let start = ctx.fillRect(x, y, 6, 6); //start @ xpixel/ypixel, draw 5pxwide/4pxhigh
        // add collision detection here
    }

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

window.addEventListener('load', function(event) {
    initCanvas();
})
