import React from 'react';
import styled from 'styled-components';
import BgImage from '../../assets/cropped.png';

export const MainWrapper = styled.div`
    display: flex;
`

export const RightWrapper = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    overflow-y: auto;
    height: 100vh;
    overflow: auto;
`

export const Column = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;

    div{
        width: ${props => props.rows ? `calc(100% / ${props.rows})` : ''};
    }
`

export const TopBar = styled(Column)`
    padding: 10px 0;
    border-bottom: solid 1px rgba(0,0,0,0.1);

    div{
        display: inline;
    }
`

export const ListColumn = styled(Column)`
    padding: 20px 25px;
    font-weight: ${props => props.title ? '500' : ''};

    :nth-child(even){
        background: rgba(196, 196, 196, 0.2);
    }
`

export const Banner = () => {

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

    const Wrapper = styled.div`
        width: 20%;
        position: relative;
        height: 100vh;
    `

    const Gradient = styled.div`
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        background: none;
        background-image: linear-gradient(180deg, black, rgba(0,0,0,0.5));
    `

    const BannerText = styled.div`
        position: absolute;
        top: 30px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        padding: 0 30px;
        width: calc(100% - 60px);
    `

    const PageTitle = styled.span`
        color: #EF233C;
        font-size: 22px;
        font-weight: 600;
        text-transform: capitalize;
        margin-top: 10px;
    `

    const Header = styled.text`
        font-size: 36px;
        font-weight: 800;
        color: white;
    `

    return (
        <Wrapper>
            <BannerImage />
            <Gradient />
            <BannerText>
                <Header>Kagga Farm Marketplace</Header>
                <PageTitle>Admin</PageTitle>
            </BannerText>
            
        </Wrapper>
    )
}
