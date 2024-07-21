import React from 'react'
import Person from "../assets/person.jpg"
import { Box } from "@mui/joy";

const Profile = () => {
  return (
    <div className="flex w-full justify-center">
      <Box className="border border-gray-300 p-10 my-32 w-1/2 flex flex-col items-center rounded-lg">
        <Box className="rounded-full overflow-hidden h-56 w-56">
          <img 
            src={Person} 
            className="w-full h-full object-cover"
          />
        </Box>

        <Box className="flex gap-20">
          <p>Name</p>
          <p>Jane Doe</p>
        </Box>
      </Box>
    </div>
  )
}

export default Profile