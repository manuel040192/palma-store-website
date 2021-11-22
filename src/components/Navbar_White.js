import React from 'react';
import styled from 'styled-components';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
    return (
        <Container>
            <a>
                <img src='/images/logoanimationcolor.png' style={{ maxHeight: 65 }} alt='' />
            </a>
            <Menu>
                <p><a href='#'>Women</a></p>
                <p><a href='#'>Pets</a></p>
                <p><a href='#'>Goods</a></p>
            </Menu>
            <RightMenu>
                <p><a href='#'><AccountCircle /></a></p>
                <p><a href='#'><ShoppingCartIcon /></a></p>
                <p><a href='#'><FavoriteIcon /></a></p>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height: 80px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    left: 0;
    right: 0;
    z-index: 1;
    background-color: #ffffff;
    font-family: 'Rajdhani', sans-serif;
    font-weight: lighter;
    a {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    /* transform: translateX(-5px); */

    a {
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 1px;
        padding: 0 20px;
        flex-wrap: nowrap;
        color: #303030;
        text-decoration: none;
        transition: font-weight .2s ease-in-out;
    }

    a:hover {
        font-weight: 900;
    }
`

const RightMenu = styled.div`  
    display: flex;
    
    a {
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 10px;
        flex-wrap: nowrap;
        color: #000000;
        text-decoration: none;
    }
`