import axios from 'axios'
export const signUp=async(obj)=> {

    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp",obj)
    console.log(response)
    return response
}   

export const signin=async(obj)=> {

    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/login",obj)
    console.log(response)
    return response
}