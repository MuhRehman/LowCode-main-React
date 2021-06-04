import React from 'react';
import { DropDownButton } from '@progress/kendo-react-buttons';
const DropDownButtonComponent = () => {
  const items = ['My Profile', 'Friend Requests', 'Account Settings', 'Support', 'Log Out'];
  return <DropDownButton text="User Settings" items={items} />;
};

export default DropDownButtonComponent;
