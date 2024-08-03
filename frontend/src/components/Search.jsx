import { SearchOutlined } from '@mui/icons-material'
import { Card, Box, Typography, Input, Divider } from '@mui/joy'
import React from 'react'

const Search = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
        pt: '20px',
        mx: 'auto',
        width: '100%'
      }}
    >
      <Card
        variant="outlined"
        sx={{
          height: '95vh',
          width: '90%',
        }}
      >
        <Typography level="h3">
          Find Your Next Pet
        </Typography>
        <Divider />
        <Input 
          startDecorator={<SearchOutlined />}
          placeholder="Search your next 🐾"
        />
      </Card>
    </Box>
  )
}

export default Search