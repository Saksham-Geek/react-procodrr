
function Button({btnImgSrc, btnClass, btnTitle}) {
  return (
     <button className={btnClass} title={btnTitle}>
                        <img src={btnImgSrc} alt={btnTitle} /> 
                    </button>
  )
}

export default Button;