import { useState } from "react"


function Counter(){
    console.log("Counter Component is rendering when data in count (state variable) is updated and the firts time the Component is loaded")
    const states = [0, 'Saksham'] // the setCount or other set function updates the value in array when the variable updates, the the Counter component (fn) is called again (re-rendered) and useState() is called again but this time the default argument value will not be taken, the states array will be checked if the value is updated or not, if it is updated the updated value will be saved in the state variable like count.
    let [count, setCount] = useState(0); // when the 1st time useState is called it takes default value of stateVar from function call, 2nd time, when it re-renders when state variable is updated, it takes the updated value from the updated state variable, count in this case. Old and New values are compared, if value is new the component re-renders with updated value, otherwise the component is not re-rendered by the render method as the value is old.It uses js concepts like cosure and memoisation.
    let [name, setName]= useState('Saksham')
    return (
        <>
        <h1>{count}</h1>
        <button onClick={()=> {
            console.log(count)
            setCount(prevState=> prevState+1)
            setCount(prevState=> prevState+1)
            setCount(prevState=> prevState+1)
            console.log(count)
            }
            }>Increase</button>
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