import * as React from "react"
import { useState } from "react"
import style from './icons.module.scss'

const EmailIcon = (props) => {
  let [stroke, setStroke] = useState("#ffffff")
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="ArrowIcon"
      className={`${style.icon} ${style.arrow_icon}`}
      fill="none"
      stroke={stroke}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M0 0h24v24H0z" stroke="none" />
      <rect x={3} y={5} width={18} height={14} rx={2} />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}
export default EmailIcon
