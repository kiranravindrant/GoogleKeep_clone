import React from 'react'
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ColorPopper from './colorpallette';
import '../css/optionset.css';
import Reminder from './reminder';


function Optionset(props) {

const[date,setDate]=React.useState("")
const[time,setTime]=React.useState("")

 const listentoColorpopper=(colorcode)=>{

     if(props.action=="createnote")
     {
        props.listentoOptionset(colorcode)
     }else if(props.action=="updatenotes"){
        props.updatecolor(colorcode)
         
     }else if(props.action=="updatenote_in_dialog"){
        
         props.updatecolor(colorcode)
     }

 }
    const opencollab=()=>{
        if(props.action=="createnote"){
        props.opencollaborator()
    }else if(props.action=="updatenotes"){
        console.log("Please put  a method as props in parent to open collaberator")
    }
    }

const listentodate=(data)=>{
   setDate(data)
}
const listentotime=(data)=>{
    setTime(data)
}

const savebuttonclick=()=>{
    if(props.action=="createnote"){
    props.getreminder(date,time)
    console.log(date,time,"from options")
}else if(props.action=="updatenotes"){
    props.updatereminder(date,time)

}else if(props.action=="updatenote_in_dialog"){
    props.updatereminder(date,time)
}
}

const senseClick=()=>{
    if(props.action=="createnote"){
    props.archiveclick()
}else if(props.action=="updatenotes"){
    props.updatearchive()
}else if(props.action=="updatenote_in_dialog" ){

    props.updatearchive()
}

}

const handledelete=()=>{
    props.deletenote()
}




    return (
        <div className="options-container">
            <Reminder  listentotime={listentotime} listentodate={listentodate} listenClick={savebuttonclick}/>
            <IconButton onClick={opencollab} aria-label="refresh"><PersonAddAltOutlinedIcon fontSize='inherit'/></IconButton>
            <ColorPopper listentoColorpopper={listentoColorpopper}  id={props.id}/>              
            <IconButton aria-label="refresh"><ImageOutlinedIcon fontSize='inherit'/></IconButton>
            <IconButton id="arch" onClick={senseClick}aria-label="refresh"><ArchiveOutlinedIcon fontSize='inherit'/></IconButton>
        {    props.action!="createnote"? <IconButton onClick={handledelete}><DeleteOutlineOutlinedIcon/></IconButton> :console.log("")
                   
            
            
        }  
        
            
        </div>
    )

}

export default Optionset
