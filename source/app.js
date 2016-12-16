






/* Pseudo
OO classes: `view` `board` `coord` `cycle`

The `view` renders the board and listens for key events in the browser.
The board grid is constructed using `ul` and `li` tags.
Each time the board is rendered, the CSS class selector of each `li` item is updated using jQuery to reflect the position of the bikes.

The `board` class takes dimensions as arguments and checks if coordinates are within its boundaries.

The `cycle` holds the logic for turns, collisions, and the AI of the computer player.

-------

board is a grid consisting of initial states of 0
as the cycle passes through (live coords), it creates a trailing wall, 1 or 2
cycles cannot pass through 1 or 2, only 0.

constants:
const board-size grid/rows/cols
IDs grid=0 wallp1=1 wallp2=2
init / set / get 440

*/
