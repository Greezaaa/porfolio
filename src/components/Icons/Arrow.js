import * as React from "react"
import { useState} from "react"
import style from './icons.module.scss'

const Arrow = (props) => {
  let [stroke, setStroke] = useState("#ffffff")
{/* <Arros /> */}
  return (

      <svg 
      // onClick={() => setStroke("#fbc900")}
        id="ArrowIcon"
        className={`${style.icon} ${ style.arrow_icon}`}
        fill="none"
        width={24}
        height={24}
        stroke={stroke}
        strokeWidth="4px"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 46.85 46.85"
        {...props}
      >
  
  <path d="M.35.5h46M46.35 46V0M.35 46.5l46-46" />
      </svg>
 
  )
}

export default Arrow