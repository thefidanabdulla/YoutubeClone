import { Box, Stack, Typography } from '@mui/material'
import { Sidebar, Videos } from './';
import React, { useState } from 'react';

const Feed = () => {
  return (
    <Stack
      sx={{flexDirection: {sx: 'column', md: 'row'}}}
    >
      <Box
        sx={{height: {sx: 'auto', md: '92vh'}, borderRight: '1px solid #3d3d3d', px: {sx: 0, md: 2} }}
      >
        <Sidebar />

        <Typography 
          sx={{mt: 1.5, color: '#fff'}}
          className='copyright'
          variant='body2'
        >
          Copyright 2022 thefidanabdulla
        </Typography>

      </Box>
      <Box
        sx={{overflowY: 'auto', height: '90vh', flex: 2}}
        p={2}
      >
        <Typography
          sx={{color: '#fff'}}
          fontWeight='bold'
          variant='h4'
          mb={2}
        >
          New <span style={{color: '#f31503'}}>videos</span>
        </Typography>
        <Videos />
      </Box>

    </Stack>
  )
}

export default Feed