import React, { useState } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Banner } from '../common/banner';
import { ButtonFixedBottom } from './index';
import { Button } from '../common/button';
import { DropDown } from '../common/dropDown';

export const Wrapper = styled.div`
    color: black;
    padding: 20px 30px 60px 30px;

    @media only screen and (min-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`

const PriceLabel = styled.div`
    color: black;
    text-align: right;
    color: red;
    font-weight: 400;

    @media only screen and (min-width: 768px){
        width: 400px;
    }
`

const PriceTag = styled.div`
    color: rgba(0,0,0,0.4);
    margin-top: -7px;
    font-size: 14px;

    @media only screen and (min-width: 768px){
        width: 400px;
    }
`

export function PlaceOrder(){
    const priceTag = 7500;
    const NoOfTraysOptions = [0,5,10,15,20,25,30,35];
    const LocationOptions = ['Kisasi', 'Kulambiro', 'Mengo', 'Najjera'];
    const [selectedNumberOfTrays, setSelectedNumberOfTrays] = useState(0);
      
    return(
        <>
            <Banner title='Order' />
            <Wrapper orders>
                <PriceLabel>UGX {selectedNumberOfTrays * priceTag}</PriceLabel>
                <DropDown 
                    mt='40px' 
                    label='Select Number of Trays' 
                    options={NoOfTraysOptions} 
                    value={selectedNumberOfTrays}
                    onChange={e => setSelectedNumberOfTrays(e.target.value)}
                />
                <PriceTag>UGX {priceTag} a Tray</PriceTag>
                <DropDown
                    mt='30px'
                    label='Select Location' 
                    options={LocationOptions}
                />
                <Link to='/checkout'>
                    <Button secondary>checkout</Button>
                </Link>
            </Wrapper>
            <Link to='/omuguzi'>
                <ButtonFixedBottom tertiary>back to home</ButtonFixedBottom>
            </Link>
        </>
    )
}

export default PlaceOrder;
