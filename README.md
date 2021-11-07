# ZeroCho-React-WebGames

Clone Coding Repository for "React WebGame" Course of ZeroCho

Lecture Link: https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn

- Lecture Language: Korean

## Purpose / Goal

- To familiarize the concept of React
- Have the first experience in making web applications using React framework
  - Build some simple games using React

## What I Learn

- `node` packages for React Dev Environment
  - **React**
    - `react`: React Core
    - `react-dom`: Connect React and DOM
  - **Babel**
    - `@babel/core`: Babel Core
    - `@babel/preset-react`: Transfiling React JSX
    - `@babel/preset-env`: Transfiling ES6+ Codes
  - **Webpack**
    - `webpack`: Webpack Core
    - `webpack-cli`: Use Webpack on command line interface
    - `webpack-dev-server`: Build webpack in-memory and run development server
    - `babel-loader`: Transfiling JSX and ES6+ syntax
    - `style-loader`: Wrap and inject compiled CSS file
    - `css-loader`: Interpret CSS file so that JavaScript can understand
    - `html-webpack-plugin`: Inject bundled JavaScript files to HTML file
    - `mini-css-extract-plugin`: Separate CSS files
- **React.Component** is building structure of React elements that will be appear on the screen.
  - All components should extends `React.Component`.
  - All components should override `render()` function.
  - Components may have `state`.
    - `state` is something that is modifiable inside the component.
    - use **setState()** to change state of the component.
      - Only used for something that needs to be changed manually
- **React.createElement(type, [props], [... children])** generates new React Elements of given type.
  - `type` can be tag name of HTML elements or React Component type (class or function) name.
  - `prop` contains HTML properties of the element.
    - Should be expressed in object format.
  - Can use [**JSX**](https://reactjs.org/docs/introducing-jsx.html) (JavaScript + XML) format (using HTML-shaped Tags) instead of `React.createElement()`.
    - HTML expression inside JavaScript causes error;
      therefore, we need [**Babel**](https://babeljs.io/) to support JSX syntax.
      - To use `Babel`, `type` of script should be `text/babel`.
    - JavaScript code should be placed in curly bracket (e.g.: `<div>{... some js code ...}</div>`).
  - **React.Fragment** is used to group a list of chlidren without adding extra nodes to the DOM.
    - Help removing meaningless `<div>`.
    - Notation: `<React.Fragment> ... </React.Fragment>` or `<> ... </>`
- Recommend NOT to mix JSX and JS Codes.
  - JavaScript logics can be implemented as Class Methods.
- **ReactDOM.render()** renders a React element into the existing DOM.
  - This function actually draws the React Components to the web browsers.
  - React need at least one element (the root div`<div id='root>`) to render the React components inside.

## Project

### Times Table Game

Followed lecture contents to build simple Times Table game.
Used React Class to build application.

**Feature List (From Lecture)**

- Randomly select two number and ask user for the answer of multiplication.
- Display the result of quiz.
- Wrote codes in the browser (Importing JavaScript from CDN)

**What I added/modified**

- Setup React Development Environment (Use Babel and Webpack)
- Display correct answers if wrong
- Design for both mobile and desktop site

|      ![]()      |
| :-------------: |
| _Demo Image of_ |

Code Link:  
Demo Link:
