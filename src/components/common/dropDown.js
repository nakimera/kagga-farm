import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 400;
    color: rgba(0,0,0,0.7);
`

const Select = styled.select`
    height: 50px;
    width: 100%;
    margin-top: 7px;
    border: solid 1px #000000;
    border-radius: 5px;
    padding-left: 8px;
    font-size: 16px;
`

export const DropDown = (props) =>  {

    const { options } = props;

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
        <Select>
            {options.map((option => {
                return <option value={option}>{option}</option>
            }))}
        </Select>
    </Wrapper>
)
}

export default DropDown;
