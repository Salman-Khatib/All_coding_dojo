
import React, {Component} from 'react';

class PersonCard extends Component {
    render(){
        const {firstName,lastName,age,hairColor,firstName2,lastName2,age2,hairColor2,firstName3,lastName3,age3,hairColor3,firstName4,lastName4,age4,hairColor4}=this.props
        return(
            <>
            <h1>{firstName} {lastName}</h1> 
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <hr></hr>
            <h1>{firstName2} {lastName2}</h1>
            <p>Age: {age2}</p>
            <p>Hair Color: {hairColor2}</p>
            <hr></hr>
            <h1>{firstName3} {lastName3}</h1>
            <p>Age: {age3}</p>
            <p>Hair Color: {hairColor3}</p>
            <hr></hr>
            <h1>{firstName4} {lastName4}</h1>
            <p>Age: {age4}</p>
            <p>Hair Color: {hairColor4}</p>
            <hr></hr>
            </>
        );
    }
}


export default PersonCard;

