const leftArrow = document.querySelector('.left-arrow')
const rightArrow = document.querySelector('.right-arrow');

let basket1Count = document.querySelector('.basket-1 span')
let basket2Count = document.querySelector('.basket-2 span')
let  = document.querySelector('.basket-2 span')
const totalApples = 10

secondBasketAppleCount = 0;
firstBasketAppleCount = totalApples - secondBasketAppleCount;

basket1Count.innerText = firstBasketAppleCount
basket2Count.innerText = secondBasketAppleCount

rightArrow.addEventListener('click', ()=>{
    if(firstBasketAppleCount>0){
        firstBasketAppleCount--
        // imperetive programming - we have to update the variable manually | React does declarative programming - we have to mention once only and the UI will be updated when state updates
    basket1Count.innerText = firstBasketAppleCount 
    secondBasketAppleCount++
    basket2Count.innerText = secondBasketAppleCount
    }
})

leftArrow.addEventListener('click', ()=>{
    if(secondBasketAppleCount>0){
        firstBasketAppleCount++
    basket1Count.innerText = firstBasketAppleCount
    secondBasketAppleCount--
    basket2Count.innerText = secondBasketAppleCount
    }
})


// if () {
    
// } else {
    
// }