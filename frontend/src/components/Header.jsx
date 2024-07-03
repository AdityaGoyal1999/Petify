import React from 'react'
import { Box, Stack, Button, IconButton } from "@mui/joy";

const Header = () => {
  return (
    <Box
        sx={{
            display: 'flex',
            flexGrow: 1,
            justifyContent: 'space-between',
            border: '2px solid red',
            padding: '15px'
        }}
    >
        <IconButton
            size="md"
            variant="outlined"
            color="neutral"
            sx={{
                display: { xs: 'none', sm: 'inline-flex'},
                borderRadius: '50%'
            }}
        >
            <a href="/">Image</a>
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
                href="/dashboard"
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