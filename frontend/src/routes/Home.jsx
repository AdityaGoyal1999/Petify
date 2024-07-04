import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/joy"
import { Pets } from "@mui/icons-material"
import pawAnimation from "../assets/paw-animation.gif"
import { AboutUs } from '../components'

const Home = () => {
  return (
    <Box className="mt-40">
        <Grid 
            container spacing={2} 
            sx={{ 
                flexGrow: 1,
            }}
        >
            <Grid xs={12} md={6} 
                sx={{ 
                    // border: '2px solid red',
                    display: 'flex',
                    justifyContent: 'center' 
                }}
            >   
                <Box sx={{ 
                    marginTop: '50px',
                    marginBottom: '50px'
                }}
                >
                    <Typography sx={{ paddingTop: '20px', paddingBottom: '20px', fontSize: '4rem', fontWeight: 'bold' }}>One Stop Shop For Pets</Typography>
                    <Typography sx={{ paddingBottom: '20px'}}>Petlify is the platform to sell and adopt pets</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}><Button>Find Your Pet<Pets /></Button></Box>
                </Box>
            </Grid>

            <Grid xs={12} md={6} sx={{ }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }} className="border border-red-500 flex flex-column">
                    <Box><img src={pawAnimation} width={150}></img></Box>
                    <Box>
                        <Typography>This is great place to get pets</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>

        <AboutUs />
        <AboutUs />
        <AboutUs />
    </Box>
  )
}

export default Home