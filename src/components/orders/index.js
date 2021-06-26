import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Banner } from '../common/banner';
import { Button } from '../common/button';

export const OrderButton = styled(Button)`
    width: 100%;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
    background: ${props => props.tertiary ? 'rgba(0,0,0,0.08)' : ''};
    color: ${props => props.tertiary ? 'rgba(0,0,0,0.65)' : ''};
`

export function Home(){
    return(
        <>
            <Banner title='Home' orders />
            <Link to='/order'>
                <OrderButton secondary>Place Order</OrderButton>
            </Link>
        </>
    )
}

export default Home;
