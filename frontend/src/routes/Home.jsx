import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/joy"
import { Pets } from "@mui/icons-material"

const Home = () => {
  return (
    <Box
        sx={{
            border: '2px solid blue'
        }}
    >
        <Grid 
            container spacing={2} 
            sx={{ 
                flexGrow: 1,
            }}
        >
            <Grid xs={12} md={6} 
                sx={{ 
                    border: '2px solid red',
                    display: 'flex',
                    justifyContent: 'center' 
                }}
            >   
                <Box sx={{ 
                    marginTop: '50px',
                    marginBottom: '50px'
                }}
                >
                    <Typography level="h1" sx={{ paddingTop: '20px', paddingBottom: '20px' }}>One Stop Shop For Pets</Typography>
                    <Typography sx={{ paddingBottom: '20px'}}>Petlify is the platform to sell and adopt pets</Typography>
                    <Box sx={{display: 'flex', justifyContent: 'center'}}><Button>Find Your Pet<Pets /></Button></Box>
                </Box>
            </Grid>

            <Grid xs={12} md={6} sx={{ border: '2px solid red' }}>
                Right side
            </Grid>
        </Grid>
    </Box>
  )
}

export default Home