import React from 'react';
import styled from 'styled-components';

export const InputField = (props) =>  {

    const Wrapper = styled.div`
        margin-top: ${props.mt ? props.mt : ' 10px'};
        margin-bottom: 15px;

        @media only screen and (min-width: 768px){
            width: 400px;
        }
    `

    const Label = styled.span`
        font-size: 18px;
        text-transform: capitalize;
        color: ${props.dark ? 'rgba(0,0,0,0.7)' : 'white'};
        font-weight: ${props.dark ? '400' : '300'};
    `

    const Input = styled.input`
        height: 50px;
        width: 100%;
        margin-top: 7px;
        border: 0;
        border-radius: 5px;
        padding-left: 8px;
        font-size: 16px;
        border: solid 1px black;
    `

    return (
    <Wrapper>
        <Label>{props.label}</Label>
        <Input onChange={props.handleChange} value={props.value}></Input>
    </Wrapper>
)
}
