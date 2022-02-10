import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./styles.css";

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

        <Box sx={{
          display: "flex", 
          justifyContent: "space-between", 
          width: "100%", 
          alignItems: "center"}} 
          component="div"
        >
          
          {/* Logo */}
          <Box sx={{padding: "15px"}}>   
            <Link to='/'> <img src={logo} alt="" width={"140px"} height={"106px"}/> </Link>
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
              <MenuItem onClick={handleClose}>
                <Link to='/zapatillas/hombre'> 
                  <Typography sx={{cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}}>
                    Hombre 
                  </Typography>
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link to='/zapatillas/mujer'> 
                  <Typography sx={{cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}}>
                    Mujer 
                  </Typography> 
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link to='/zapatillas/nino'> 
                  <Typography sx={{cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}}>
                    Niño 
                  </Typography> 
                </Link>
              </MenuItem>              

              <MenuItem onClick={handleClose}>
                <Link to='/zapatillas'> 
                  <Typography sx={{cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}}>
                    Todo 
                  </Typography> 
                </Link>
              </MenuItem>

            </Menu>

            <Typography sx={{marginRight:'20px', cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}}>
              <Link to='/novedades'> Novedades </Link>
            </Typography>

            <Typography sx={{marginRight:'20px', cursor:'pointer', color:'red', fontWeight:'800'}}>
              <Link to='/sales'> Sales </Link>
            </Typography>

            <Typography sx={{marginRight:'20px', cursor:'pointer', color:'rgba(0,0,0,.5)', fontWeight:'800'}}>
              <Link to='rastreador'> Rastrea tu pedido </Link>
            </Typography>

          </Box>

          {/* Button links */}
          <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            
          <Link to='/profile'> <Profile /> </Link>   
          <Link to='/carrito'> <CartWidget /> </Link>   
            
          </Box>

        </Box>        
   
      </Toolbar>      
    </AppBar> 

  )
}

export default NavBar
