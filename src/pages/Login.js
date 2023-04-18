import React from 'react'
import {auth,provider} from "../firebase"
import { signInWithPopup } from "firebase/auth";

function login() {
  const signinwithgoogle =()=>{
    signInWithPopup(auth,provider).then((result)=>{
      
    })
  };

  return (
    <div className='loginpage'>
      <p>Sign In With Google to Continue</p>
    <button className='googlebtn'>Sign In With Google</button>
    </div>
  )
}

export default login