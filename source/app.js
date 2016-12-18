class View() {
/*The `view` renders the board and listens for key events in the browser.
The board grid is constructed using `ul` and `li` tags.
Each time the board is rendered, the CSS class selector of each `li` item is updated using jQuery to reflect the position of the bikes.*/

}

class Board () {
/*The `board` class takes dimensions as arguments and checks if coordinates are within its boundaries.*/

}

class Coord () {

}



class Cycle() {
/*The `cycle` holds the logic for turns, collisions, and the AI of the computer player.*/
  constructor () {
    // this.x = 0; // current x-coordinate
    // this.y = 0; // current y-coordinate
    // this.speedx = 1; // horizontal movement, 1 for initial movement
    // this.speedy = 0; // vertical movement, 0 initial movement
  }
  jetWall () { // which player parameter
   /* if (cycle1 === true && this.x + this.y === 0) {
      this.x + this.y = 1;
    } else if (cycle2 === true && this.x + this.y === 0) {
      this.x + this.y = 2;
    }
  }*/

}






/*

board is a grid consisting of initial states of 0
as the cycle passes through (live coords), it creates a trailing wall, 1 or 2
cycles cannot pass through 1 or 2, only 0.

constants:
const board-size grid/rows/cols
IDs grid=0 wallp1=1 wallp2=2
init / set / get 440

*/
