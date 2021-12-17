import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar_White_Two.css';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

export default function RightNavbarTwoLogin() {
    return (
      <React.Fragment>
        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
          <Tooltip title="Carrito">
            <IconButton size="small" sx={{ ml: 2 }}>
              <Link to='/'><ShoppingCartIcon className='iconbutton' sx={{ width: 32, height: 32, color: '#000000' }}></ShoppingCartIcon></Link>
            </IconButton>
          </Tooltip>
        </Box>
      </React.Fragment>
    );
  }
