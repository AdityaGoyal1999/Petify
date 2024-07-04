import { Box, Typography } from '@mui/joy'
import React from 'react'

const AboutUs = () => {
  return (
    <Box 
        className="bg-gradient-to-r from-indigo-500"
        sx={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: "80%", height: "400px"}}>
            <Typography variant="solid" color="neutral">About Us section</Typography>
        </Box>
    </Box>
  )
}

export default AboutUs