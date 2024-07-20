import { Box, Grid, Typography } from '@mui/joy'
import React from 'react'
import pawAnimation from "../assets/paw-animation.gif"
import girlOnComputer from "../assets/girl-on-computer.gif"
import { FEATURES } from '../constants'


const AboutUs = () => {
  return (
  <Box className="rounded-lg flex-column flexCenter max-container padding-container pb-32">
      <Box className="flexCenter flex-col">
        <h1 className="bold-52 l:bold-64">About Us</h1>
        
        <ul className="mt-10 grid md:grid-cols-2 gap-16 lg:mt-20 lg:gap-32">
          {FEATURES.map((feature) => (
            <FeatureItem title={feature.title} description={feature.description} key={feature.title} />
          ))}
        </ul>
      </Box>
    </Box>
  )
}

const FeatureItem = ({title, description, key}) => {
  return (
    <li className="flex flex-col items-start">
      <Box className="rounded-full p-4 lg:p-7 bg-blue-100">
        <img
          src={pawAnimation}
          alt="Paw Icon"
          width={28}
          height={28}
        ></img>
      </Box>
      <h3 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h3>
      <p className="regular-16 mt-5 bg-white text-gray-30 lg:mt-[30px] lg:bg-none text-wrap">{description}</p>
    </li>
  )
}

export default AboutUs