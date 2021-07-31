
import React, {useState} from 'react'
import axios from 'axios';


export default () => {
    //keep track of what is being typed via useState hook
    const [title, settitle] = useState(""); 
    const [price, setprice] = useState("");
    const [description, setdescription] = useState("");
    //handler when the form is submitted
    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new person
        axios.post('http://localhost:8000/api/people', {
            title,
            price,
            description
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
    }
    //onChange to update title and price
    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>title</label><br/>
                <input type="text" onChange={(e)=>settitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>price</label><br/>
                <input type="text" onChange={(e)=>setprice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>description</label><br/>
                <input type="text" onChange={(e)=>setdescription(e.target.value)} value={description}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
