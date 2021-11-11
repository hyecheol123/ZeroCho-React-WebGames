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
      - It is asynchronous function.
      - Only used for something that needs to be changed manually
      - Able to get function handler as a parameter which handles state change.
        The function handler may get parameter specifying the previous state.
      - Everytime when `setState()` is called, `render()` is called.
        Meaning the components will re-rendered.
- **ref** is uesd when we need to access DOM directly.
  - Similar to Vanilla JS's `querySelector()` or `getElementById()`.
  - Official Guide: https://reactjs.org/docs/refs-and-the-dom.html
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
- Element's `class` and `for` (only `label`) properties cannot be used in JSX.
  - The HTML `class` property is set by `className` property of JSX component.
  - The HTML `for` property is set by `htmlFor` property of JSX component.
- **ReactDOM.render()** renders a React element into the existing DOM.
  - This function actually draws the React Components to the web browsers.
  - React need at least one element (the root div`<div id='root>`) to render the React components inside.
- **Functional Components** only contains `render()` part of React Component (Class component), which used when we do not need `state` and `ref`.
- **React Hooks** is a new way (recommend way) to define a React component.
  - It adds `state` and `ref` support to functional component.
  - **React.useState()** is used to define a state and its own `setState()` method.
  - **React.useRef()** is used to create new reference to the DOM object.
    - When access to the DOM Element, need to use `RefObject.current`.
  - EventHandler function should be arrow function.
  - ```JavaScript
    // Example of using React Hooks
    const GuGuDan = () => {
      // State [stateName, setFunction]
      const [state, setState] = React.useState('Initial Value');
      // ref
      const inputRef = React.useRef();
      // EventHandler
      const onChangeInput = (event) => {
        setState(e.target.value); // Modify the state
        inputRef.current.focus();
      }
      return (
        <div>Hello, World!</div>
        <input ref={inputRef} onChange={onChangeInput} value={state}/>
      )
    }
    ```
  - Note that once state changed, all codes in the function (Hooks) re-run (but in optimized way).

## Project

### Times Table (GuGuDan) Game

Followed lecture contents to build simple Times Table (GuGuDan) game.
Used React Class to build application.

Detailed information can be found here: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/9-times-table

### Bulls and Cows (숫자야구) Game
