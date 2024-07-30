import React, { useState } from 'react'
import Person from "../assets/person.jpg"
import { Box, Button, Card, Typography, Divider, Stack, AspectRatio, IconButton, FormLabel, Input, FormControl, FormHelperText, CardOverflow, CardActions, Textarea } from "@mui/joy";
import { EditRounded, EmailRounded } from '@mui/icons-material';

const Profile = () => {

  const [numCharacters, setNumCharacters] = useState(100);

  return (
    <div className="flex w-full items-center flex-col">

      <Card className="mt-10 h-[370px] w-2/4">
        <Box className="mb-1">
          <Typography level="title-md">Personal Information</Typography>
          <Typography level="body-sm">
            Here is your personal infromation 
          </Typography>
        </Box>
        <Divider />

        <Stack direction="row" spacing={3}  sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}>
          <Stack direction="column" spacing={1}>
            <AspectRatio
              ratio="1"
              maxHeight={200}
              sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
            >
              <img 
                src={Person}
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <IconButton
              aria-label="upload new picture"
              size="sm"
              variant="outlined"
              color="neutral"
              sx={{
                bgcolor: 'background.body',
                position: 'absolute',
                zIndex: 2,
                borderRadius: '50%',
                left: 100,
                top: 170,
                boxShadow: 'sm'
              }}
            >
              <EditRounded />
            </IconButton>
          </Stack>

          <Stack spacing={2} sx={{flexGrow: 1, minWidth: 0}}>
              <Stack spacing={1}>
                <FormLabel>Name</FormLabel>
                <FormControl sx={{ display: 'flex', gap: 2}}>
                  <Input size="sm" placeholder="First Name" sx={{ flex: 1 }}/>
                  <Input size="sm" placeholder="Last Name" sx={{ flex: 1 }}/>
                </FormControl>
              </Stack>

              <Stack direction="row" spacing={2} sx={{ flexGrow: 1, minWidth:0 }}>
                <FormControl sx={{flexGrow: 1, minWidth: 0}}>
                  <FormLabel>Role</FormLabel>
                  <Input size="sm" defaultValue="UI Developer" />
                </FormControl>
                <FormControl sx={{ flexGrow: 1, minWidth: 0}}>
                  <FormLabel>Email</FormLabel>
                  <Input 
                    size="sm"
                    type="email"
                    startDecorator={<EmailRounded />}
                    placeholder="email"
                    defaultValue="johndoe@gmail.com"
                    sx={{flexGrow: 1}}
                  />
                </FormControl>
              </Stack>
          </Stack>
        </Stack>

        <CardOverflow sx={{borderTop: '1px solid', borderColor: 'divider'}}>
          <CardActions sx={{ alignSelf: 'flex-end', pt: 2}}>
            <Button size="sm" variant="outlined" color="neutral">Cancel</Button>
            <Button size="sm" variant="solid">Save</Button>
          </CardActions> 
        </CardOverflow>
      </Card>

      <Card className="w-2/4 mt-10">
        <Box className="mb-1">
          <Typography level="title-md">Bio</Typography>
          <Typography level="body-sm">
            Edit the information in your bio
          </Typography>
        </Box>
        <Divider />
        <Stack>
          <Textarea size="sm" minRows={4} sx={{ mt: 1.5 }} defaultValue="I'm here to find a dog for myself" />
          <FormHelperText sx={{ mt:0.75, fontSize: 'xs'}}>{numCharacters} characters left</FormHelperText>
        </Stack>

        <CardOverflow sx={{borderTop: '1px solid', borderColor: 'divider'}}>
          <CardActions sx={{ alignSelf: 'flex-end', pt: 2}}>
            <Button size="sm" variant="outlined" color="neutral">Cancel</Button>
            <Button size="sm" variant="solid">Save</Button>
          </CardActions> 
        </CardOverflow>
      </Card>
    </div>
  )
}

export default Profile