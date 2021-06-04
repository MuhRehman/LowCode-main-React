import React from "react";
import "./general.scss";
import { Input } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const General = () => {
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
          <span className='item-title'>First Name</span>
          <Input defaultValue={'Saquib'} />
        </div>
        <div className='item-box'>
          <span className='item-title'>Last Name</span>
          <Input defaultValue={'Jawed'} />
        </div>
      </div>
      <div className='item-row'>
        <div className='item-box'>
          <span className='item-title'>Email ID</span>
          <Input defaultValue={'sjawed@varstreet.com'} />
        </div>
        <div className='item-box'>
          <span className='item-title'>Phone No.</span>
          <Input defaultValue={'31-March-2021'} />
        </div>
      </div>
      <div className='item-row'>
        <div className='item-box'>
          <span className='item-title'>Catalog</span>
          <DropDownList defaultValue="Default" data={sports} />
        </div>
        <div className='item-box'>
          <span className='item-title'>Sales Rep.</span>
          <DropDownList defaultValue="Santosh" data={sports} />
        </div>
      </div>
      <div className='item-row'>
        <div className='item-box'>
          <span className='item-title'>Company Name</span>
          <DropDownList defaultValue="VARStreet Inc." data={sports} />
        </div>
        <div className='item-box'>
          <span className='item-title'>Estimated Lead Time Option</span>
          <DropDownList defaultValue="Do Not Show Estimated Lead Time" data={sports} />
        </div>
      </div>
      <div className='item-row'>
        <div className='item-box'>
          <span className='item-title'>Store</span>
          <DropDownList defaultValue="RDemo Store" data={sports} />
        </div>
        <div className='item-box'>
          <span className='item-title'>Status</span>
          <DropDownList defaultValue="Active" data={sports} />
        </div>
      </div>
    </div>
  );
};

export default General
