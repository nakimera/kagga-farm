import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { BottomWrapper } from '../common';
import { Banner } from '../common/banner';
import { InputField } from '../common/textInput';
import { Button } from '../common/button';

export const Label = styled.div`
    color: rgba(256,256,256,0.6);
    text-decoration: underline;
    text-align: center;
    margin-top: 6px;
    font-size: 17px;

    @media only screen and (min-width: 768px){
        width: 400px;
    }
`

export function Login(){
    return(
        <>
            <Banner title='user login' />
            <BottomWrapper height='70%'>
                <InputField label='client name' mt='70px' />
                <InputField label='phone number' />
                <Link to='/omuguzi'>
                    <Button secondary>login</Button>
                </Link>
                <Link to='/signup'>
                    <Label>Do not have an acount? Signup</Label>
                </Link>
            </BottomWrapper>
        </>
    )
}

export default Login;
