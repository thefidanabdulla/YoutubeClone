import { Paper, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper 
        component='form'
        onSubmit={() => {}}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: {sm: 5}
        }}
    >   
        <input
            placeholder='Search...'
            className='search-bar'
            onChange={() => {}}
            value=''
        />
        <IconButton
            sx={{p: '10px', color: 'red'}}
            type='submit'
        >
            <Search />
        </IconButton>
    </Paper>
  )
}

export default SearchBar