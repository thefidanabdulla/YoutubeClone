import { categories } from '../utils/constants';
import { Stack } from '@mui/material';
import React from 'react';

const selectedCategory = 'New';

const Sidebar = () => {
  return (
    <Stack
        sx={{
            height: {sx: 'auto', md: '95%'},
            flexDirection: {md: 'column'},
            overflowY: 'auto'
        }}
    >
        {categories.map((category) => (
            <button
                className='category-btn'
                style={{
                    background: category.name === selectedCategory && '#FC1503',
                    color: '#fff'
                }}
                key={category.name}
            >
                <span style={{color: selectedCategory === category.name ? '#fff' : '#f00', marginRight: '15px'}}>{category.icon}</span>
                <span style={{opacity: selectedCategory === category.name ? '1' : '.8'}}>{category.name}</span>
            </button>
        ))}
    </Stack>
  )
}

export default Sidebar