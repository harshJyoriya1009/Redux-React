import React from 'react'
import { useDispatch } from 'react-redux'
// import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { bindActionCreators } from 'redux';

const Shop = () => {
    const dispatch=useDispatch();
    const {withdrawMoney, depositMoney}=bindActionCreators(actionCreators, dispatch)
  return (
    <>
    <h3>Deposit / Withdraw Money</h3>
    {/* <button className="btn-primary mx-2" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button>
    Bank Balance
    <button className="btn-primary mx-2"onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</button> */}


    <button className="btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button>
    Bank Balance
    <button className="btn-primary mx-2"onClick={()=>{depositMoney(100)}}>+</button>
    </>
  )
}

export default Shop
