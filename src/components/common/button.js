import styled from 'styled-components';

export const Button = styled.button`
    height: 50px;
    width: 100%;
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
