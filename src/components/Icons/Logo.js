import * as React from "react"
import { useState } from "react"
import style from './icons.module.scss'


const Logo = (props) => {
    let [stroke, setStroke] = useState("#ffffff")

    return (
        <svg
            id="YALogo"
            className={`${style.icon} ${style.ya_logo_icon}`}
            data-name="yaLogo"
            stroke={stroke}
            width={40}
            height={40}
            strokeWidth={4}
            fill="transparent"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 94.66 94.96"
            {...props}
        >
            <path
                d="M34.25 34.49 67.68 1.06 1.06 67.68M4.66 89.96 87.8 6.83"
            />
            <path
                d="M61.41 61.21 93.09 92.9M93.09 27.23l.07 66.76M26.97 93.9l66.57-66.57M1.43 1.23l32.13 32.13"
            />
        </svg>
    )
}

export default Logo