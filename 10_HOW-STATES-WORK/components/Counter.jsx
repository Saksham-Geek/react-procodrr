import { useState } from "react"


function Counter(){
    console.log("Counter Component is rendering when data in count (state variable) is updated and the firts time the Component is loaded")
    let [count, setCount] = useState(0); // when the 1st time useState is called it takes default value of stateVar from function call, 2nd time, when it re-renders when state variable is updated, it takes the updated value from the updated state variable, count in this case. Old and New values are compared, if value is new the component re-renders with updated value, otherwise the component is not re-rendered by the render method as the value is old.It uses js concepts like cosure and memoisation.
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count++)}>Increase</button>
        <button onClick={()=> setCount(count--)}>Decrease</button>
        </>
    )
}

export default Counter

// _________________________________________________________________________________________________________________________________________

// function Counter(){
//     let myStateArray = useState(0)
//     return (
//         <>
//         <h1>{myStateArray[0]}</h1>
//         <button onClick={()=> myStateArray[1](myStateArray[0]++) }>Increase</button>
//         <button onClick={()=> myStateArray[1](myStateArray[0]--)}>Decreate</button>
//         </>
//     )
// }

// export default Counter

// _________________________________________________________________________________________________________________________________________


// function Counter(){
//     let count = myStateArray[0];
//     let setCount = myStateArray[1]
//     let myStateArray = useState(0)
//     return (
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=> setCount(count++) }>Increase</button>
//         <button onClick={()=> setCount(count--)}>Decreate</button>
//         </>
//     )
// }

// export default Counter