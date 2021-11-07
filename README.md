# ZeroCho-React-WebGames

Clone Coding Repository for "React WebGame" Course of ZeroCho

Lecture Link: https://www.youtube.com/playlist?list=PLcqDmjxt30RtqbStQqk-eYMK8N-1SYIFn

- Lecture Language: Korean

## Purpose / Goal

- To familiarize the concept of React
- Have the first experience in making web applications using React framework
  - Build some simple games using React

## What I Learn

- **React.Component** is building structure of React elements that will be appear on the screen.
  - All components should extends `React.Component`.
  - All components should override `render()` function.
  - Components may have `state`.
    - `state` is something that is modifiable inside the component.
    - use **setState()** to change state of the component.
- **React.createElement(type, [props], [... children])** generates new React Elements of given type.
  - `type` can be tag name of HTML elements or React Component type (class or function) name.
  - `prop` contains HTML properties of the element.
    - Should be expressed in object format.
  - Can use [**JSX**](https://reactjs.org/docs/introducing-jsx.html) (JavaScript + XML) format (using HTML-shaped Tags) instead of `React.createElement()`.
    - HTML expression inside JavaScript causes error;
      therefore, we need [**Babel**](https://babeljs.io/) to support JSX syntax.
      - To use `Babel`, `type` of script should be `text/babel`.
- **ReactDOM.render()** renders a React element into the existing DOM.
  - This function actually draws the React Components to the web browsers.
  - React need at least one element (the root div`<div id='root>`) to render the React components inside.

## Project
