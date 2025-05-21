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

    function Card(key, name,category, price, image, brand) {
    return <div className='card' key={key}>
                <img src={image} alt="" />
                    <div className="card-content">
                            <h3>{name}</h3>
                            <p>{category}</p>
                            <p>{brand}</p>
                            <p><b>${price}</b></p>
                    </div>
            </div>
}

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data)=>{
    const container2 = data.products.map((product)=>{
        console.log(product)
        return Card(product.id, product.title, product.category, product.price, product.thumbnail,  product.brand)
    })
    const root = ReactDOM.createRoot(document.querySelector('#root'))
    root.render(<div className='container'>{container2}</div>)
});

// console.log(container2)
// const container = [Card(1),Card(2),Card(3),Card(4),Card(5),Card(6),Card(7),Card(8)]

