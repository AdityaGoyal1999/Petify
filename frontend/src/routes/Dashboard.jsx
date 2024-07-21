import React from 'react'
import { Sidebar } from '../components'
import { CssVarsProvider } from '@mui/joy'
import { Box } from "@mui/joy"
 
const Dashboard = () => {
  return (
    <CssVarsProvider>
      <Box>
        <Box className="mt-[96px] flex flex-grow border border-red-100">
          <Sidebar />
          Dashboard
        </Box>
      </Box>
    </CssVarsProvider>
  )
}

export default Dashboard