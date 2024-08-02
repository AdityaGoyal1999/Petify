import React from 'react'
import { Sheet, Box, IconButton, Typography, Input, List, ListItem, ListItemButton, ListItemContent, Avatar } from "@mui/joy";
import { BrightnessAutoRounded, DashboardRounded, HomeRounded, LogoutRounded, PersonRounded, MessageRounded, SearchRounded } from '@mui/icons-material';
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <Sheet
        className="Sidebar"
        sx={{
            position: { xs: 'fixed', md: 'sticky'},
            // zIndex: 10000,
            height: '100vh',
            width: '250px',
            top: 0,
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            borderRadius: '1px solid',
            borderColor: 'divider'
        }}
    >
        <Box className="sidebar-overlay"
            sx={{
                position: 'fixed',
                zIndex: 9998,
                top: 0,
                left: 0,
                // width: '100vw',
                height: '100vh',
                
            }}
        />
        <Box 
            sx={{
                display: 'flex',
                gap: 1,
                alignItems: 'center'
            }}
        >
            <IconButton variant="soft" color="primary" size="sm">
                <BrightnessAutoRounded />
            </IconButton>
            <Typography level="title-lg">Petlify</Typography>
            {/* <ColorSchemeToggle sx={{}} /> */}
        </Box>
        <Input size="sm" startDecorator={<SearchRounded />} placeholder="Search" />
        <Box>
            <List>
                <ListItem>
                    <ListItemButton>
                        <HomeRounded />
                        <ListItemContent>
                            <Typography level="title-sm">Home</Typography>
                        </ListItemContent>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton component={Link} to="/dashboard/search">
                        <SearchRounded />
                        <ListItemContent>
                            <Typography level="title-sm">Search</Typography>
                        </ListItemContent>
                    </ListItemButton>
                </ListItem>
                
                <ListItem>
                    <ListItemButton component={Link} to="/dashboard/messages">
                        <MessageRounded />
                        <ListItemContent>
                            <Typography level="title-sm">Messages</Typography>
                        </ListItemContent>
                    </ListItemButton>
                </ListItem>

                <ListItem>
                    <ListItemButton component={ Link } to="/dashboard/profile">
                        <PersonRounded />
                        <ListItemContent>
                            <Typography level="title-sm">Profile</Typography>
                        </ListItemContent>
                    </ListItemButton>
                </ListItem>
                
            </List>
        </Box>
        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', marginTop: 'auto' }}>
            <Avatar 
                variant="outlined"
                size="sm"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
            />
            <Box sx={{ minWidth: 0, flex: 1 }}>
                <Typography level="title-sm">Aditya Goyal</Typography>
                <Typography level="body-xs">adityagoyaldoon@gmail.com</Typography>
            </Box>
            <IconButton size="sm" variant="plain" color="neutral">
                <LogoutRounded />
            </IconButton>
        </Box>
    </Sheet>
  )
}

export default Sidebar