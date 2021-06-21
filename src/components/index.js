import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { BottomWrapper } from './common';
import { Banner } from './common/banner';
import { Button } from './common/button';

const Tagline = styled.div`
    font-size: 20px;
    font-weight: 200;
    margin-top: 15px;
    margin-bottom: 55px;
`

export function LandingPage(){
    return(
        <>
            <Banner height='45vh' landing />
            <BottomWrapper center height='55.5vh'>
                <Tagline>Place your eggs orders with ease <br />and comfort</Tagline>
                <Link to='/signup'>
                    <Button secondary>create account</Button>
                </Link>
                <Link to='/login'>
                    <Button>sign in</Button>
                </Link>
            </BottomWrapper>
        </>
    )
}

export default LandingPage;
