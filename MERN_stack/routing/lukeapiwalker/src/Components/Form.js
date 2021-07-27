


import React,{useState} from 'react'
import axios from 'axios'
import {Link} from '@reach/router'



const Form = (props) => {

    // const array = [people,planets]
    const [id,setId] = useState(0);
    const [resource,setResource] = useState("people");


    return (
        <div>
            <form>
                <label>Search For: </label>
                <select  onChange={e => setResource(e.target.value)} value={resource}>

                <option value="people">people</option>
                <option value="planets">planets</option>
                {/* {resource.map((item, i) => (
                    <option key={i} value={item}>{item.name}</option>
                ))} */}
                </select>
                <label>ID: </label>
                <input resource="id" onChange={(e) => setId(e.target.value)} value={id}></input>
                {/* <input resource="submit" value="Search"></input> */}
                <Link  to={"/"+resource+"/"+id}>Search</Link>
            </form>

        </div>
    )
}

export default Form