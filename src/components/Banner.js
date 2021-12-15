import React from 'react';
import styled from 'styled-components';
import './Fade_In_Texts.css';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

function Banner() {
    return (
        <Container>
            <Image className="banner">
                {/* <div className="fade_in_text1">Text 1</div>
                <div className="fade_in_text2">Text 2</div> */}    
                <Fade left duration={1400}> 
                    <div className="text1">Your Experience Is Your</div>
                </Fade>
                <Fade top duration={1200} delay={1400}>
                    <div className="text2">Attention</div>
                </Fade>
                <ButtonGroup>
                    <Women>
                        <p><Link to='/women'>Shop Women</Link></p>
                    </Women>
                    <Pets>
                        <p><Link to='/petsandowners'>Shop Pets</Link></p>
                    </Pets>
                    <Goods>
                        <p><Link to='/goods'>Shop Goods</Link></p>
                    </Goods>
                </ButtonGroup>
            </Image>
        </Container>
    )
}

const Image = styled.div`
    background-image: url(images/palmeras.jpg);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    height: 105vh;
    width: 100%;
    /* argin-left: 207px; */
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    /* position: relative; */
`

const Container = styled.div`
    align-items: center;
`

const ButtonGroup = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    top: 55%;
    left: 20%;
    position: absolute;
    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
    }
`
const Women = styled.div`
    background-color: #ffffff;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 8px;
    a {
        text-decoration: none;
        color: #000000;
    }
`

const Pets = styled.div`
    background-color: #ffffff;
    height: 40px;
    width: 256px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 8px;
    a {
        text-decoration: none;
        color: #000000;
    }
`

const Goods = styled.div`
    background-color: #ffffff;
    height: 40px;
    width: 256px;
    color: #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Rajdhani', sans-serif;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    margin: 8px;
    a {
        text-decoration: none;
        color: #000000;
    }
`

export default Banner
