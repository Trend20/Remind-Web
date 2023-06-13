import React from 'react'
import { Box, Grid, Button, Typography } from '@mui/material';

const Homepage = ():JSX.Element => {
  return (
    <Box component={'div'} sx={{ 
      display:'flex', 
      flexDirection:'column', 
      width:'100%', 
      alignItems:'center', 
      justifyContent:'center', 
      padding:'150px' }}>
      <Typography variant='h1' style={{ fontSize:"48px", fontWeight: 'bold' }}>Get Reminded of Your Valuable Tasks!</Typography> 
      <Typography>Remind is your watchman ensuring that you deliver on all your critical tasks. </Typography>
      <Button>Sign up for free</Button>
    </Box>
  )
}

export default Homepage;