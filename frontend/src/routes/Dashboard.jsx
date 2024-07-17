import React from 'react'
import { Sidebar } from '../components'
import { CssVarsProvider } from '@mui/joy'
import { Box } from "@mui/joy"
 
const Dashboard = () => {
  return (
    <CssVarsProvider>
      <Box className="mt-20 border border-red-100" sx={{ display: 'flex' }}>
        <Sidebar />
        Dashboard
      </Box>
    </CssVarsProvider>
  )
}

export default Dashboard