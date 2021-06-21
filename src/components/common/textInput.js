import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
    font-size: 16px;
    text-transform: capitalize;
    color: white;
`

export const InputField = (props) => (
    <>
        <Label>{props.label}</Label>
    </>
)
