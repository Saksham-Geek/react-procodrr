import Button from './Button'

import LeftArrow from '../images/left-arrow.png'
import RightArrow from '../images/right-arrow.png'
import AppleBasket from './AppleBasket'

import '../style.css'
import Counter from './Counter'
import { useState } from 'react'

const totalAppleCount = 10



const AppleCounter = () => {
  let [rightAppleCount, setRightAppleCount] = useState(0)
  let [leftAppleCount, setLeftAppleCount] = useState(totalAppleCount-rightAppleCount)
  const leftClickHandler = () => {
    if (rightAppleCount > 0) {
      setRightAppleCount(rightAppleCount-1)
      setLeftAppleCount(leftAppleCount+1)
      
    }
  }
  const rightClickHandler = () => {
    if (leftAppleCount > 0) {
      setRightAppleCount(rightAppleCount+1)
      setLeftAppleCount(leftAppleCount-1)
    }
  }

  return (
    <>
        {/* <Counter /> */}
      <section>
      <AppleBasket  appleCount={leftAppleCount} basketNum={'basket 1'} basketClass={'basket-1'}/>
            <Button clickHandler={leftClickHandler} btnImgSrc={LeftArrow}  btnClass={'left-arrow'} btnTitle={"left arrow"} />

            <AppleBasket appleCount={rightAppleCount} basketNum={'basket 2'} basketClass={'basket-2'}  />
            <Button clickHandler={rightClickHandler} btnImgSrc={RightArrow} btnClass={'right-arrow'} btnTitle={"right arrow"} />
      </section>?
    </>
  )
}

export default AppleCounter