import React from 'react';
import { Link } from "react-router-dom";
import { BottomWrapper } from '../common';
import { Banner } from '../common/banner';
import { InputField } from '../common/textInput';
import { Button } from '../common/button';
import { Label } from './login';

export function Signup(){
    return(
        <>
            <Banner title='create account' />
            <BottomWrapper height='70%'>
                <InputField label='client name' mt='70px' />
                <InputField label='phone number' />
                <Link to='/omuguzi'>
                    <Button secondary>create account</Button>
                </Link>
                <Link to='/login'>
                    <Label>Already have an account? Signin</Label>
                </Link>
            </BottomWrapper>
        </>
    )
}

export default Signup;
