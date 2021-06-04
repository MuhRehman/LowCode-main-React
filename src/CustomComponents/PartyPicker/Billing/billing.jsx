import React from "react";
import "./billing.scss";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const Billing = (props) => {
  const sports = [
    "Baseball",
    "Basketball",
    "Cricket",
    "Football"
  ];
  return (
    <div className='general-wrap'>
      <div className='item-row'>
        <div className='item-box'>
        <span className='item-title'>Select Address</span>
          <DropDownList defaultValue={props?.shipping?"Same as billing":"Name of the address"} data={sports} />
        </div>
        <div className='item-box'>
          <span className='item-title'>Address Line 1</span>
          <Input defaultValue={'Address Line 1'} />
        </div>
      </div>
      <div className='item-row'>
        <div className='item-box'>
        <span className='item-title'>Address Line 2</span>
          <Input defaultValue={'Address Line 2'} />
        </div>
        <div className='item-box'>
        <span className='item-title'>Address Line 2</span>
          <Input defaultValue={'Address Line 2'} />
        </div>
      </div>
      <div className='item-row'>
        <div className='item-box'>
          <span className='item-title'>City</span>
          <DropDownList defaultValue="Pasadena" data={sports} />
        </div>
        <div className='item-box'>
          <span className='item-title'>State</span>
          <DropDownList defaultValue="California" data={sports} />
        </div>
      </div>
      <div className='item-row'>
        <div className='item-box'>
          <span className='item-title'>Country</span>
          <DropDownList defaultValue="United States" data={sports} />
        </div>
        <div className='item-box'>
          <span className='item-title'>Zip</span>
          <DropDownList defaultValue="11045" data={sports} />
        </div>
      </div>
      <div className='item-row'>
        <div className='item-box'>
          <span className='item-title'>Phone Number</span>
          <DropDownList defaultValue="+1 9999999999" data={sports} />
        </div>
      </div>
    </div>
  );
};

export default Billing
