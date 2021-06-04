import React, { useState } from "react";
import "./payment.scss";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { BsSearch } from "react-icons/bs";
import { Checkbox, Input } from "@progress/kendo-react-inputs";

const Payment = () => {
  const sports = ["Baseball", "Basketball", "Cricket", "Football"];
  const [paymentMethod,setPaymentMethod]=useState([
      {label:"Payment method 1",checked:true},
      {label:"Payment method 2",checked:true},
      {label:"Payment method 3",checked:true},
      {label:"Payment method 4",checked:false},
      {label:"Payment method 5",checked:true},
      {label:"Payment method 6",checked:false},
      {label:"Payment method 7",checked:false},
      {label:"Payment method 8",checked:true},
      {label:"Payment method 9",checked:true},
  ])

  const onCheck=(e,index)=>{
      let m=[...paymentMethod]
      m[index].checked=e.target.checked
      setPaymentMethod(m)
  }

  return (
    <div className="general-wrap">
      <div className="item-row">
        <div className="item-box">
          <span className="item-title">Price List</span>
          <DropDownList  defaultValue="Same as billing" data={sports} />
        </div>
      </div>
      <div className="item-row">
        <div className="item-box">
          <span className="item-title">Default Payment Method</span>
          <DropDownList defaultValue="Credit Card" data={sports} />
        </div>
        <div className="item-box">
          <span className="item-title">Default Delivery Method</span>
          <DropDownList defaultValue="FedX 1 day Delivery" data={sports} />
        </div>
      </div>
      <div className="item-row">
        <div className="item-box">
          <span className="item-title">Allowed Payment Method</span>
          <div className='search-wrap'>
            <div className='search-content'>
                <BsSearch className='search-icon' />
                <Input placeholder={'Search template..'} />
            </div>
            <div className='options-wrap'>
                {paymentMethod.map((item,index)=>(
                    <Checkbox checked={item.checked} onChange={(e)=>onCheck(e,index)}  className='method'label={item.label} />
                ))}
            </div>
          </div>
        </div>
        <div className="item-box">
          <span className="item-title">Allowed Delivery Method</span>
          <div className='search-wrap'>
            <div className='search-content'>
                <BsSearch className='search-icon' />
                <Input placeholder={'Search template..'} />
            </div>
            <div className='options-wrap'>
                {paymentMethod.map((item,index)=>(
                    <Checkbox checked={item.checked} onChange={(e)=>onCheck(e,index)}  className='method'label={item.label} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
