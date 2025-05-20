// using venilla JS

// const h2 = document.createElement('h2')
// h2.innerText = 'Heading using venilla JS'
// const venillaRoot = document.querySelector('#root')
// venillaRoot.appendChild(h2)


// using React

const heading = React.createElement('h2', { className: "heading" }, "Hello from React.createElement")

// const container = React.createElement('div', { className: "Grand Parent" }, [React.createElement('section', { className: "parent" }, [React.createElement('section', { className: "child" }, React.createElement('h3', { className: "level3NestedHeading" }, "Heading inside a child"))])])

// console.dir(heading)
console.dir(container)


/*  console.dir(container) --

{
    "type": "div",
    "key": null,
    "ref": null,
    "props": {
        "className": "Grand Parent",
        "children": [
            {
                "type": "section",
                "key": null,
                "ref": null,
                "props": {
                    "className": "parent",
                    "children": [
                        {
                            "type": "section",
                            "key": null,
                            "ref": null,
                            "props": {
                                "className": "child",
                                "children": {
                                    "type": "h3",
                                    "key": null,
                                    "ref": null,
                                    "props": {
                                        "className": "level3NestedHeading",
                                        "children": "Heading inside a child"
                                    },
                                    "_owner": null,
                                    "_store": {}
                                }
                            },
                            "_owner": null,
                            "_store": {}
                        }
                    ]
                },
                "_owner": null,
                "_store": {}
            }
        ]
    },
    "_owner": null,
    "_store": {}
}

*/

// const h2 = {
//     "$$typeof": Symbol.for('react-element'), // it does not get transfered using json (api) so it is used to secure the code
//     "type": "h2",
//     "key": null,
//     "ref": null,
//     "props": {
//         "className": "heading",
//         "children": "Hello from React.createElement"
//     },
//     "_owner": null,
//     "_store": {}
// }

const container = React.createElement(
    'div',
    { className: 'container', id: 'container' },
    [
      React.createElement('section', { key: 1 }, [
        React.createElement(
          'p',
          { key: 1 },
          'The library for web and native user interfaces'
        ),
        React.createElement('img', {
          key: 2,
          style: {
            width: 200,
            backgroundColor: 'teal',
            borderRadius: 8,
            padding: 16,
          },
          src: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
        }),
      ]),
      React.createElement('section', { key: 2 }, [
        React.createElement('form', { key: 1 }, [
          React.createElement('div', {className: 'input-group', key: 1}, [
            React.createElement(
              'label',
              { key: 1, htmlFor: 'username' },
              'Username'
            ),
            React.createElement('input', { key: 2, id: 'username' }),
          ]),
          React.createElement('div', {className: 'input-group', key: 2}, [
            React.createElement(
              'label',
              { key: 1, htmlFor: 'password' },
              'Password'
            ),
            React.createElement('input', { key: 2, id: 'password', type: 'password' }),
          ]),
        ]),
      ]),
    ]
  )
  


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(container)

