import React from 'react';
import styled from 'styled-components';
import BgImage from '../../assets/cropped.png';

const BannerImage = () => {
    const Image = styled.img`
        width: 100%;
        height: 100%;
        object-fit: cover;
    `

    return(
        <Image src={BgImage} />
    )
}

export const Banner = (props) => {

    const Wrapper = styled.div`
        width: 100%;
        position: relative;
        height: ${props.height ? props.height : props.landing ? '40vh' : '30vh'};
    `

    const Gradient = styled.div`
        width: 100%;
        height: ${props.landing ? '95%' : '100%'};
        position: absolute;
        bottom: 0;
        background: none;
        background-image: linear-gradient(0deg, black, ${props.landing ? 'rgba(0,0,0,0)' : 'rgba(0,0,0,0.5)'});
    `

    const BannerText = styled.div`
        position: absolute;
        bottom: 0;
        z-index: 2;
        display: flex;
        flex-direction: column;
        padding: ${props.landing ? '' : '30px'};
        width: ${props.landing ? '100%' : 'calc(100% - 60px)'};
        text-align: ${props.landing ? 'center' : ''};

        @media only screen and (min-width: 768px){
            align-items: center;
        }
    `

    const PageTitle = styled.span`
        color: #EF233C;
        font-size: 22px;
        font-weight: 600;
        text-transform: capitalize;
        margin-top: 10px;
    `

    const Header = styled.text`
        font-size: ${props.smaller ? '36px' : '40px'};
        font-weight: 800;
        text-align: ${props.center ? 'center' : ''};
        color: white;
        text-align: ${props.landing ? 'center' : ''};
    `

    return (
        <Wrapper>
            <BannerImage />
            <Gradient />
            <BannerText>
                <Header>Kagga Farm Marketplace</Header>
                <PageTitle>{props.title}</PageTitle>
            </BannerText>
            
        </Wrapper>
    )
}
