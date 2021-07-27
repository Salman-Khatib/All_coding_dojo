

import React,{useState} from 'react';



const Form = (props) => {
        const [firstName,setFirstName] = useState("");
        const [lastName,setLastName] = useState("");
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const [confirmPassword , setConfirmPassword] = useState("");


    const userName = () => {
        return ;
    }
       
        
        



        const rrFunction = (e) => {
            setConfirmPassword(e.target.value);
            if (confirmPassword.length < 20 ){
                setConfirmPassword("password");
            }

        }



        const otherFunction = (e) => {
       setPassword(e.target.value);
            if (password.length < 20){
                setPassword("password");
            }

        }


        return(
            <>
            <div>
                <form onSubmit={userName}>
                    <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e) =>setFirstName(e.target.value)}/>
                    </div>
                    <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) =>setLastName(e.target.value)}/>
                    </div>
                    <div>
                    <label>email: </label>
                    <input type="text" onChange={(e) =>setEmail(e.target.value)}/>
                    </div>
                    <div>
                    <label>Password: </label>
                    <input type="password" onChange={otherFunction}/>
                    </div>
                    <div>
                    <label> confirm Password: </label>
                    <input type="password" onChange={rrFunction} value=""/>
                    </div>
                    <input type="submit" value="Submit THe form"/>
                </form>
                <p>Your form data</p>
                <p>first name: {firstName} </p>
                <p>last name:{lastName} </p>
                <p>email:{email} </p>
                <p>password:   {password} </p>
                <p>confirm password:    {confirmPassword} </p>
               
            </div>
          
               </> 

        )
}
export default Form;