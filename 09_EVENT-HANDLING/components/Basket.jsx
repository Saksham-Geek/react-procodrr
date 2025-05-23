function Basket({basketNum, basketClass, appleCount}){
    return (
                <div className={basketClass}> 
                    <h1><span className="basket-count" >{appleCount}</span> Apples</h1>
                    <p>{basketNum}</p>
                </div>
            )
        }

export default Basket;