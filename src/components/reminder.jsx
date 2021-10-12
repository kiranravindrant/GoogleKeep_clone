import Popper from '@mui/material/Popper';
import  React,{useState} from 'react';
import '../css/reminder.css'
import IconButton from '@mui/material/IconButton';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import TextField from '@mui/material/TextField';





export default function Reminder(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'reminder-popper' : undefined;
    


    


    const handledate=(event)=>{
      console.log(event.target.value)
      props.listentodate(event.target.value)
      

    }

    const handletime=(event)=>{
      console.log(event.target.value)

      props.listentotime(event.target.value)
    }

    
    const handlesaveclick=()=>{
      setAnchorEl(false)
      props.listenClick()

    }



  return (
    <div>
         <IconButton  onClick={handleClick}aria-label="refresh"><AddAlertOutlinedIcon fontSize='inherit'/></IconButton>
     
           
        <Popper  id={id} open={open} anchorEl={anchorEl}>
         
              
            <div className="box">
           
            <TextField className="datebox" onChange={handledate}
            id="date"
            size="small"
            label="Set Date"
            type="date"
            defaultValue="2021-10-06"
            sx={{ width:165 }}
            InputLabelProps={{
            shrink: true,
            }}
      />

        <TextField className="timebox" onChange={handletime}
                size="small"
                id="time"
                label="Set Time"
                type="time"
                defaultValue="12:30"
                InputLabelProps={{
                shrink: true,
                }}
                inputProps={{
                step: 300, // 5 min
                }}
                sx={{ width: 165 }}
            />

                <button onClick={handlesaveclick}>Save</button>
            </div>


                
                                                        

        </Popper>  




    </div>
  );
}
