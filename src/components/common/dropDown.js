import React from 'react';
import styled from 'styled-components';

const Label = styled.span`
    font-size: 18px;
    text-transform: capitalize;
    font-weight: 400;
    color: rgba(0,0,0,0.7);
`

const Select = styled.select`
    height: ${props => props.height ? props.height : '50px'};
    width: ${props => props.width ? props.width : '100%'};
    margin-top: 7px;
    border: solid 1px #000000;
    border-radius: 5px;
    padding-left: 8px;
    font-size: 16px;
    cursor: pointer;
`

export const DropDown = (props) =>  {

    const { options } = props;

    const Wrapper = styled.div`
        margin-top: ${props.mt ? props.mt : ' 10px'};
        margin-bottom: 15px;
        margin-right: ${props.mr};

        @media only screen and (min-width: 768px){
            width: 400px;
        }
    `

    return (
    <Wrapper>
        {props.label ? <Label>{props.label}</Label> : ''}
        <Select width={props.width} height={props.height} onChange={props.onChange}>
            {options.map((option => {
                return <option value={option} key={option}>{option}</option>
            }))}
        </Select>
    </Wrapper>
)
}

export default DropDown;
