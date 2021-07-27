

import React,{useState} from 'react' 


const ColorWord = (props) => {

    // let num = true; if you have one component you need to use this
    // if (isNaN(+props.word)){
    //     num = false;
    // }
    // const colors = {
    //     color : props.lcolor,
    //     background: props.bcolor
    // }



    return (
        <div style={{backgroundColor:props.bcolor,color:props.lcolor}}>
        <h1 >the word is : {props.word} </h1>
        </div>
    )

}


export default ColorWord