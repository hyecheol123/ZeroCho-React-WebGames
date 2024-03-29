# Bulls and Cows (숫자야구) Game

Followed lecture contents to build _Bulls and Cows_ game.  
Used React Hooks to build application.

**Feature List (From Lecture)**

- Basic Bulls and Cows Logics
  - Randomly select four different number and ask user to guess the number and order.
  - Display trials (user's previous guess and result)
  - **Strike**: Correct number & Correct position
  - **Ball**: Correct number & Incorrect position
- Use React Hooks

**What I added/modified**

- Change logic to match the original Bulls and Cows game
  - Ref: https://en.wikipedia.org/wiki/Bulls_and_Cows
  - **Bull**: Correct number & Correct position
  - **Cow**: Correct number & Incorrect position
- Filter user's input
- Create Button to start new game
- React Performance Optimization
  - Separate Components.
  - Utilize `React.useCallback()` and `React.memo()`.
- Design for both mobile and desktop site

|![](https://raw.githubusercontent.com/hyecheol123/ZeroCho-React-WebGames/main/img/bulls-and-cows/Bulls-and-Cows-Demo.png)|
| :---------------------------------------------------------------------------------------------------------------------: |
|                                           _Demo Image of Bulls and Cows Game_                                           |

Code Link: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/bulls-and-cows  
Demo Link: https://demo1.hcjang.com/bulls-and-cows
