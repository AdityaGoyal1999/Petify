import React from 'react'
import { Box, Typography } from '@mui/joy'
import pawAnimation from "../assets/paw-animation.gif"
import animatedDog from "../assets/animated-dog.png"

import { CustomButton } from "../components"
 
const Hero = () => {
  return (
    <section className="relative max-container padding-container flex flex-col xl:flex-row py-10 pb-32">
        {/* Background Image */}
        {/* <img 
            src={animatedDog}
            className="absolute right-0 top-0 h-screen w-screen bg-cover md:-right-28 xl:-top-60"
        ></img> */}

        {/* Left Side */}
        <Box className="relative">
            <img 
                src={pawAnimation} width={50} height={50}
                className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            ></img>
            <h1 className="bold-52 lg:bold-88">Find Your Furry Pals With Us</h1>
            <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">We want to provide you with the joy of finding the right furry pal you're looking for.</p>
            <Box className="mt-10">
                <CustomButton title="Login" variant="solid" style={{margin: 3}}></CustomButton>
                <CustomButton title="Signup" variant="outlined" style={{margin: 3}}></CustomButton>
            </Box>
        </Box>

        {/* Right Side */}
        <Box className="xl:w-1/2 flex justify-center h-auto">
            <Box className="w-1/2 z-20 bg-blue-100 rounded-3xl xl:w-full h-full">
                <img 
                    src={animatedDog}
                    className=""
                ></img>
            </Box>
        </Box>
    </section>
  )
}

export default Hero