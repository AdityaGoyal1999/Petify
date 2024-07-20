import { Box, Grid, Typography } from '@mui/joy'
import React from 'react'
import pawAnimation from "../assets/paw-animation.gif"
import girlOnComputer from "../assets/girl-on-computer.gif"

const AboutUs = () => {
  return (
    <Box 
        className="bg-gradient-to-r from-indigo-500"
        sx={{ height: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ width: "80%", height: "400px", backgroundColor: 'white'}} className="shadow-lg rounded-lg flex-column max-container padding-container flexCenter">
          <Box className="flexCenter flex-col">
            <Typography level="h1" className="border border-red-500">About Us</Typography>
            <Typography>Choose your next pet from the comfort of your home with us.</Typography>
          </Box>
        </Box>
    </Box>
  )
}

export default AboutUs