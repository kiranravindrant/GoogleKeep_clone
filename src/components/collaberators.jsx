import React,{useState}from 'react'
import "../css/collaberators.css"
import Button from '@mui/material/Button';
import EmailListPopper from './emailpopper';
function Collaberators(props) {

const [collab_array, setCollabarray] =useState([]);

    const closewindow=()=>{
        console.log("cancel/save clicked")
        props.closewindow()
    }

    const popperEvent=(obj)=>{
      
        setCollabarray([...collab_array, obj]);  
        console.log(collab_array)
    }

const sendarray=()=>{
    props.listentoarray(collab_array)
    console.log("data to send", collab_array)
    props.closewindow()

}

  

    return (
        <div>
            
            <div className="collab_editor">
                <div className="title">
                    <h3>Collaborators</h3>
                    <hr id="hr1"/>
                </div>
                
                <div className="main">
                        <div className="owner">
                            <div className="userpic">

                            </div>

                            <div className="emailid">
                                    <p style={{fontWeight:'500',fontSize:'14px'}}>Kiran Ravindran<span style={{fontStyle:'italic',fontSize:'small'}}>(Owner)<br/></span>
                                    <span style={{fontWeight:'300',fontSize:'14px',marginTop:'0px'}}>kiranravindrant@gmail.com</span></p>
                            
                            
                                
                            </div>
                        
                        
                        </div>
                        
                                
                                    {  collab_array.map((obj,index) => (
                                        <div className="emailid_c" >
                                            <div  key={index}id={obj.id} className="userpic_c"></div>

                                            <p id="username">{obj.firstName} <br/><span id="emailid">{obj.email}</span></p>
                                        </div>))    }




                        <div className="collaberators">
                            <div className="userpic_c">
                                
                            </div>

                            <div className="popper_emailid">
                           
                                 <EmailListPopper traceclick={popperEvent}/>

                            </div>

                        </div>
                </div>

                <div className="footer">
                    <div className="scbuttons">
                    <Button onClick={closewindow}  id="cancel">Cancel</Button>
                    <Button onClick={sendarray}id="save">Save</Button>

                    </div>
                   
                </div>


            </div>
            
        </div>
    )
}

export default Collaberators
