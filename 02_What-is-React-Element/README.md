## Notes

- React and ReactDOM are both JavaScript libraries (represented as objects when imported).

- The React object contains a method called createElement, which is used to create React elements. These elements are plain JavaScript objects that describe what you want to render on the screen.

- The ReactDOM object provides methods to interact with the actual DOM. It includes the createRoot method (in React 18+), which is used to create a root container that manages the rendering of React elements to the DOM.

### In simple terms:

- React.createElement → creates virtual UI elements (React elements).

- ReactDOM.createRoot and .render → take those virtual elements and render them into real DOM elements that the browser understands.