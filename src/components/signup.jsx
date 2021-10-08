import React from 'react'
import "../css/signup.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import mainlogo from '../assets/glogo.jpg'
import gsidepic from '../assets/gsidepic.jpg'
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import {useState} from "react";
import {signUp} from '../services/userservices';
const firstNameRegex = /^[A-Z][a-zA-Z]{2,}$/;
const lastNameRegex = /^[A-Z][a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.{8,}$)(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[!@#$%^&*])(?!.*[!@#$%^&*].*[!@#$%^&*]).*$/;
const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 function Signup() {

    const[firstname,setFirstName]=useState("")
    const[lastname,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[cpassword,setConfirmBox]=useState("")
    const[errorfirstname,setErrorFirstName]=useState(false)
    const[errorlastname,setErrorLastName]=useState(false)
    const[erroremail,setErrorEmail]=useState(false)
    const[errorpassword,setErrorPassword]=useState(false)
    const[errorconfirm,setErrorConfirm]=useState(false)
    const[displayhelp,setHelpquote]=useState("")
    const[displaypassrule,setPassruleQuote]=useState("")
    


    const takeFirstname= function(event){

        setFirstName(event.target.value)
    }

    const takeLastname=function(event){

        setLastName(event.target.value)
    }

    const takeEmail=function(event){

        setEmail(event.target.value)
    }

    const takePassword=function(event){

        setPassword(event.target.value)
    }
    const confirmBox=function(event){

        setConfirmBox(event.target.value)
    }
    
    const validateAndSubmit=function(){
        
        let RegFname=firstNameRegex.test(firstname)
        let RegLname=lastNameRegex.test(lastname)
        let RegPass=passwordRegex.test(password)
        let RegEmail=emailRegex.test(email)

       if(!RegFname & !RegLname & !RegPass &!RegEmail){
           setErrorFirstName(true)
           setErrorLastName(true)
           setErrorEmail(true)
           setErrorPassword(true)
           setPassruleQuote("Invalid password combinations")
        }else if(!RegFname){
            setErrorFirstName(true)
        }else if(!RegLname){
            setErrorLastName(true)

        }else if(!RegPass){
            setPassruleQuote("Invalid password combinations")
            setErrorPassword(true)
        }else if(!RegEmail){
            setErrorEmail(true)
        }
        else{
            setErrorFirstName(false)
           setErrorLastName(false)
           setErrorEmail(false)
           setErrorPassword(false)
        }

        
        if(password != cpassword){
            setErrorConfirm(true)
            setHelpquote("Passwords do not match")

        }else{
            setErrorConfirm(false)
            setHelpquote("")
            setPassruleQuote("")
        }
        if(RegFname ==true && RegLname ==true &&  RegPass==true && RegEmail ==true ){
            let obj={
                firstName:firstname,
                lastName:lastname,
                email:email,
                password:password,
                service:"advance"
            }
            signUp(obj).then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            })

        }


    }



    return (
        <div className="main-outer-container">
            
            <div class="inner-container">
                    <div className="container-r"> 
                        <div className="col-left">
                        <img id="logo" src ={mainlogo} ></img>

                            <h3>Create your Google Account</h3>
                            <div className="fullname">
                            <TextField error={errorfirstname}  onChange={takeFirstname} 
                                    label="First name"
                                    id="outlined-size-small"
                                    defaultValue=""
                                    size="small"
                                    />
                            <span className="lastname">
                                <TextField
                                    error={errorlastname} onChange={takeLastname}
                                    label="Last name"
                                    id="outlined-size-small"
                                    defaultValue=""
                                    size="small"
                                    
                                    />  
                            </span>
                            </div>

                            <div className="username">
                            <TextField
                                    error={erroremail}
                                    onChange={takeEmail}
                                    label="Username"
                                    id="outlined-size-small"
                                    defaultValue=""
                                    size="small"
                                    style={{width:"450px",margintop:'12px'}}
                                    />
                                <p>You can use letters,numbers & periods</p>

                                <span className="misc-links">Use my current Email address instead</span>
                            </div>

                            <div className="password-fields">
                            <TextField
                                    helperText={displaypassrule}
                                    error={errorpassword}
                                    onChange={takePassword}
                                    label="password"
                                    id="outlined-password-input"
                                    defaultValue=""
                                    size="small"
                                    type="password"
                                    />
                            <span className="confirm">
                                <TextField
                                    helperText={displayhelp}
                                    error={errorconfirm}
                                    onChange={confirmBox}
                                    label="confirm"
                                    id="outlined-password-input"
                                    defaultValue=""
                                    size="small"
                                    type="password"
                                    
                                    />  
                            </span>
                            <p>Use 8 or more characters with a mix of letters, numbers & symbols</p>

                       
                            <FormGroup>                   
                                    <FormControlLabel control={<Checkbox/>} label="Show Password" />
                            </FormGroup>
                        

                            </div>

                            <span className="misc-links">Sign in  instead</span>
                            <Button onClick={validateAndSubmit} variant="contained" id="next-button">Next</Button>

                        </div>
                        
                 

                       

                            <div className="col-right">
                                    
                            <img id="sidepic" src ={gsidepic} ></img>
                            <p>One account. All of Google working for you.</p>

                            </div>
                    




                    </div>


            </div>
            <div className="footer">
                    <div>Help</div>
                    <div>Privacy</div>
                    <div> Terms</div>
            </div>
        </div>
    )


}
export default Signup
