import React from 'react'
import { ListItem, ListItemButton, Stack, Box, Typography } from '@mui/joy'

const ChatListItem = ({ id, sender, messages, selectedChatId, setSelectedChat }) => {
  return (
    <ListItem>
        <ListItemButton>
            <Stack>
                <Box sx={{ flex: 1}}>
                    <Typography level="title-sm">{sender.name}</Typography>
                    <Typography level="body-sm">{sender.username}</Typography>
                </Box>
            </Stack>
        </ListItemButton>
    </ListItem>
  )
}

export default ChatListItem