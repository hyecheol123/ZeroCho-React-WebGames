# Rock Paper Scissors (가위바위보) Game

Followed lecture contents to build a _Rock Paper Scissors_ game.  
Used React Class and React Lifecycle methods to build application.

**Feature List (From Lecture)**

- Rock Paper Scissors Logic
- Used `componentDidMount()` and `componentWillUnmount()` to set and clear interval to change computer's choice.

**What I added/modified**

- Randomly change computer's choice
- Performance Optimization
  - Separate Components
    - To prevent re-rendering of all Components, I decide to separate Component showing the Rock-Paper-Scissor image and make interval inside the separated Component.
      However, to set and clear interval properly (especially clearing and resetting the interval when button pressed), I end up accessing states of child (separated) Component from the parent.
  - Use React.PureComponent
- Use three separated `svg` files to show computer's choice.
- Use webpack asset module to optimize image delivery.
- Design for both mobile and desktop site.

| ![](https://raw.githubusercontent.com/hyecheol123/ZeroCho-React-WebGames/main/img/rock-paper-scissors/Rock-Paper-Scissors-Demo.png) |
| :---------------------------------------------------------------------------------------------------------------------------------: |
|                                                 _Demo Image of Rock Paper Scissors_                                                 |

Code Link: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/rock-paper-scissors  
Demo Link: https://demo1.hcjang.com/rock-paper-scissors/
