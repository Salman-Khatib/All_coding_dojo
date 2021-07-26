

import React, {useState} from 'react'



const Content = (props) =>{

    const {changed} = props

    return (
        <div>
            <textarea cols="100" rows="10" value={changed}/>
        </div>
    )
}

export default Content