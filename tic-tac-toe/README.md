# Tic-Tac-Toe Game

Followed lecture contents to build a _Tic Tac Toe_ game.  
Used `reducer` and React Hooks (Functional Component) to build application.

**Feature List (From Lecture)**

- use `reducer` instead of `state`.
- 2P Tic-Tac-Toe game logic
  - Alternate turn after one person place a stone.
  - Prevent click for the cell where somebody already placed the stone.
- Algorithm to determine winner.
- Performance optimization

**What I added/modified**

- 1P and 2P mode
  - Computer player's algorithm to choose best possible option (1P Hard Mode)
    - Priority of choosing location to put the stone.
      1. Makes computer win.
      2. Block player to put the stone on win position.
      3. Makes two stone locates in one row.
         Note that the opponent's stone should not be in the row.  
         Prioritize the cell which can make more lines with two stones.  
         (Weight 350 each)
      4. Prevent opponent two player's stone locate in one row.  
         Prioritize the cell which can prevent opponent player making more lines with two stones.  
         (Weight 100 each)
      5. If player already put the stone on the corner, put computer's stone on the opposite corner.  
         (Weight 45 each)
      6. On the opposite corner.  
         (Weight 25 each)
      7. Put stone on the corner.  
         (Weight 10 each)
      8. Center  
         (Weight 5 each)
      9. Empty Side  
         (Weight 1 each)
  - Computer player's algorithm to choose random option (1P Easy Mode)
- Performance optimization
  - Separate Component
  - `React.useCallback()` and `React.memo()`
- Design for both mobile and desktop site.

| ![](https://raw.githubusercontent.com/hyecheol123/ZeroCho-React-WebGames/main/img/tic-tac-toe/Tic-Tac-Toe-Demo.png) |
| :-----------------------------------------------------------------------------------------------------------------: |
|                                         _Demo Image of Tic Tac Toe 1P Mode_                                         |

Code Link: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/tic-tac-toe  
Demo Link: https://demo1.hcjang.com/tic-tac-toe/
