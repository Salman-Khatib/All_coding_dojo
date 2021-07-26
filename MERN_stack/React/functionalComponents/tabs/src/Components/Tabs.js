
import React,{useState}  from 'react'



const Tabs = (props) => {

    const {tabs} = props;


    const handlClick = (e,content) => {
        
        console.log(content)
        props.changeCurrentContent(content)

    }
    


    return (
      
           <nav>
               {
                   tabs.map((tab,index)=>{
                      return <button  key={index} onClick={(e)=> handlClick(e,tab.content)}>{tab.label}</button>
                   })
               }
           </nav>
            

  
    )
}

export default Tabs