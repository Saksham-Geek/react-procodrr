## REACT COMPONENT AND PROPS

- React components are powerful for building **reusable UI pieces**.
- Technically, a React component is a **React element whose type is a function that returns a React element (JSX).**
- Passing data as a single object (conventionally called props) resolves issues with parameter order seen in basic function calls.
- root.render processes React elements based on their type property.
- If type is a **string**, a DOM element is created, and props are set as attributes.
- If type is a **function**, the function component is called with the props object, and its returned React element is rendered**.**
- JSX syntax simplifies the creation of React elements and passing of props. JSX component usage like <Card title="iPhone 13" /> is compiled into React.createElement(Card, { title: "iPhone 13" }).
- Inside the function component, props are received as a single object parameter.
- Component names should start with a **capital letter**.
- The key prop is used by React internally for handling lists of elements and is not typically exposed in the DOM attributes when the type is a function.

The root.render() method in React is used to render React elements to the DOM. The render method takes a React element as its argument. A React element is fundamentally a **simple JavaScript object** with certain mandatory properties. The most important property is type. Other properties include ref and props.

### How root.render Works with Different Types

1. **When the type is a string:** If the type property of the React element object is a string, such as an HTML tag name like "h1", "span", or "div", React understands this as a native HTML element. In this case, the render method will **create a DOM element with that tag name**. It will then **set the properties received in the props object as attributes on that DOM element**. For example, if you pass { title: 'Apple 13', class: 'card' } as props to a span element, React will create a <span> tag and set title="Apple 13" and class="card" as attributes on it. The key prop is an exception; it is used by React internally and typically does not appear as a DOM attribute.
2. **When the type is a function:** If the type property of the React element object is a function (which is the case for a functional React component), the render method behaves differently. Instead of creating a DOM element directly, the render method will **call that function**. The **props object is passed as the argument to this function call**. The function component is expected to **return a React element** (which can be a string-based element like ```<h1>``` or another function-based element). React then renders the element returned by the function.

### **Passing and Receiving Props**

When using JSX syntax (like <Card title="iPhone 13" ... />), the syntax looks similar to passing HTML attributes. This JSX syntax is compiled (or transformed) by a build tool (like Babel, using the JS current time function or a classic setting that shows React.createElement) into calls to React.createElement. The React.createElement function takes the component's type (the function itself), the props object, and any children as arguments.

For example, writing <Card title="iPhone 13" brand="Apple" /> in JSX gets compiled into something like React.createElement(Card, { title: "iPhone 13", brand: "Apple" }). This call creates the React element object with type: Card (the function) and props: { title: "iPhone 13", brand: "Apple" }.

When the root.render method encounters this element with a function type, it **calls the Card function which is received**, and the **entire props object { title: "iPhone 13", brand: "Apple" } is passed as the first (and typically only) argument** to the function.

Inside the function component, you can receive these props as a parameter, conventionally named props. You can then access individual values using dot notation (e.g., props.title, props.brand) or use object de-structuring directly in the function signature (e.g., function Card({ title, brand }) { ... }).