import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import BannerImage from '../../assets/cropped.png';
import { Button, Wrapper, Title } from '../common';

const Tagline = styled.span`
    font-size: 20px;
    font-weight: 200;
    margin-top: 12px;
    margin-bottom: 50px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: right;
`

const Banner = styled.div`
    width: 100%;
    height: 45vh;
    position: relative;
`

const Gradient = styled.div`
    width: 100%;
    height: 68%;
    position: absolute;
    bottom: 20%;
    background: none;
    background-image: linear-gradient(0deg, black, rgba(0,0,0,0.0));
`

const TheBanner = () => (
    <Banner>
        <Image src={BannerImage} />
        <Gradient />
    </Banner>
)


export function LandingPage(){
    return(
        <>
            <TheBanner />
            <Wrapper center height='65vh'>
                <Title center>Kagga Farm Marketplace</Title>
                <Tagline>Place your eggs orders with ease <br />and comfort</Tagline>
                <Link to='/signup'>
                    <Button secondary>create account</Button>
                </Link>
                <Link to='/login'>
                    <Button>sign in</Button>
                </Link>
            </Wrapper>
        </>
    )
}

export default LandingPage;
