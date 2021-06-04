import React from 'react'
import { Button } from "@progress/kendo-react-buttons";

import './button.scss'

const ButtonComponent=(props)=>{
    return (
        <div>
            <Button {...props}/>
        </div>
    )
}

export default ButtonComponent