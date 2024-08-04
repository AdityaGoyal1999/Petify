import React, { useState } from 'react'
import { Box, Sheet, Typography, FormControl, FormLabel, Input, Button, Link } from '@mui/joy'
import { CssVarsProvider } from '@mui/joy/styles';
import { SmartButton } from '@mui/icons-material';
import { Header, Footer } from "../components";
import axios from 'axios';

const handleSignup = (name, email, password) => {
  axios.post('http://localhost:3000/users/signup', {
    name: name,
    email: email,
    password: password
  })
  .then((response) => {
    console.log(response.data.message)
  })
  .catch((error) => console.error(error))
}

const Signup = () => {

  // Not the best way - Will change this
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <CssVarsProvider>
      <Box sx={{ display: 'flex', minHeight: '100vh', flexFlow: 'column' }}>
        <Header />
          <Box
            sx={{
              display: 'flex',
              flex: '1 0 auto',
              justifyContent: 'center',
              alignItems: 'center',
              p: 2,
            }}
          >
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
                  onChange={(event) => setName(event.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                  placeholder="Enter Email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  placeholder="Enter Password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>

              <Button 
                sx={{mt: 1}}
                onClick={() => handleSignup(name, email, password)}
              >Sign up</Button>
              <Typography
                fontSize="sm"
                endDecorator={<Link href="/login">Sign in</Link>}
                sx={{ alignSelf: 'center' }}
              >Already have an account?</Typography>
            </Sheet>
          </Box>
        <Footer />
      </Box>
    </CssVarsProvider>
  )
}

export default Signup