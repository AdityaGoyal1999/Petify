import React from 'react'
import { Box, Typography } from "@mui/joy"

const Card = () => {
  return (
    <Box className="bg-white w-72 h-96 m-10 p-3 rounded-lg shadow-lg">
        <img src="https://images.pexels.com/photos/1001976/pexels-photo-1001976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="h-3/5 w-full object-cover rounded-lg"></img>
        <Typography level="h2">Golden Retriever</Typography>
        <Box className="mt-5 flex flex-row ">
            <img className="w-12 h-12 rounded-full object-cover" src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>
            <Box className="ml-5 flex items-center flex-col">
                <Typography className="font-bold">Jane Doe</Typography>
                <Typography>📍 Toronto, ON</Typography>
            </Box>
        </Box>
    </Box>
  )
}

export default Card