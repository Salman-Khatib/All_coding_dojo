

import React,{useState} from 'react';


const UserForm = (props) => {

    const [firstName,setFirstName] = useState("");
    const [firstNameError,setFirstNameError] = useState("");
    const [lastName,setLastName] = useState("");
    const [lastNameError,setLastNameError] = useState("");
    const [email,setEmail] = useState("");
    const [emailError,setEmailError] = useState("");
    const [password,setPassword] = useState("");
    const [passwordError,setPasswordError] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");


    var newUser ={
        firstNames:"",
        lastNames:"",
        emails:"",
        passwords:"",
        confirmPasswords:""
    }

    const createUser = (e) =>{
        e.preventDefault();
        newUser.firstNames = firstName;
        newUser.lastNames = lastName;
        newUser.emails = email;
        newUser.confirmPasswords = confirmPassword;
        
         
    }

    const firstN = (e) =>{
        setFirstName(e.target.value);
        e.target.value.length < 2 ? setFirstNameError("first name must be atleast 2 characters") : setFirstNameError("");
        if(e.target.value.length === 0){setFirstNameError("")}
    }
    const lastN = (e) =>{
        setLastName(e.target.value);
        e.target.value.length < 2 ? setLastNameError("last name must be atleast 2 characters") : setLastNameError("");
        if(e.target.value.length === 0){setLastNameError("")}
    }
    const emailN = (e) => {
        setEmail(e.target.value);
        e.target.value.length < 5 ? setEmailError("email must be atleast 5 characters") : setEmailError("");
        if(e.target.value.length === 0){setEmailError("")}

    }
    const passwordN = (e) => {
        setPassword(e.target.value);
        e.target.value.length < 8 ? setPasswordError("password must be atleast 8 charachters") : setPasswordError("");
        if(e.target.value.length === 0){setPasswordError("")}
    }
    const confirmN = (e) => {
        setConfirmPassword(e.target.value);
        e.target.value.length < 8 ? setPasswordError("password must be atleast 8 charachters") : setPasswordError("");
        if(e.target.value.length === 0){setPasswordError("")}

    }



    return (
        <>
        
        <form onSubmit={createUser}>
            <div>
            <label>First Name : </label>
            <input type="text" onChange={firstN}/>
            {
                firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : ""
            }
            </div>
            <div>
            <label>Last Name : </label>
            <input type="text" onChange={lastN}/>
            {
                lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : ""
            }
            </div>
            <div>
            <label>email : </label>
            <input type="text" onChange={emailN}/>
            {
                emailError ? <p style={{color:'red'}}>{emailError}</p> : ""
            }
            </div>
            
            <div>
            <label>password : </label>
            <input type="password" onChange={passwordN}/>
            {
                 passwordError  ? <p style={{color:'red'}}>{passwordError}</p> : ""
                 
            }
            {
                password != confirmPassword ?
                    <p style={{color:'red'}}>password and cofirm password should be the same</p> : ""
                
            }
            </div>
            <div>
            <label>confirm password : </label>
            <input type="password" onChange={confirmN}/>
            </div>
            <input type="submit" value="Submit the Form"></input>
        </form>
        <h1>Hello {newUser.firstNames}</h1>

        </>

    )
}

export default UserForm;