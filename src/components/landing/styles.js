import styled from 'styled-components';

export const MainWrapper = styled.div`
    h2{
        text-align: center;
        font-size: 32px;
        margin-top: 50px;
    }
`

export const Banner = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    color: white;
    text-align: center;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    z-index: 0;
    object-fit: cover;
`

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    position: absolute;
    top: 0;
    background: rgba(0,0,0,0.85);
`

export const MiddleContainer = styled.div`
    width: 100%;
    height: 100%;
    z-index: 2;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 46px;
        font-weight: 800;
        text-transform: capitalize;
        margin-bottom: 15px;
    }

    span{
        font-size: 20px;
        font-weight: 200;
    }
`

export const Button = styled.button`
    height: ${props => props.height ? props.height : '50px'};
    border-radius: 25px;
    text-transform: ${props => props.secondary ? '' : 'uppercase'};
    border: none;
    cursor: pointer;
    font-size: 14px;
    margin-top: ${props => props.mt};
    width: ${props => props.width ? props.width : '100%'};
    background: ${props => props.secondary ? 'black' : props.tertiary ? 'white' : '#FDC500'};
    border: ${props => props.tertiary ? 'solid 2px' : ''};
    color: ${props => props.secondary ? 'white' : ''};
`


export const TopBar = styled.div`
    z-index: 3;
    position: absolute;
    top: 20px;
    right: 30px;
    cursor: pointer;
    font-weight: 400;

    span{
        text-transform: capitalize;
        margin-right: 40px;
    }
`

export const AboutUsSection = styled.div`
    width: 100%;
    border-bottom: solid 1px rgba(0,0,0,0.1);
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 60px;

    .container{
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        justify-content: space-between;
        margin-top: 30px;

        img{
            width: 100%;
            object-fit: cover;
            height: 400px;

            @media only screen and (min-width: 768px){
                width: 44%;
            }
        }

        div{
            width: 100%;
            text-align: left;

            @media only screen and (min-width: 768px){
                width: 52%;
            }

            h3{
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 30px;
            }

            p{
                font-size: 20px;
                font-weight: 300;
            }
        }
    }

`

export const DeliveriesSection = styled.div`
    color: black;
    height: 60vh;
`

export const Footer = styled.div`
    background: #FDC500;
    padding: 40px 0 15px 0;
    color: black;

    .wrapper{
        display: flex;
        margin: 0 40px;
        flex-wrap: wrap;
        justify-content: space-between;

        div{
            width: 100%;

            @media only screen and (min-width: 768px){
                width: unset;
            }
        }

        .right{
            @media only screen and (min-width: 768px){
                text-align: right;
            }
        }
    }
`
