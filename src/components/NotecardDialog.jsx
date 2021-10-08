import React,{useState} from "react";
import "../css/dialog.css";
import { updateNotes } from "../services/dataservice";
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
export default function NoteDialog(props) 
{
  
  const[title,updateTitle]=useState("");
  const[description,updateDescription]=useState("")
  const[newcolor,updateColor]=useState("")

React.useEffect(() => {
  console.log(props.notedata)

  updateColor(props.notedata.color)
}, [props])




  const handleClose = () => {

    props.closeClick()

    let noteId=props.notedata.id

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
                            
            

                
                    
                        
              
                    <div className="option-set" >
                        <Optionset action="updatenote_in_dialog" updatecolor={updatecolor} />
                        
                      
                    <IconButton  aria-label="refresh"><UndoOutlinedIcon fontSize='inherit'/></IconButton>
                    <IconButton aria-label="refresh"><RedoOutlinedIcon fontSize='inherit'/></IconButton>


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

