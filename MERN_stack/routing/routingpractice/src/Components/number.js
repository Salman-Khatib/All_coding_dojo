
import React from 'react'

const Numberss = (props) => {

    


    return (
        <div>

            {
            isNaN(props.id) ?   <h1 style={{backgroundColor:props.bcolor,color:props.lcolor}}>the word is : {props.id}</h1> : <h1>The number is : {props.id}</h1>

    }
            
        </div>
    )
}

export default Numberss
