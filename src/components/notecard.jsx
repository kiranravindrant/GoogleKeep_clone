import React from 'react'
import '../css/notecard.css'
import IconButton from '@mui/material/IconButton';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Optionset from './optionset';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { deleteNotes } from "../services/dataservice";
import { archiveUpdate } from '../services/dataservice';
import { changeColor } from '../services/dataservice';
import { reminderUpdate } from '../services/dataservice';  
import { useState } from 'react';


export default  function Notecard(props) {

    const[newcolor,updateColor]=useState("")
    const[newreminder,updateReminder]=useState(props.reminder)
    const[deleted,setDelStatus]=useState(props.isDeleted)
 
    let noteId=props.id  






    const deleteNote = ()=>{

      setDelStatus(!deleted)
    }

    


    React.useEffect(() => {
      if(deleted!=props.isDeleted){
      deleteNotes(note).then((response)=>{
        console.log("deletestatus",response)
        props.showNotes()
      }).catch((error)=>{
        console.log(error)
      })    
    }   

 
      
    }, [deleted])



        let note = {
          noteIdList: [noteId],
          isDeleted:deleted
        }
        
    

    const  togglearchive=()=>{
      if(props.isArchived!=true){
        console.log(" archive status updating...")
        let archivestatus = {
            noteIdList: [noteId],
            isArchived: true
          };


           archiveUpdate(archivestatus).then((response)=>{
            console.log("archivestatus",response)
            props.showNotes()
          }).catch((error)=>{
            console.log(error)
          })
        }else{
          console.log(" archive status updating...")
            let archivestatus = {
                noteIdList: [noteId],
                isArchived: false
              };


           archiveUpdate(archivestatus).then((response)=>{
            console.log("archivestatus",response)
            props.showNotes()
          }).catch((error)=>{
            console.log(error)
          })



        }



          
        


    }

    const updatecolor=(colorcode)=>{
        console.log("color code",colorcode,"recieved in setstate method")
        updateColor(colorcode)
        console.log("aftersetting",newcolor)
       
     

        }

        let noteData = {
          noteIdList: [noteId],
          color: newcolor
        }



        React.useEffect(() => { 
      if(newcolor!=""){
        changeColor(noteData).then((response)=>{
          console.log(response)
          props.showNotes()
      }).catch((error)=>{
        console.log(error)
      })
       
      }
          
         
        }, [newcolor])

       

    
      const updatereminder=(date,time)=>{
    
        updateReminder(date + "T" + time)
          
      }
     
      let reminderdata={
        noteIdList: [noteId],
        reminder:newreminder

      }

      React.useEffect(() => {
        if(newreminder!=props.reminder){
        reminderUpdate(reminderdata).then((response)=>{
          console.log("updatetime",response)
          props.showNotes()
        }).catch((error)=>{
          console.log(error)

        })
      }
        
      },[newreminder])




        

       
      

     
    

       
    
      




      
      







    return (
        <div> 
           <div  className="notecard-editor" style={{backgroundColor:props.color}}>
                <div onClick={()=>(props.noteclick())}  className="textfield_only">
                    <div className="cardtitle">
                    <IconButton id="pin" aria-label="pin"><PushPinOutlinedIcon fontSize="small" color="action"/></IconButton>
                    <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    placeholder=""
                    style={{ width: 206 }}
                    value={props.title}
                    id="textarea-note"
                    />

                   
                    
                    </div>
                   

                    <TextareaAutosize
                    aria-label="minimum height"
                    minRows={1}
                    placeholder=""
                    style={{ width: 206 }}
                    value={props.description}
                    id="textarea-note"
                    
                    /> 
                </div>

                    <div className="collaborators_avatar_notecard">
                        {   
                            props.reminder.map((obj,index)=>(<div id={index}> <Chip  icon={<AccessTimeIcon/>}  size="small"label={obj.slice(0,15)} /></div>))

                        }
                    { props.collaborators.map((obj)=>(
                            
                                <div id={obj.id} className="userpic_cn"></div>
                                
                            
            

                    )) 
                    
                    }
                    </div>
                    
                    <div className="note-option-set" >
                        <Optionset id={props.id} action="updatenotes" deletenote={deleteNote} updatearchive={togglearchive} updatecolor={updatecolor} updatereminder={updatereminder}   />
                 
                    

                    </div>
                   
                </div> 







        </div>
    )
}


