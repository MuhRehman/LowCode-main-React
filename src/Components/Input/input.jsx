import React from 'react'
import { Input } from "@progress/kendo-react-inputs";

import './input.scss'

const InputComponent=(props)=>{
    return (
        <div>
            <Input {...props}/>
        </div>
    )
}

export default InputComponent