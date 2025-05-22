// import user from './data.js'
import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
console.log(React)

// const card = <div className='card'>
//     <img src="https://i.insider.com/66ed6324cfb7f307e5735cbe?width=1200&format=jpeg" alt="" />
//    <div className="card-content">
//         <h3>iphone 16</h3>
//         <p>Apple</p>
//         <p><b>$999</b></p>
//    </div>
// </div>

function Card(props) {
    const { title, image, brand, price } = props
    return (
        <div className="card">
            <img src={image} alt="iphone" />
            <div className="card-content">
                <h3>{title}</h3>
                <p>{brand}</p>
                <p>
                    <b>${price}</b>
                </p>
            </div>
        </div>
    )
}


// fetch('https://dummyjson.com/products')
//     .then(res => res.json())
//     .then((data) => {
//         const container2 = data.products.map((product) => {
//             console.log(product)
//             return Card({ 
//                 key: product.id,
//                 title: product.title,
//                 category: product.category,
//                 thumbnail: product.thumbnail,
//                 price: product.price,
//                 brand: product.brand 
//             })
//         })
//         const root = ReactDOM.createRoot(document.querySelector('#root'))
//         root.render(<div className='container'>{container2}</div>)
//     });


// console.log(container2)
// const container = [Card(1),Card(2),Card(3),Card(4),Card(5),Card(6),Card(7),Card(8)]

// const root = ReactDOM.createRoot(document.querySelector('#root'))
/*
root.render takes ReactElement as argument and ReactElement is an object.
*/

const h1 = <h1>Hello world</h1>

const h2 = React.createElement('h2', { className: 'heading' }, 'Heading from React.createElement')

function Card2() {
    return <h1>Card 2</h1> // it will become object which will be valid ReactElement
}

// root.render(
//     {
//         $$typeof: Symbol.for('react.element'),
//         type:Card2, // if type is a string all props will be pasted in string as atribute | if type is function, render method calls the function and passes all data as object which is in props, that props data can be used inside the function, it is used to pass data
//         ref:null,
//         props:{}
//     }
// )


const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(<Card />)  

fetch('https://dummyjson.com/products')
    .then((res) => res.json())
    .then((data) => {
        root.render(
            <div className="container">
                {data.products.map((product) => {
                    return (
                        <Card
                            key={product.id}
                            title={product.title}
                            brand={product.brand}
                            price={product.price}
                            image={product.thumbnail}
                        />
                    )
                })}
            </div>
        )
    })
