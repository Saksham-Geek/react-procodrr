
import leftArrow from '../images.left-arrow.png'
import rightArrow from '../images.right-arrow.png'

console.log('LEFT:', leftArrow);
console.log('RIGHT:', rightArrow);

import '../style.css'
import Basket from './basket';
import Button from './Button';


function AppleCounter() {
    return (
        <section>
            <Basket  appleCount={10} basketNum={'basket 1'} basketClass={'basket-1'}/>
            <Button btnImgSrc={leftArrow}  btnClass={'left-arrow'} btnTitle={"left arrow"} />

            <Basket appleCount={0} basketNum={'basket 2'} basketClass={'basket-2'}  />
            <Button btnImgSrc={rightArrow} btnClass={'right-arrow'} btnTitle={"right arrow"} />
        </section>
    )
}

export default AppleCounter;