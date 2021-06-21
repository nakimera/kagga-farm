import React from 'react';
import styled from 'styled-components';

export const BottomWrapper = styled.div`
    background: #000000;
    height: ${props => props.height};
    text-align: ${props => props.center ? 'center' : ''};
    color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: calc(100% - 60px);
    padding: ${props => props.landing ? '' : '0 30px'};

    a{
        width: 100%;
    }
`

