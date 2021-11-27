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
      1. Makes computer **win**.
      2. **Block** player to put the stone on **win** position.
      3. Makes **two stone locates in one row**.
         Note that the opponent's stone should not be in the row.
      4. **Prevent two player's stone locate in one row.**
      5. Put stone on the **corner**.
      6. If player already put the stone on the corner, put computer's stone on **the opposite corner**.
      7. **On the opposite corner.**
      8. **Center**.
      9. **Empty Corner**
      10. **Empty Side**
  - Computer player's algorithm to choose random option (1P Easy Mode)
- Performance optimization
- Design for both mobile and desktop site.

|            ![]()            |
| :-------------------------: |
| _Demo Image of Tic Tac Toe_ |

Code Link: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/tic-tac-toe  
Demo Link:
