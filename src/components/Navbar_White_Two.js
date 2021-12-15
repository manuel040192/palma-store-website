import React from 'react';
import styled from 'styled-components';
import './Navbar_White.css';
import { Link } from 'react-router-dom';
import RightNavbarTwoLogin from './RightNavMenu_Two_Login';


function Header() {
    return (
        <Container>
            <NavMenu>
                <p><Link to='/women'>Women</Link></p>
                <p><Link to='/petsandowners'>Pets</Link></p>
                <p><Link to='/goods'>Goods</Link></p>
            </NavMenu>
            <Logo>
                <p><Link to='/'>PALMA</Link></p>
            </Logo>
            <RightNavMenu>
                <RightNavbarTwoLogin />
            </RightNavMenu>
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

const Logo = styled.div`
    flex: 3 0 auto;
    a {
        text-decoration: none;
        font-family: 'Alike';
        font-size: 28px; 
        color: #000000; 
        letter-spacing: 3px;
        display: flex;
        padding-right: 10.7rem;
        width: 500px;
        transform: translateX(120px);
    }
`   

const NavMenu = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    flex: 1;
    padding-left: 10px;
    /* transform: translateX(-5px); */

    a {
        font-weight: 400;
        font-size: 24px;
        letter-spacing: 1px;
        padding-right: 20px;
        padding-left: 20px;
        flex-wrap: nowrap;
        color: #303030;
        text-decoration: none;
        transition: font-weight .2s ease-in-out;
        width: 60px;
    }

    a:hover {
        font-weight: 900;
    }
`

const RightNavMenu = styled.div`  
    display: flex;
    transform: translateX(-60px);
    width: 100px;
`
