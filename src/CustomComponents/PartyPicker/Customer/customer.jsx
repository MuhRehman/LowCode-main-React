import React from "react";
import "./customer.scss";

const Customer = ({ toggleDialog }) => {
  return (
    <div className="customer-wrap">
      <div className='card-wrap'>
        <p className='title'>Saquid Jawed for VARStreet Inc.</p>
        <p className='sub-title'>
          +1-8888 888 888
          <br />
          sjawed@varstreet.com
        </p>
        <p className='sub-title'>
          Blooming Dales, Opp. Jupiter Hospital
          <br />
          Pasadena, California, 35005, U.S.A
        </p>
        <div className='btn-grp'>
          <button onClick={toggleDialog}>
            Edit Customer
          </button>
          <button onClick={toggleDialog}>
            Change Customer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Customer;
