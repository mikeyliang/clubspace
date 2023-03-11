'use client'

import React, {useState} from 'react';
import {Input,TextInput} from '@mantine/core'

type genericTextInput = {
    inputType: "text"
    placeholder:string
    label:string
}

type dateTextInput = {
    inputType: "date"
    placeholder:string
    label:string
}

type allTextTypes = genericTextInput | dateTextInput

export default function NaiveTextInput(naiveTextInputProps:allTextTypes) {
    const [value, setValue] = useState('');
    if(naiveTextInputProps.inputType === "text"){
        return(
        <Input component="input" placeholder = {naiveTextInputProps.placeholder}  radius = "md" size = "md" value={value} onChange={(event) => {setValue("hiiii"); console.log(event.currentTarget.value);}}
        ></Input>
        )
    }
     else if(naiveTextInputProps.inputType === "date"){
        return(
        <TextInput placeholder = {naiveTextInputProps.placeholder} label = {naiveTextInputProps.label} radius = "md" size = "md"/>
        )
    }  
}


