# Rock Paper Scissors - The Odin Project

This is my repo for the Rock Paper Scissors project from The Odin Project.

## Foundations course

In the Foundations course, the Rock Paper Scissors project had us create the basic game logic using three functions.  The first function is a randomly generated play for the computer.  The second function is the game itself that returns a string with the result based on the player's and computer's selections.  The third function plays five games.

The game is played on the browser's console, but future projects will move this play onto the page.

### DOM manipulation practice

The DOM manipulation lesson in the JavaScript Basic section has more additions to the Rock Paper Scissors game.  With the help of selectors for elements in the DOM, we can take our JavaScript to interact with the page.

- Added buttons for the player to choose which action to take.  Event listeners were added to trigger the play function with the appropriate action.
- The play function was changed to a single round of play instead of playing five games.
- The result of the game is now displayed on the page instead of in the console.
- A scoreboard now keeps track of points won.  A winner is declared when someone reaches 5 points.  The game resets on the game after a winner was declared.

This section of the project was a good practice in DOM manipulations and how to connect the JavaScript code to the HTML code.  While JavaScript can be written within the HTML, the methods for doing so are quite cumbersome and limited.  Using a separate JavaScript file allows for more function flexibility.