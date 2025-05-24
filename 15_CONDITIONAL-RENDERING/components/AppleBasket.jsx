import React from 'react'

const AppleBasket = ({ appleCount, basketName }) => {
  return (
    <div className="apple-basket">
      <h1>
        <span>{appleCount}</span> apples
      </h1>
      <p>{basketName} {appleCount===10 && "(Full)"} {appleCount===0 && "(Empty)"} {(appleCount!=10 && appleCount>=5) && "(Half Full)"}</p>
    </div>
  )
}

export default AppleBasket