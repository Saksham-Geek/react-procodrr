## Notes

### Babel

Babel converts new Javascript code into old Javascript code so that old browsers can also execute JS.
Bable converts JSX into React.createElement() - It's a function that returns a JavaScript object, NOT real HTML yet.
React [ReactDOM.render()] takes the object returned by createElement() and turns it into real DOM nodes using Vanilla JS.

Summary 

You write JSX	```<h1>Hello</h1>```

Babel converts it	```React.createElement('h1', null, 'Hello')```
React.createElement	Returns a plain JS object (Virtual DOM)
ReactDOM.render	Takes that object and uses document.createElement() which is DOM API used in venilla JS to build real DOM
Browser	Displays final HTML: <h1>Hello</h1>

If you’re not using Babel, you must:

Either write code directly with React.createElement

Or use a bundler/transpiler that supports JSX (like Vite, Next.js, or Parcel)