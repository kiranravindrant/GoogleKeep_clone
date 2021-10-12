import axios from "axios";
let header = { headers: { 'Authorization': localStorage.getItem('token') } }

export const addNotes=async(obj)=>{
  let configFile = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: localStorage.getItem("token"),
    },
  };




    let response = await axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes",obj,configFile)
    console.log(response)
    return response
}


export const getNotes=async()=>{

    let response = await axios.get("http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList",header)
    console.log(response)
    return response
}

export const SearchUserList = (data) => {
    let response =  axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/user/searchUserList",
      data,
      header
    );
    return response;

  };


  export const updateNotes=(data)=>{

    let response=axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes",
      data,header

    );
      return response
  }

  export const changeColor = (data) => {
    
    let response=axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes",data,header
    );
    return response

  }

  export const reminderUpdate = (data) => {

    let response=axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/addUpdateReminderNotes",data,header
    );

    return response


  }


  export const archiveUpdate = (data) => {

    let response=axios.post(
      "http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes",data,header
    );

    return response


  }



export const deleteNotes= (data) =>{

let response=axios.post("http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes",data,header); 
return response

}


  

 