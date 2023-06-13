import React from 'react'
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ():JSX.Element => {
  return (
    <Box sx={{ width:'100%', display:'flex' }}>
      <Grid container style={{ 
        display:'flex', 
        width:'100%', 
        justifyContent:'space-between' ,
        alignItems:'center',
        padding:'20px'
        }}>
        <Grid item style={{ width:'5%', display:'flex', justifyContent:'center' }}>
          <img src="/img/logo1.png" alt="logo"  style={{ maxWidth:'50%' }}/>
        </Grid>
        <Grid item style={{ display:'flex', width:'30%', justifyContent:'center' }}>
          <Link to="/login" className='link'>Login</Link>
          <Link to="/signup" className='link'>Get Started</Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Navbar;