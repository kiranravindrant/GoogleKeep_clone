import React,{useState} from "react";
import "../css/dialog.css";
import { deleteNotes, updateNotes } from "../services/dataservice";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Optionset from '../components/optionset'
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { changeColor } from "../services/dataservice";
import { reminderUpdate } from "../services/dataservice";
import { archiveUpdate } from "../services/dataservice";
import Chip from '@mui/material/Chip';  
import AccessTimeIcon from '@mui/icons-material/AccessTime';
export default function NoteDialog(props) 
{
  
  const[title,updateTitle]=useState("");
  const[description,updateDescription]=useState("")
  const[newcolor,updateColor]=useState("")
  const[newreminder,updateReminder]=useState("")
  const[archive,setArchive]=useState(false)

React.useEffect(() => {
  console.log(props.notedata)
  console.log(props.notedata.reminder,"reminder here")
  updateColor(props.notedata.color)
  updateTitle(props.notedata.title)
  updateDescription(props.notedata.description)
  setArchive(props.notedata.isArchived)
}, [props])

let noteId=props.notedata.id


  const handleClose = () => {

    props.closeClick()

   

    const data = new FormData();
    data.append("title", title);
    data.append("description", description);
    data.append("noteId",noteId)


              if(title | description !=""){

                updateNotes(data).then((response)=>{
                  console.log(response)
              }).catch((error)=>{
                  console.log(error)
              })
            }

                let noteData = {
                  noteIdList: [noteId],
                  color: newcolor
                }
              
                changeColor(noteData).then((response)=>{
                  console.log(response)
                }).catch((error)=>{
                  console.log(error)
                })

                
                let reminderdata={
                  noteIdList: [noteId],
                  reminder:newreminder
  
                }

                reminderUpdate(reminderdata).then((response)=>{
                  console.log("updatetime",response)
                }).catch((error)=>{
                  console.log(error)
                })

                let archivestatus = {
                  noteIdList: [noteId],
                  isArchived: archive
                };


                 archiveUpdate(archivestatus).then((response)=>{
                  console.log("archivestatus",response)
                }).catch((error)=>{
                  console.log(error)
                })

                props.showNotes()
              
              }     

             
  

  const updatetitle=(e)=>{

    updateTitle(e.target.value)
  }

  const updatedescription=(e)=>{

    updateDescription(e.target.value)
  }
  
  const updatecolor=(data)=>{

    updateColor(data)
    console.log("setting new color as",data)
   
  }

  const updatereminder=(date,time)=>{

    updateReminder(date + "T" + time)

  }
  const handleDelete = () => {
    updateReminder("")
  };

  const  togglearchive=()=>{
      console.log(" archive status updating...")
    setArchive(!false)
  }

  const deleteNote = ()=>{
    console.log(" Deleting notes...")
 

    let note = {
      noteIdList: [noteId],
      isDeleted:true
    }

    deleteNotes(note).then((response)=>{
      console.log("deletestatus",response)
      props.closeClick()
      props.showNotes()


    }).catch((error)=>{
      console.log(error)
    })





  }

  return (
    
    <div>
        <Dialog 
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">


        
        <DialogContent style={{backgroundColor:newcolor}} > 
      
        <div className="updatenote-editor"  >
                      
                      <div className="notetitle">
                      <TextareaAutosize
                      aria-label="minimum height"
                      minRows={2}
                      placeholder={props.notedata.title}
                      onChange={updatetitle}
                      value={title}
                      style={{ width: 545 }}
                      id="textarea"
                      />
                      <IconButton aria-label="refresh"><PushPinOutlinedIcon fontSize="medium" color="action"/></IconButton> 
                      </div>
  
  
                      <TextareaAutosize
                      aria-label="minimum height"
                      minRows={1}
                      placeholder={props.notedata.description} 
                      style={{ width: 540 }}
                      onChange={updatedescription}
                      value={description}
                      id="textarea"                  
                      />
                      </div> 
                            
            
                      { newreminder!=""?
                    <div> <Chip icon={<AccessTimeIcon/>}  size="small" label={newreminder.slice(0,10)+" "+newreminder.slice(11)} onDelete={handleDelete} />
                    </div>:console.log("Reminder Empty ")}
                
                    
                        
              
                    <div className="option-set" >
                      <Optionset action="updatenote_in_dialog" updatecolor={updatecolor} updatereminder={updatereminder} updatearchive={togglearchive} deletenote={deleteNote}  />
                        
                      
                    <IconButton id="nullbuttons"  aria-label="refresh"><UndoOutlinedIcon fontSize='inherit'/></IconButton>
                    <IconButton id="nullbuttons"  aria-label="refresh"><RedoOutlinedIcon fontSize='inherit'/></IconButton>


                    </div> 
                    
              
              <DialogActions  >
              
                <Button onClick={handleClose} autoFocus>
                  close
                </Button>
              </DialogActions>
              </DialogContent>
            </Dialog>

    </div>
    
    
    )
  
}

