import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Banner } from './common/banner';
import { Button } from './common/button';

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background: black;
    color: white;
    text-align: center;
`

const Tagline = styled.div`
    font-size: 20px;
    font-weight: 200;
`

const BottomWrapper = styled.div`
    margin: 10px 30px;
    display: flex;
    flex-direction: column;
`

export function LandingPage(){
    return(
        <Wrapper>
            <Banner landing />
            <BottomWrapper>
                <Tagline>Place your eggs orders with ease <br />and comfort</Tagline>
                <Link to='/signup'>
                    <Button secondary mt='50px'>create account</Button>
                </Link>
                <Link to='/login'>
                    <Button>sign in</Button>
                </Link>
            </BottomWrapper>
        </Wrapper>
    )
}

export default LandingPage;
