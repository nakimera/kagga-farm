import styled from 'styled-components';

export const BottomWrapper = styled.div`
    background: ${props => props.orders ? '' : '#000000'};
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

    @media only screen and (min-width: 768px){
        align-items: center;
        a{
            width: unset;
        }
    }
`
