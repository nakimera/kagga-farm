import React from 'react';
import { BottomWrapper } from '../common';
import { Banner } from '../common/banner';

export function Login(){
    return(
        <>
            <Banner title='user login' />
            <BottomWrapper height='70%'></BottomWrapper>
        </>
    )
}

export default Login;
