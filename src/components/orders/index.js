import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { Banner } from '../common/banner';
import { Button } from '../common/button';
import { BottomWrapper } from '../common';

export const ButtonFixedBottom = styled(Button)`
    width: 100%;
    border-radius: 0;
    position: fixed;
    bottom: 0;
    margin-bottom: 0;
    background: ${props => props.tertiary ? 'rgba(0,0,0,0.08)' : ''};
    color: ${props => props.tertiary ? 'rgba(0,0,0,0.65)' : ''};

    @media only screen and (max-height: 670px){
        position: ${props => props.unset ? 'unset' : 'fixed'};
    }
`

const Heading = styled.div`
    margin-top: 20px;
    padding: 30px 0 25px 0;
    color: black;
    text-transform: uppercase;
    font-size: 18px;
    border-bottom: solid 1px rgba(0,0,0,0.15);
    width: 100%;
`

const ListItem = styled.div`
    display: flex;
    border-bottom: solid 1px rgba(0,0,0,0.15);
    justify-content: space-between;
    padding: 20px 0;
    color: black;
    width: 100%;

    :last-child{
        padding-bottom: ${props => props.noOfOrders > 5 ? '70px' : ''};
    }

    span{
        font-size: 16px;
        color: rgba(0,0,0,0.45);
    }

    h3{
        margin-top: 0;
        margin-bottom: 5px;
        font-weight: 400;
    }
`

export function Home(){

    const orders = [
        {noOfTrays: 5, amount: '30,000', date: 'Today'},
        {noOfTrays: 12, amount: '125,000', date: '2 days ago'},
        {noOfTrays: 5, amount: '30,000', date: 'A week ago'},
        {noOfTrays: 6, amount: '35,000', date: 'Last Month'},
        {noOfTrays: 5, amount: '30,000', date: 'Last Month'},
        {noOfTrays: 12, amount: '125,000', date: '2 Months ago'},
        {noOfTrays: 5, amount: '30,000', date: '5 months ago'},
        {noOfTrays: 6, amount: '35,000', date: 'A year ago'},
    ]

    return(
        <>
            <Banner title='Home' />
            <BottomWrapper orders height='70%'>
                <Heading>my recent orders</Heading>
                {orders.map((order, index) => {
                    return(
                        <ListItem key={index} noOfOrders={orders.length}>
                            <div>
                                <h3>{order.amount} UGX</h3>
                                <span>{order.noOfTrays} Trays</span>
                            </div>
                            <span>{order.date}</span>
                        </ListItem>
                    )
                })}
            </BottomWrapper>
            <Link to='/order'>
                <ButtonFixedBottom secondary>Place Order</ButtonFixedBottom>
            </Link>
        </>
    )
}

export default Home;
