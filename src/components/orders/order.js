import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Banner } from '../common/banner';
import { ButtonFixedBottom } from './index';
import { Button } from '../common/button';
import { DropDown } from '../common/dropDown';
import { InputField } from '../common/textInput';

export const Wrapper = styled.div`
    color: black;
    padding: 20px 30px 60px 30px;

    span{
        color: rgba(0,0,0,0.5);
        line-height: 1.5;
    }

    @media only screen and (min-width: 768px){
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;

        span{
            width: 400px;
        }
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

const CheckBox = styled.div`
    margin-bottom: 25px;
    margin-top: 10px;

    label{
        margin-left: 5px;
        font-size: 18px;
        color: rgba(0,0,0,0.5);
    }

    @media only screen and (min-width: 768px){
        width: 400px;
    }
`

export function PlaceOrder(){
    const priceTag = 7500;
    const numberOfTrays = 0;
    const LocationOptions = ['Kisasi', 'Kulambiro', 'Mengo', 'Najjera'];
    // const [numberOfTrays, setNumberOfTrays] = useState('');
      
    return(
        <>
            <Banner title='Order' />
            <Wrapper orders>
                <PriceLabel>UGX {numberOfTrays * priceTag}</PriceLabel>
                <InputField dark
                    label='Number of Trays' 
                    // value = {numberOfTrays}
                    // handleChange={(e) => setNumberOfTrays(e.target.value)}
                />
                <PriceTag>UGX {priceTag} a Tray</PriceTag>
                <DropDown
                    mt='25px'
                    label='Select Location' 
                    options={LocationOptions}
                />
                <CheckBox>
                    <input type="checkbox" id="hasTrays" name="hasTrays" value="no" />
                    <label for="hasTrays"> Add empty trays to my order</label>
                </CheckBox>
                <Link to='/checkout'>
                    <Button secondary  mb='20px'>checkout</Button>
                </Link>
                <span>
                    <b>Note: </b>All purchased empty trays will be charged at <b>UGX2,000</b> each
                </span>
            </Wrapper>
            <Link to='/omuguzi'>
                <ButtonFixedBottom tertiary>back to home</ButtonFixedBottom>
            </Link>
        </>
    )
}

export default PlaceOrder;
