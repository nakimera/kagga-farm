import styled from 'styled-components';

export const BottomWrapper = styled.div`
    background: ${props => props.orders ? '' : '#000000'};
    height: 70%;
    text-align: ${props => props.center ? 'center' : ''};
    color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    width: 100%;

    a{
        width: 100%;
    }

    @media only screen and (min-width: 768px){
        align-items: center;
        a{
            width: unset;
        }
    }
`
