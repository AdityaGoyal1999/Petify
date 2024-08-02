import React from 'react'
import { Sidebar, Profile, Search, Messages } from '../components'
import { CssVarsProvider } from '@mui/joy'
import { Box } from "@mui/joy"

import { Routes, Route, Link } from "react-router-dom"
 
const Dashboard = () => {
  return (
    <CssVarsProvider>
      <Box>
        <Box className="flex flex-grow border border-red-100">
          {/* The main content goes here */}
          {/* <Profile />  */}
          <Sidebar />
          <Routes>
              <Route path="profile" element={<Profile />} />
              <Route path="search" element={<Search />} />
              <Route path="messages" element={<Messages />} />
              {/* <Route path="other" element={<OtherContent />} /> */}
            </Routes>
        </Box>
      </Box>
    </CssVarsProvider>
  )
}

export default Dashboard