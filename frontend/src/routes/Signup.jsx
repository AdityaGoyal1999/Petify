import React from 'react'
import { Box, Sheet, Typography, FormControl, FormLabel, Input, Button, Link } from '@mui/joy'
import { CssVarsProvider } from '@mui/joy/styles';
import { SmartButton } from '@mui/icons-material';

const Signup = () => {
  return (
    <CssVarsProvider>
      <Sheet 
        sx={{
          width: 300,
          mx: 'auto',
          display: 'flex',
          mt: 30,
          py: 3,
          px: 2,
          flexDirection: 'column',
          gap: 2,
          borderRadius: 'sm',
          boxShadow: 'md'
        }}
        variant="outlined"
      >
        <Typography level="h4" component="h1">
          Welcome!
        </Typography>
        <Typography level="body-sm">Create account to continue.</Typography>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input
            name="name"
            type="text"
            placeholder="Enter Name"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Eamil</FormLabel>
          <Input
            name="email"
            type="email"
            placeholder="Enter Email"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input
            name="password"
            type="password"
            placeholder="Enter Password"
          />
        </FormControl>

        <Button 
          sx={{mt: 1}}
          component="a"
          href="/dashboard"
        >Sign up</Button>
        <Typography
          fontSize="sm"
          endDecorator={<Link href="/signup">Sign in</Link>}
          sx={{ alignSelf: 'center' }}
        >Already have an account?</Typography>
      </Sheet>
    </CssVarsProvider>
  )
}

export default Signup