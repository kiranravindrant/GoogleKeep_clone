import React from 'react'
import '../css/notecard.css'
import IconButton from '@mui/material/IconButton';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import Optionset from './optionset';
import Chip from '@mui/material/Chip';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function Notecard(props) {
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
                        <Optionset id={props.id} action="updatenotes"/>
                 
                    

                    </div>
                   
                </div> 







        </div>
    )
}

export default Notecard
