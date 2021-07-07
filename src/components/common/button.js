import styled from 'styled-components';

export const Button = styled.button`
    height: 50px;
    width: 100%;
    background: ${props => props.secondary ? '#FDC500' : 'white'};
    border: none;
    text-transform: uppercase;
    color: ${props => props.secondary ? 'black' : '#FDC500'};
    border-radius: 10px;
    font-size: 15px;
    font-weight: 200;
    margin-bottom: ${props => props.mb ? props.mb : '10px'};
    cursor: pointer;
    margin-top: ${props => props.mt};

    @media only screen and (min-width: 768px){
        width: 400px;
    }
`
