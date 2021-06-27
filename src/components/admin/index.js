import React from 'react';
import { MainWrapper, RightWrapper, Banner, TopBar, ListWrapper, ListColumn } from './styles';
import { DropDown} from '../common/dropDown';

export function AdminPanel(){

    const orders = [
        {orderNo: 'KFM1', noOfTrays: 5, amount: '30,000', date: '9-06-2021', contact: '0700256256', location: 'Kisasi', status: 'pending'},
        {orderNo: 'KFM2', noOfTrays: 12, amount: '125,000', date: '9-06-2021', contact: '0700256257', location: 'Kisasi', status: 'pending'},
        {orderNo: 'KFM3', noOfTrays: 5, amount: '30,000', date: '9-06-2021', contact: '0770256256', location: 'Mengo', status: 'cancelled'},
        {orderNo: 'KFM4', noOfTrays: 6, amount: '35,000', date: '10-06-2021', contact: '0770258986', location: 'Najjera', status: 'completed'},
        {orderNo: 'KFM5', noOfTrays: 5, amount: '30,000', date: '10-06-2021', contact: '0770256256', location: 'Mengo', status: 'completed'},
        {orderNo: 'KFM6', noOfTrays: 12, amount: '125,000', date: '10-06-2021', contact: '0770256256', location: 'Mengo', status: 'completed'},
        {orderNo: 'KFM7', noOfTrays: 5, amount: '30,000', date: '12-06-2021', contact: '0770256256', location: 'Kulambiro', status: 'completed'},
        {orderNo: 'KFM8', noOfTrays: 6, amount: '35,000', date: '13-06-2021', contact: '0770256256', location: 'Najjera', status: 'cancelled'},
        {orderNo: 'KFM9', noOfTrays: 5, amount: '30,000', date: '9-06-2021', contact: '0700256256', location: 'Kisasi', status: 'pending'},
        {orderNo: 'KFM10', noOfTrays: 12, amount: '125,000', date: '9-06-2021', contact: '0700256257', location: 'Kisasi', status: 'pending'},
        {orderNo: 'KFM13', noOfTrays: 5, amount: '30,000', date: '9-06-2021', contact: '0770256256', location: 'Mengo', status: 'completed'},
        {orderNo: 'KFM14', noOfTrays: 6, amount: '35,000', date: '10-06-2021', contact: '0770258986', location: 'Najjera', status: 'cancelled'},
        {orderNo: 'KFM15', noOfTrays: 5, amount: '30,000', date: '10-06-2021', contact: '0770256256', location: 'Mengo', status: 'completed'},
        {orderNo: 'KFM16', noOfTrays: 12, amount: '125,000', date: '10-06-2021', contact: '0770256256', location: 'Mengo', status: 'completed'},
        {orderNo: 'KFM17', noOfTrays: 5, amount: '30,000', date: '12-06-2021', contact: '0770256256', location: 'Kulambiro', status: 'completed'},
        {orderNo: 'KFM18', noOfTrays: 6, amount: '35,000', date: '13-06-2021', contact: '0770256256', location: 'Najjera', status: 'cancelled'},
    ]

    const filters = ['Date Added', 'Location', 'Pending', 'Completed', 'Cancelled']

    return(
        <MainWrapper>
            <Banner />
            <RightWrapper>
                <TopBar>
                    <div />
                    <div>
                        <span>Filter by: </span>
                        <DropDown options={filters} width='150px' height='35px' mr='30px' />
                    </div>
                </TopBar>
                <ListWrapper>
                    <ListColumn rows='7' title>
                        <div>Order Number</div>
                        <div>No of Trays</div>
                        <div>Amount(UGX)</div>
                        <div>Date</div>
                        <div>Contact</div>
                        <div>Location</div>
                        <div>Status</div>
                    </ListColumn>
                    {orders.map((order, index) => {
                        return(
                            <ListColumn rows='7' status={order.status}>
                                <div>{order.orderNo}</div>
                                <div>{order.noOfTrays}</div>
                                <div>{order.amount}</div>
                                <div>{order.date}</div>
                                <div>{order.contact}</div>
                                <div>{order.location}</div>
                                <div>{order.status}{order.status === 'pending' ? ' ...' : ''}</div>
                            </ListColumn>
                        )
                    })}
            </ListWrapper>
            </RightWrapper>            
        </MainWrapper>
    )
}

export default AdminPanel;
