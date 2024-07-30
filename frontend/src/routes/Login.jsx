import React from 'react'
import { Box, Sheet, Typography, FormControl, FormLabel, Input, Button, Link } from '@mui/joy'
import { CssVarsProvider } from '@mui/joy/styles';
import { SmartButton } from '@mui/icons-material';
import { Header, Footer } from "../components"

const Login = () => {
  return (
    <CssVarsProvider>
      <Box
        sx={{
          display: 'flex',
          minHeight: '100vh',
          flexDirection: 'column'
        }}
      >
        <Header />
        <Box
          sx={{
            display: 'flex',
            flex: '1 0 auto',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2
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
            <Typography level="body-sm">Sign in to continue.</Typography>
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
            >Login</Button>
            <Typography
              fontSize="sm"
              endDecorator={<Link href="/signup">Sign up</Link>}
              sx={{ alignSelf: 'center' }}
            >Don't have an account?</Typography>
          </Sheet>
        </Box>
        <Footer />
      </Box>
    </CssVarsProvider>
  )
}

export default Login