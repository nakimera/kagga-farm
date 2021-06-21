import React from 'react';
import styled from 'styled-components';

export const Title = styled.text`
    font-size: ${props => props.smaller ? '36px' : '40px'};
    font-weight: 800;
    text-align: ${props => props.center ? 'center' : ''};
`

export const Wrapper = styled.div`
    background: #000000;
    height: ${props => props.height};
    width: 100%;
    text-align: ${props => props.center ? 'center' : ''};
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    position: absolute;
    bottom: 0;

    a{
        width: 100%;
    }
`

export const Button = styled.button`
    height: 50px;
    width: 88%;
    background: ${props => props.secondary ? '#EF233C' : 'white'};
    border: none;
    text-transform: uppercase;
    color: ${props => props.secondary ? 'white' : '#EF233C'};;
    border-radius: 10px;
    font-size: 15px;
    font-weight: 200;
    margin-bottom: 10px;
    cursor: pointer;

    @media only screen and (min-width: 768px){
        width: 400px;
    }
`

