'use client';
import React,{MouseEvent,MouseEventHandler} from "react"
import {Button} from "@mantine/core"
type naiveButtonPropTypes = {
    text: string,
    textColor: string,
    backgroundColor: string,
    buttonRef: React.RefObject<HTMLButtonElement>,
    onClick?:React.MouseEventHandler<HTMLButtonElement>

}

export default function NaiveButton(naiveButtonProps:naiveButtonPropTypes) 
{

    return(
        <Button ref={naiveButtonProps.buttonRef} onClick={naiveButtonProps.onClick}>{naiveButtonProps.text}</Button>
    )
}