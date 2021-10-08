import React,{useState} from "react";
import "../css/signin.css";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import mainlogo from '../assets/glogo.jpg'
import {signin} from '../services/userservices';
const emailregex=/^\S+@\S+$/;
const passwordregex=/^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])(?!.*[!@#$%^&*].*[!@#$%^&*]).*$/;


function Signin(){


    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[erroremail,setErrorEmail]=useState(false)
    const[errorpassword,setErrorPassword]=useState(false)
    const[displayhelp,setHelpquote]=useState("")

    const takeEmail= function(event){
        // console.log(event.target.value)
        setEmail(event.target.value)

    }
    

    const takePassword=function(event){
        console.log(event.target.value)
        setPassword(event.target.value)

    }

    const validateAndSubmit=function(){
        let a=emailregex.test(email)
        let b=passwordregex.test(password)
        if(!b & !a){
            console.log("bothfieldswrong")
            setHelpquote("Please Enter Correct Email and Password")
            setErrorEmail(true)
            setErrorPassword(true)
        }else if(!a)
        {   console.log("wrongemailblock")
            setHelpquote("Please Enter Correct Email")
            setErrorEmail(true)
            setErrorPassword(false)
            
        }else if(!b)
        {   console.log("wrongpassblock")
            setErrorPassword(true)
        } else{
            setErrorPassword(false)
             setErrorEmail(false)
         }
       
         if(a ==true && b==true ){
            let obj={                
                email:email,
                password:password,
                service:"advance"
            }
            signin(obj).then((response)=>{
                console.log(response)
                localStorage.setItem("token",response.data.id)
            }).catch((error)=>{
                console.log(error)
            })

        }


         
         
    
    
    }



    return (

        <div className="main-outer-container">
            <div className="inner-container">   
            
                    <div className="header-logo">
                        <div className="logo">
                            <img src ={mainlogo} ></img>
                        </div>

                        <div className="header">
                            <h3>Sign in </h3>
                            <p>Use your Google Account</p>
                        </div>
                        
                    </div>


                    <div className="username">
                    <TextField  helperText={displayhelp} error={erroremail} onChange={takeEmail} fullWidth label="Email or Phone" id="fullWidth" />
                        
                    </div>
                    <span className="misc-links">Forgot Email?</span>

                    <div className="password">
                            <TextField  error={errorpassword} onChange={takePassword} 
                        fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"/>
                    </div>
                    <span className="misc-links">Forgot Password?</span>

                    <div className="signin-button"> <Button onClick={validateAndSubmit} variant="contained">Sign in</Button>

                    </div>
                    <span className="misc-links">Create Account</span>
            </div>

        </div>
    )
}
export default Signin