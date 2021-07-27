

import React from 'react';
import axios from 'axios';
import {useState,useEffect} from 'react';

const Show = (props) => {
    const [result,setResult] = useState(""); 

    const {resource,id} = props;




    const fetchSW = (resource, id) => {
        axios.get("https://swapi.dev/api/"+resource+"/"+id+"?count=4")
        .then(response => setResult(response.data)) //setResult(response.data.results))
        .catch(reject => setResult({error:"These aren't the droids you're looking for"}))
    }

    useEffect(() => {
        fetchSW(resource, id);        
    }, [resource, id])
    


    return (
        <>
            <h1>{result.name}</h1>
            {Object.keys(result).map(
                (key, index) => <p>{key}: {result[key]}</p>
            )}
        </>
    )
}

export default Show

