import { Stack, Box } from '@mui/material';
import React from 'react';
import { VideoCard } from './';
import { ChannelCard } from './'

const Videos = ({ videos }) => {



  return (
    <Stack
      justifyContent='start'
      direction='row'
      flexWrap='wrap'
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId  && <VideoCard video={item} />}
          {item.id.channelId  && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos