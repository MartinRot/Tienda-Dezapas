import React, { useState } from 'react'

import { AppBar, IconButton, makeStyles, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box } from '@mui/system';
import logo from './logo.png'
import CartWidget from '../CartWidget/CartWidget';
import Profile from '../Profile/Profile';


const NavBar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const openMenu = Boolean(anchorEl);
  
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget)
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (

    <AppBar elevation={0} position='sticky' sx={{backgroundColor:'white'}}>
      <Toolbar>

        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%", alignItems: "center"}} component='div'>
          
          {/* Logo */}
          <Box sx={{padding: "15px"}}>   
            <img src={logo} alt="" width={"140px"} height={"106px"}/>
          </Box>

          {/* Links */}
          <Box sx={{display: "flex"}}>
            <Typography 
              sx={{marginRight:'20px', cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}} 
              aria-controls='basic-menu' 
              aria-haspopup="true" 
              aria-expanded={openMenu ? "true" : undefined} 
              onClick={handleClick}
            >
              Zapatillas
            </Typography>
            {/* Dropdown Items */}
            <Menu 
              id='basic-menu'
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Hombre</MenuItem>
              <MenuItem onClick={handleClose}>Mujer</MenuItem>
              <MenuItem onClick={handleClose}>Niños</MenuItem>
              <MenuItem onClick={handleClose}>Novedades</MenuItem>
              <MenuItem onClick={handleClose}>Todo</MenuItem>
            </Menu>


            <Typography sx={{marginRight:'20px', cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}}>
              Lanzamiento
            </Typography>

            <Typography sx={{marginRight:'20px', cursor:'pointer', color:'red', fontWeight:'800'}}>
              Sales
            </Typography>

            <Typography sx={{marginRight:'20px', cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}}>
              Rastrea tu pedido
            </Typography>

          </Box>

          {/* Button links */}
          <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>

            <Profile />           

            <CartWidget />              
            
          </Box>



        </Box>
        
   
      </Toolbar>      
    </AppBar> 

  )
}

export default NavBar
