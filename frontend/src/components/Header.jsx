import React from 'react'
import { Box, Stack, Button, IconButton } from "@mui/joy";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'space-between',
            // border: '2px solid red',
            padding: '15px'
        }}
        className="shadow-lg fixed top-0 w-full z-10 h-20 bg-white"
    >
        <IconButton
            size="md"
            // color="neutral"
            sx={{
                display: { xs: 'none', sm: 'inline-flex'},
            }}
        >
            <a href="/"><img src={logo} width={170}></img></a>
        </IconButton>
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            sx={{ display: {xs: 'none', sm: "flex"}}}
        >
            <Button
                variant="plain"
                color="neutral"
                aria-pressed="true"
                component="a"
                href="#"
                size="sm"
                sx={{ alignSelf: 'center' }}
            >
                About Us
            </Button>
            <Button
                variant="plain"
                color="neutral"
                component="a"
                href="#"
                size="sm"
                sx={{ alignSelf: 'center' }}
            >
                Team
            </Button>
            <Button
                variant="solid"
                color="primary"
                component="a"
                href="/login"
                size="sm"
                sx={{ alignSelf: 'center' }}
            >
                Login
            </Button>
            <Button
                variant="outlined"
                color="primary"
                component="a"
                href="#"
                size="sm"
                sx={{ alignSelf: 'center' }}
            >
                Signup
            </Button>
        </Stack>
    </Box>
  )
}

export default Header