import React from 'react'
import Card from './Card'
import { Box } from "@mui/joy"

const Cards = () => {
  return (
    <Box className="flex flex-row bg-slate-50">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <Card />
        <Card />
        <Card /> */}
    </Box>
  )
}

export default Cards