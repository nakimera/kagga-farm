import React from 'react';
import { BottomWrapper } from '../common';
import { Banner } from '../common/banner';
import { InputField } from '../common/textInput';

export function Signup(){
    return(
        <>
            <Banner title='create account' />
            <BottomWrapper height='70%'>
                <InputField label='client name' />
            </BottomWrapper>
        </>
    )
}

export default Signup;
