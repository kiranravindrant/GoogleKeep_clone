import  React,{useState} from 'react';
import Popper from '@mui/material/Popper';
import '../css/colorpallette.css'
import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import IconButton from '@mui/material/IconButton';




export default function ColorPopper(props) {

    const [anchorEl, setAnchorEl] = useState(null);
    const handleClick = (event) => {
      setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'color-popper' : undefined;

  const colorArray = [
    { color: "#fafafa" },
    { color: "#ef9a9a" },
    { color: "#ffcc80" },
    { color: "#fff59d" },
    { color: "#dcedc8" },
    { color: "#b2dfdb" },
    { color: "#e0f7fa" },
    { color: "#4fc3f7" },
    { color: "#b39ddb" },
    { color: "#f8bbd0" },
    { color: "#a1887f" },
    { color: "#cfd8dc" },
  ];



const colorpicked=(event)=>{
  console.log(event.target.id)
props.listentoColorpopper(event.target.id)
 

}


  
      

  return (
    <div>

     
<IconButton onClick={handleClick}  aria-label="refresh"><PaletteOutlinedIcon fontSize='inherit'/></IconButton>
        <Popper  id={id} open={open} anchorEl={anchorEl}>
          <div className="c-row " >
              {

                colorArray.map((obj)=>{

                  return(
                    <div className="palette" id={obj.color}   style={{backgroundColor:obj.color}} onClick={colorpicked} />
                    
                  )

                })

                  
              }

                 

          </div>

        </Popper>  




    </div>
  );
}
