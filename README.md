# tron_remix
Tron remix of the classic arcade game. Built with JS, jQuery, HTML, CSS. 

##### Control a light cycle and try to make your opponent crash into a wall before you do. Use the arrow keys to move and press enter for turbo.

![Screenshot of initial grid on frontside](assets/images/initial-grid.png)

### Technologies Used
- html
- css
- js

### Code Example
```javascript
function animate(){ 
    ctx.save(); 
    ctx.fillStyle = '#0079D3';
    ctx.fillRect(x, y, 5, 4);
    ctx.restore; 
  }
  const animateInterval = setInterval(animate, 30); 
```
### Complications/Future Improvements
Complications/Challenges/Handicaps: 
- Kept confusing vanilla js with jquery.
- Currently unable to wrap my head around scope and connecting js to everything
- Should have devoted more time to Canvas, rather than hesitating to use it. 

Future Improvements: 
- Many, will add later.

### Authors
Myself, my very confused self.
#### Inspiration & References
- [Adam Khoury Canvas Bootcamp](https://www.youtube.com/watch?v=bCYz_N6BIPw&list=PLlkGN-8wjPHWYT_00xdUibDPfHZ3Zm8i3)
    - Clear and concise intro to the rabbit hole that is Canvas.
- [Flash Tron - Play original FlTron & Variations!](http://www.fltron.com/)
    - WebDev dreams of reaching this technical skill level.
