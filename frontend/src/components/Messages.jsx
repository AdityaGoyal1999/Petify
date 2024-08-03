import { Sheet, Box } from '@mui/joy'
import ChatsPane from './messageComponents/ChatsPane'
import MessagesPane from "./messageComponents/MessagesPane"

const Messages = () => {
  return (
    <Sheet 
      sx={{ 
        flex: 1,
        mx: 'auto',
        display: 'grid',
        gridTemplateColumns: '1fr 4fr',
      }}
    >
      <Sheet
        sx={{
          // border: "1px solid black",
          zIndex: 100,
          height: '100vh',
          width: '100%'
        }}
      >
        <ChatsPane />
      </Sheet>
      <MessagesPane />
    </Sheet>
  )
}

export default Messages