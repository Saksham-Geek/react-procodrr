
function Button({clickHandler, btnClass, btnImgSrc, btnTitle}) {
  return (
     <button onClick={clickHandler} className={btnClass} title={btnTitle}>
                        <img src={btnImgSrc} alt={btnTitle} /> 
                    </button>
  )
}

export default Button;