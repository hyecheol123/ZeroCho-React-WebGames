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
    - `null` in `JSX` indicates no elements to return.
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
    - `ref` can also be used as a 'member variable' of a functional component.
      - When chaning the content of ref, we ned to change `Ref.current`.
      - When `Ref` changed, `render()` will not be called.
        (The most important difference between `ref` and `state`.)
      - It memorizes the value.
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
  - **The order of Hooks matter!!**
    - Should not be placed in the _conditional statement_, _loop_, and _function_.
- Each child in a list needs to have a unique **key**, in order to identify which element to access (change, modify, delete).
  - Can use index as a key, but it is an anti-pattern.
    It may break the application and cause to display wrong data.
    - Reference Article: https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318
- **Props** are used to pass arguments to React Component.
  - Developers may separate Components to increase readability and reusability.
  - From callee, _props_ are set using HTML attribute syntax. (e.g. `<Trial value={value} index={index}/>`)
  - Inside the component, the `props` object contains all passed argument.
  - A parent component _passes_ props to the child components.
- To comment out `JSX` codes, simply put block comments inside the curly bracket.
  (e.g. `{/* Some Comments */}`)
- React Elements are **immutable**.
  - If you want to add an item into the array, need to create a new array.
    - If not, React cannot detect what has been modified.
- Everytime when `state` or `props` changed, Components are rendered again.
  - May render other not updated components, causing performance issue.
  - [**Component.shouldComponentUpdate()**](https://reactjs.org/docs/react-component.html#shouldcomponentupdate) can be used to hint React when it should re-render the component.
  - [**PureComponent**](https://reactjs.org/docs/react-api.html#reactpurecomponent) also can be used to solve the problem, as it will shallowly compare states and props.
    - May not detect changes inside an object and an array.
      Need to make another object or array, rather than modifying the already existing one.
  - For Functional Components (Hooks), Use [**React.memo()**](https://reactjs.org/docs/react-api.html#reactmemo).
  - Rule of Thumb: If all children are memoized, the parent is recommended to be memoized.
- **React Lifecycle (Class Component)**
  - When creating new Element: `constructor` -> `render()` -> ref -> `componentDidMount()`
  - when updating the Element: (Initialized when `states` and `props` change) -> `shouldComponentUpdate()` -> `render()` -> `componentDidUpdate()`
  - When removing the Element: `componentWillUnmount()`
  - Image illustrating the sequence can be found here  
    ![](https://raw.githubusercontent.com/hyecheol123/ZeroCho-React-WebGames/main/img/React-Lifecycle.jpeg)
  - Focuses on the **Component**
  - Lifecycle functions should appear once in the Class Component.
- **React Hooks Lifecycle**
  - Focus on data
  - `useEffect()` performs role of both `componentDidMount()` and `componentDidUpdate()`.
  - When function returned from `useEffect()`, the returned function will run before the Element removed.
    - Performs role of `componentWillUnmount()`.
  - `useEffect()` should get an array containing changing states as a second parameter.
  - Able to use multiple times in a Functional Component.
- **High Order Function (HOF)**
  - Return function as a result, or get function as parameters
  - In React, it is used to call EventHandler function with parameter.
- [**React.useMemo()**](https://reactjs.org/docs/hooks-reference.html#usememo) caches calculated result and prevent unnecessary function calls.
  - It is used to memorize complicated result of function.
- [**React.useCallback()**](https://reactjs.org/docs/hooks-reference.html#usecallback) memorizes the function itself.
  - It prevents same function to be created multiple time when Components re-render.
  - It also stores all the variables that _used_ in the function.
  - When we pass function as props to the child Component, it is required to wrap the function with `React.useCalback()` to prevent unnecessary re-render caused by props change.
    - Newly created function is _different_ function with previous one.

## Project

### Times Table (GuGuDan) Game

Followed lecture contents to build simple Times Table (GuGuDan) game.
Used React Class to build application.

Detailed information can be found here: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/9-times-table

### Bulls and Cows (숫자야구) Game

Followed lecture contents to build _Bulls and Cows_ game.
Used React Hooks to build application.

Detailed information can be found here: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/bulls-and-cows

### Response Time (반응시간) Game

Followed lecture contents to build a simple game to measure user's response time.  
Used React Hooks to build application.

Detailed information can be found here: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/response-time

### Rock Paper Scissors (가위바위보) Game

Followed lecture contents to build a _Rock Paper Scissors_ game.  
Used React Class and React Lifecycle methods to build application.

Detailed information can be found here: https://github.com/hyecheol123/ZeroCho-React-WebGames/tree/main/rock-paper-scissors
