
import '../css/keep.css'
import React,{useState,useEffect} from "react";
import Takenote from './takenote';
import MiniDrawer from './drawer';
import Notecard from './notecard';
import {getNotes} from '../services/dataservice'
import Header from './header';
import NoteDialog from './NotecardDialog';


function Keep() {

const[notelist,setNoteList]=useState([])
const [open, setDialogOpen] = React.useState(false);
const[notedata,setNoteData]=useState({})

  useEffect(()=>{

  getNotes().then((response)=>{
    let serverdata=response.data.data.data
    console.log("This is from server",serverdata)

    let maparray=serverdata.filter(function(note){
      if(note.isArchived==false && note.isDeleted==false){
        return note
      }
    })
    setNoteList(maparray)    
 

}).catch((error)=>{
    console.log(error)
})



 },[]) 



 const archivednotes=()=>{
  getNotes().then((response)=>{
    let serverdata=response.data.data.data
    console.log("This is from server",serverdata)

    let maparray=serverdata.filter(function(note){
      if(note.isArchived==true && note.isDeleted==false){
        return note
      }
    })
    setNoteList(maparray)    
 

}).catch((error)=>{
    console.log(error)
})
 }


 const trashednotes=()=>{
  getNotes().then((response)=>{
    let serverdata=response.data.data.data
    console.log("This is from server",serverdata)

    let maparray=serverdata.filter(function(note){
      if(note.isArchived==false && note.isDeleted==true){
        return note
      }
    })
    setNoteList(maparray)    
 

}).catch((error)=>{
    console.log(error)
})
 }


  const shownotes =()=>{
    getNotes().then((response)=>{
      let serverdata=response.data.data.data
      console.log("This is from server",serverdata)
  
      let maparray=serverdata.filter(function(note){
        if(note.isArchived==false && note.isDeleted==false){
          return note
        }
      })
      setNoteList(maparray)    
   
  
  }).catch((error)=>{
      console.log(error)
  })


}






 const handleClick = (obj) => {
   console.log("clicked note",obj)
  setDialogOpen(true);
  setNoteData(obj)

  console.log("value is",open)
};

const closeClick=()=>{
  setDialogOpen(false);
}


 console.log(notelist,"value of notelist check")
  return (
    <div className="main-container">
        <Header/>
        <hr/>

        <section className="main-body">
          <MiniDrawer listenClickArchive={archivednotes}  listenClickDeleted={trashednotes}  listenClicknotes={shownotes} />
         
          <div className="inner-container-b">
              <div className="left-menu">
              

              </div>

              <div className="workspace">
                
                
              <NoteDialog open={open}   closeClick={closeClick} notedata={notedata}  showNotes={shownotes} />



                <Takenote  showNotes={shownotes}/>

                <div className="note-cards">

                  {notelist.map((obj,index)=>{
                    return (     
                                                                    
                      <Notecard key={index} title={obj.title} description={obj.description} color={obj.color} collaborators={obj.collaborators} reminder={obj.reminder} id={obj.id} noteclick={()=>handleClick(obj) } showNotes={shownotes}  isDeleted={obj.isDeleted}  isArchived={obj.isArchived}  />
                   
                      )


                  })

                  }
                  
                                                                      

                
                </div>
              
                <div className="icon-bar">
              

                </div>
                  

              </div>


          </div>


        </section>

    </div>
  )
}

export default Keep
