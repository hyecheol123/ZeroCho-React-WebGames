# MineSweeper (지뢰찾기)

Followed lecture contents to build a _MineSweeper_ game.  
Used `Context API` and React Hooks (Functional Component) to build application.

**Feature List (From Lecture)**

- Use `Context API` instead of relaying `dispatch` of `reducer` as a `props` of child Component.
- User can specify the game setting (the number of rows, columns, and mines).
- Timer to visualize how many time has been passed.
- Click to open the cell
  - Will open adjacent cell if there's no mine in the adjacent cell.
    - Used DFS algorithm.
  - Display the number of adjacent mines.
- Right click to flag the cell.
- Halt the game if user clicked the mine or discovered all mines.

**What I added/modified**

- User specify the game setting before enters the game.
  - Will have separated view for setup the game.
- Max number of rows and columns of the game board will be calculated based on the viewport size.
  - Though viewport resized, current game will continue (user should scroll the board while playing the game).
- Change algorithm to open adjacent cells (BFS-based algorithm).
- Rather than using right click, when user clicked a cell, it will display a menu to either flag or open the cell.
- Result is displayed on modal
- Design for both desktop and mobile site.
- Perfomance Optimization

|            ![]()            |
| :-------------------------: |
| _Demo Image of MineSweeper_ |

Code Link: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/minesweeper  
Demo Link:
