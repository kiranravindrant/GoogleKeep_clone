import React,{useState} from 'react';
import Popper from '@mui/material/Popper';
import { TextareaAutosize } from '@mui/material';
import { SearchUserList } from '../services/dataservice';
import '../css/emailpopper.css'

export default function EmailListPopper(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const[userslist,setUserslist] =useState([])

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);


    let data = {
        searchWord: event.target.value,
      }

      SearchUserList(data).then((response)=>{

        
        setUserslist(response.data.data.details)

      }).catch(error=>console.log(error))
  }

      const fetchdata=(obj)=>{
  
        props.traceclick(obj)

 }



  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>

    <TextareaAutosize  onChange={handleClick}
         aria-label="minimum height"
        minRows={1}
        placeholder="Person or email to share with"
        style={{ width: 200 }}
        id="emailarea"
                                    
    />
      <Popper id={id} open={open} anchorEl={anchorEl}> 
{       
      userslist.slice(0,4).map((obj,index)=>{

        return(
        <div className="contact" onClick={()=>{fetchdata(obj)}} >    
          <p id="contactlist" key={index} >{obj.firstName}<br/>
          <span id="email">{obj.email}</span></p>

        </div>

        )
      })
        
}     
      </Popper>
    </div>
  );
}