import React from 'react'
import '../css/header.css'
import RefreshIcon from '@mui/icons-material/Refresh';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import  SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import keeplogo from '../assets/keep_logo.png'

    function Header() {
    return (
        <div>
            <header className="appbar"> 

                <div className="header-f-inner">

                        <div className="m-menu">
                            <label><IconButton aria-label="menu"><MenuIcon color="action"/></IconButton></label>
                        </div>
                            <div className="logo-title">

                                <img id="mainlogo" src={keeplogo}></img>
                                    <p style={{fontFamily:"sans-serif"},{fontWeight:'600'}}>Keep</p>

                            
                                
                            </div>
                
          
        
                    <div className="search-bar">
                        <IconButton aria-label="search"><SearchIcon color="action"/></IconButton>
                
                            <input id="searchbar" type="text" placeholder="Search"/>
                
                     </div>

                        <div className="app-menu">
                        
                            <label className="iconset"><IconButton aria-label="refresh"><RefreshIcon color="action"/></IconButton></label>
                            <label className="iconset"><IconButton aria-label="listview"><DnsOutlinedIcon color="action"/></IconButton></label>
                            <label className="iconset"><IconButton aria-label="settings"><SettingsOutlinedIcon color="action"/></IconButton></label>
                            <label className="iconset"><IconButton aria-label="apps" ><AppsRoundedIcon/></IconButton></label>
                            <label className="iconset"><IconButton aria-label="profile"><AccountCircleRoundedIcon/></IconButton></label> 
                            

                        </div>


                </div>


            </header>
        </div>
    )
}

export default Header
