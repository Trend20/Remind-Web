import React from 'react'
import { Box, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box sx={{ width:'100%', display:'flex' }}>
      <Grid container>
        <Grid item>
          <img src="/img/logo1.png" alt="logo" />
        </Grid>
        <Grid item>
          <Link to="/login">Login</Link>
          <Link to="/signup">Get Started</Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Navbar;