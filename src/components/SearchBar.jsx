import { Paper, IconButton } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
    
    const [searchTerm, setSearchTerm] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if(searchTerm){
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');            
        }
    }

  return (
    <Paper 
        component='form'
        onSubmit={handleSubmit}
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
            onChange={(e) => setSearchTerm(e.target.value) }
            value={searchTerm}
        />
        <IconButton
            sx={{p: {xs: '5px', sm: '10px'}, color: 'red'}}
            type='submit'
        >
            <Search />
        </IconButton  >
    </Paper>
  )
}

export default SearchBar