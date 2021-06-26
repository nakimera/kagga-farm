import React from 'react';
import { Link } from "react-router-dom";
import { Banner } from '../common/banner';
import { ButtonFixedBottom } from './index';
import { BottomWrapper } from '../common';
import { Button } from '../common/button';
import { DropDown } from '../common/dropDown';


export function PlaceOrder(){
    const NoOfTrays = [5,10,15,20,25,30,35];
    const LocationOptions = ['Kisasi', 'Kulambiro', 'Mengo', 'Najjera'];

    return(
        <>
            <Banner title='Order' orders />
            <BottomWrapper orders height='70%'>
                <DropDown 
                    mt='50px' 
                    label='Select Number of Trays' 
                    options={NoOfTrays} 
                />
                <DropDown
                    label='Select Location' 
                    options={LocationOptions}
                />
                <Button secondary>place order</Button>
            </BottomWrapper>
            <Link to='/omuguzi'>
                <ButtonFixedBottom tertiary>back to home</ButtonFixedBottom>
            </Link>
        </>
    )
}

export default PlaceOrder;
