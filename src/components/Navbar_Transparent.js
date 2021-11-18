import React from 'react';
import styled from 'styled-components';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function Header() {
    return (
        <Container>
            <Logo>
                <p><a href='#'>PALMA</a></p>
                {/* <img src='/images/logo.svg' alt='' /> */}
            </Logo>
            <Menu>
                <p><a href='#'>WOMEN</a></p>
                <p><a href='#'>PETS</a></p>
                <p><a href='#'>ACCESORIES</a></p>
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
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    left: 0;
    right: 0;
    z-index: 1;
`

const Logo = styled.div`
    a {
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 20px;
        flex-wrap: nowrap;
        color: #303030;
        text-decoration: none;
    }    
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    transform: translateX(60px);

    a {
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 20px;
        flex-wrap: nowrap;
        color: #303030;
        text-decoration: none;
    }
`

const RightMenu = styled.div`  
    display: flex;
    
    a {
        font-weight: 600;
        letter-spacing: 1px;
        padding: 0 10px;
        flex-wrap: nowrap;
        color: #303030;
        text-decoration: none;
    }
`