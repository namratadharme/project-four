
import React, { useEffect, useState } from "react";
import './login.css';

    function Loginpage(){
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [enable, setEnable] = useState('true')


    function handleInput1(e){
     setUsername(e.target.value)
     }
    
    function handleInput2(event){
     setPassword(event.target.value)
     }
    function submitBtn(){
       
    }

    useEffect(()=>{
        if(username != "" && password != ""){
            setEnable(true)
        }
        else{
            setEnable(false)
        }   
    },[username, password])

    return(
        <>
        <div id="container">
        <h1>Log-In</h1>
        <span>Username</span>
        <input className="inputField" type="text" onChange={handleInput1}></input>
        <span>Password</span>
        <input className="inputField" type="password" onChange={handleInput2}></input>
        <button id="sub-btn" disabled={!enable} onClick={submitBtn}>Submit</button>
        </div>
        </>
    )
}

export default Loginpage