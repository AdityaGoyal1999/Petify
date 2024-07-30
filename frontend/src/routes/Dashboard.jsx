import React from 'react'
import { Sidebar, Profile } from '../components'
import { CssVarsProvider } from '@mui/joy'
import { Box } from "@mui/joy"

 
const Dashboard = () => {
  return (
    <CssVarsProvider>
      <Box>
        <Box className="flex flex-grow border border-red-100">
          <Sidebar />
          <Profile />
        </Box>
      </Box>
    </CssVarsProvider>
  )
}

export default Dashboard