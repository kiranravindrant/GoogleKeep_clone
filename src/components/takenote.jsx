import React,{useState} from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import '../css/takenote.css';
import IconButton from '@mui/material/IconButton';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import TextareaAutosize from '@mui/material/TextareaAutosize';

import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import Button from '@mui/material/Button';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Optionset from "./optionset";
import {addNotes} from '../services/dataservice'
import Collaberators from "./collaberators";
import Chip from '@mui/material/Chip';  
import AccessTimeIcon from '@mui/icons-material/AccessTime';





function Takenote() {

const[hide_note_editor,setView]=useState(true)
const[title,setTitle]=useState("")
const[description,setDescription]=useState("")
const[color,setColor]=useState("")
const[hide_collab,setViewCollab]=useState(true) 
const[collab_array,setCollabarray]=useState([])
const[reminder,setReminder]=useState("")
const[archive,setArchive]=useState(false)


const listentoOptionset=(data)=>{
    console.log(data)

    setColor(data)


}

    const changeview=()=>{
        console.log("hai")
        setView(false)

    }    
    const handleClickAwayEvent = ()=>{

            setView(true)

    }

    const closebutton=()=>{

            setView(true)
        
            const data = new FormData();
            data.append("title", title);
            data.append("description", description);
        
        
    
            data.append("color",color);
            
            
            data.append("collaberators", JSON.stringify(collab_array));
            data.append("reminder",[reminder]);
            data.append("isArchived",archive);






            addNotes(data).then((response)=>{
                console.log(response)
            }).catch((error)=>{
                console.log(error)
            })


        }     

    const taketitle=(event)=>{
    console.log(event.target.value)
    setTitle(event.target.value)
    }

    const takedescription=(event)=>{
    console.log(event.target.value)
    setDescription(event.target.value)
    }

     const  opencollaborator=()=>{

        setViewCollab(false)

    }

    const closecollaborator=()=>{
        
        setViewCollab(true)
 
    }
    const listentoarray=(data)=>{
        console.log(data,"data recieved in takenote2")
        setCollabarray(data)

    }

    const getreminder=(date,time)=>{

        console.log(date,time, " date and time recieved in takenote")
        setReminder(date + "T" + time)
       
    }

    const archiveclick=()=>setArchive(!false)

    const handleDelete = () => {
        setReminder("")
      };

    return (
        <ClickAwayListener onClickAway={handleClickAwayEvent}>
        <div >
            
                
                {hide_note_editor? 
                        
                <div onClick={changeview} className="takenote-bar">
                    
                    <p style={{paddingLeft:'10px'}}>Take a note...</p>
                    <div className="options-icons">
                    <IconButton aria-label="refresh"><AssignmentTurnedInOutlinedIcon color="action"/></IconButton>
                    <IconButton aria-label="refresh"><BrushOutlinedIcon color="action"/></IconButton>
                    <IconButton aria-label="refresh"><ImageOutlinedIcon color="action"/></IconButton>          
                    </div>

                </div> : hide_collab?


                
                <div className="takenote-editor" style={{backgroundColor:color}} >
                       
                    <div className="notetitle">
                    <TextareaAutosize
                    aria-label="minimum height"
                    minRows={2}
                    placeholder="Title."
                    onChange={taketitle}
                    value={title}
                    style={{ width: 545 }}
                    id="textarea"
                    />
                    <IconButton aria-label="refresh"><PushPinOutlinedIcon fontSize="medium" color="action"/></IconButton> 
                    </div>


                    <TextareaAutosize
                    aria-label="minimum height"
                    minRows={1}
                    placeholder="Take a note "
                    style={{ width: 540 }}
                    onChange={takedescription}
                    value={description} 
                    id="textarea"                  
                    />

                <div className="collaborators_avatar">
                    { reminder!=""?
                    <div> <Chip icon={<AccessTimeIcon/>}  size="small"label={reminder.slice(0,10)+" "+reminder.slice(11)} onDelete={handleDelete} />
                    </div>:console.log("Reminder Empty ")}
                
                    {collab_array.map((obj,index)=>(
                            
                                <div  key={index}id={obj.id} className="userpic_ct"></div>
                                
                            
            

                    )) 
                    
                        }
                </div>
                    <div className="option-set" >
                        <Optionset action="createnote" listentoOptionset={listentoOptionset}   opencollaborator={opencollaborator}  getreminder={getreminder} archiveclick={archiveclick} />
                      
                    <IconButton  aria-label="refresh"><UndoOutlinedIcon fontSize='inherit'/></IconButton>
                    <IconButton aria-label="refresh"><RedoOutlinedIcon fontSize='inherit'/></IconButton>
                    <Button  onClick={closebutton} className="close">Close</Button>

                    </div> 
               
                </div> :
                    <Collaberators closewindow={closecollaborator} listentoarray={listentoarray}/>
                    
                
                }

           
               

        </div>
        </ClickAwayListener>
    )
}

export default Takenote
