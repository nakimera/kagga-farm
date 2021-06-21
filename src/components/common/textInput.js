import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
    font-size: 18px;
    text-transform: capitalize;
    color: white;
    font-weight: 300;
`

const Input = styled.input`
    height: 50px;
    width: 100%;
    margin-top: 7px;
    background: rgba(256,256,256,0.75);
    border: 0;
    border-radius: 5px;
`

export const InputField = (props) =>  {

    const Wrapper = styled.div`
        margin-top: ${props.mt ? props.mt : ' 10px'};
        margin-bottom: 15px;

        @media only screen and (min-width: 768px){
            width: 400px;
        }
    `

    return (
    <Wrapper>
        <Label>{props.label}</Label>
        <Input></Input>
    </Wrapper>
)
}
