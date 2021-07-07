import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Banner } from '../common/banner';
import { ButtonFixedBottom } from './index';
import { Button } from '../common/button';
import { Wrapper } from './order';

const BottomWrapper = styled(Wrapper)`
    padding: 40px 30px 60px 30px;
`

const Heading = styled.div`
    color: rgba(0,0,0,1);
    font-size: 16px;
    font-weight: bold;
    padding-bottom: 10px;
`

const SubHeading = styled.div`
    margin-bottom: 20px;
`

const Column = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;

    @media only screen and (min-width: 768px){
        width: 400px;
    }
`

const TotalColum = styled(Column)`
    font-weight:bold;
    text-tranform: uppercase;
    font-size: 18px;
    margin-bottom: 25px;
`

const PaymentOption = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;

    input[type="radio"] {
        height: 20px;
        width: 20px;    
    }

    @media only screen and (min-width: 768px){
        width: 400px;
    }
`

export function Checkout(){      

    return(
        <>
            <Banner title='Checkout' height='15vh' smaller />
            <BottomWrapper>
                <Heading>Receipt</Heading>
                <Column>
                    <div>Sub-Total</div>
                    <div>UGX100,000</div>
                </Column>
                <Column>
                    <div>Quantity</div>
                    <div>5 Trays</div>
                </Column>
                <Column>
                    <div>Delivery Fee</div>
                    <div>Free</div>
                </Column>
                <TotalColum>
                    <div>TOTAL</div>
                    <div>UGX100,000</div>
                </TotalColum>
                <Heading>Payment method</Heading>
                <SubHeading>Choose a payment method</SubHeading>
                <PaymentOption>
                    <div>Airtel Money</div>
                    <input type="radio" checked="checked" name="radio"></input>
                </PaymentOption>
                <PaymentOption>
                    <div>MTN Mobile Money</div>
                    <input type="radio" name="radio"></input>
                </PaymentOption>
                <PaymentOption>
                    <div>Cash on Delivery</div>
                    <input type="radio" name="radio"></input>
                </PaymentOption>
                <Link to='/omuguzi'>
                    <Button mt='20px' mb='30px' secondary>make payment</Button>
                </Link>
                <span>
                    <b>Note: </b>Goods sold cannot be returned
                </span>
            </BottomWrapper>
            <Link to='/order'>
                <ButtonFixedBottom tertiary unset>back</ButtonFixedBottom>
            </Link>
        </>
    )
}

export default Checkout;
