import { SearchBar } from './../components';
import { logo } from './../utils/constants';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import React from 'react';


const Navbar = () => (
  <Stack 
    sx={{position: 'sticky', background: '#00000099', top: 0, justifyContent: 'space-between'}}
    alignItems='center' 
    direction='row' 
    p={2} 
  >
    <Link to='/' style={{display: 'flex', alighItems: 'center'}}>
      <img 
        height={45}
        src={logo} 
        alt='logo' 
      />
    </Link>
    <SearchBar />
  </Stack>
)


export default Navbar