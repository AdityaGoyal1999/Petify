import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/joy"
import { Pets } from "@mui/icons-material"
import pawAnimation from "../assets/paw-animation.gif"
import { AboutUs, Cards, Guide, Hero } from '../components'

const Home = () => {
  return (
    <Box className="mt-40">
        <Hero />
        <Guide />
        <AboutUs />
        {/* <Cards /> */}
    </Box>
  )
}

export default Home