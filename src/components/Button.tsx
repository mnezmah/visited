import React, {MouseEventHandler, ReactElement, ReactNode} from "react";
import {ButtonType} from "@/src/enums/ButtonType.enum";
import {ThemeColor} from "@/src/enums/ThemeColor.enum";
import {mapButtonColors} from "@/src/components/buttonColors.map";
import classNames from "classnames";

interface ButtonProps {
    type: ButtonType
    title: ReactNode
    onClick?: MouseEventHandler<HTMLButtonElement>
    value?: string
    className?: string
    disabled?: boolean
    color?: ThemeColor

}
export const Button = ({ value, onClick,type, className, disabled, title, color =ThemeColor.PRIMARY}: ButtonProps)=>{
    return(
        <button className={`btn ${className} ${classNames(mapButtonColors[color])}`}
                type={type}
                disabled={disabled}
                value={value}
                onClick={onClick}
        >
            {title}
        </button>
    )
}