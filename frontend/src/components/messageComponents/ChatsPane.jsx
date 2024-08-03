import React from 'react'
import { Box, Sheet, IconButton, Stack, Typography, Input, List } from "@mui/joy"
import { EditNote, EditNoteRounded, SearchRounded } from '@mui/icons-material'
import { chats } from '../../mockData/messages'
import ChatListItem from './ChatListItem'

const ChatsPane = () => {
  return (
    <Sheet
        sx={{
            borderRight: '1px solid',
            borderColor: 'divider',
            overflowY: 'auto',
            height: '100vh'
        }}
    > 
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          p={2}
          pb={1.5}
        >
          <Typography
            fontSize={{ xs: 'md', md: 'lg' }}
            component="h1"
            fontWeight="lg"
            sx={{ mr: 'auto' }}
          >Messages</Typography>
          <IconButton>
            <EditNoteRounded />
          </IconButton>
        </Stack>
        <Box sx={{ px: 2, pb: 1.5}}>
          <Input 
            size="sm"
            startDecorator={<SearchRounded />}
            placeholder="Search"
            aria-label="Search"
          />
        </Box>
        <List>
          {chats.map((chat) => (
            <ChatListItem 
              key={chat.id}
              id={chat.id}
              sender={chat.sender}
              messages={chat.messages}

            />
          ))}
        </List>
    </Sheet>
  )
}

export default ChatsPane