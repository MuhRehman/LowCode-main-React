import React from 'react';
import { RadioButton } from '@progress/kendo-react-inputs';

const LRadioButton = () => {
  const [selectedValue, setSelectedValue] = React.useState('1');

    const handleChange = React.useCallback(
        (e) => {
            setSelectedValue(e.value);
        },
        [setSelectedValue]
    );
  return (
    
     <>
        <RadioButton name="group1" value="first" checked={selectedValue === '1'} label="1" onChange={handleChange} />
        <br />
        <RadioButton name="group1" value="second" checked={selectedValue === '2'} label="2" onChange={handleChange} />
        <br />
        <RadioButton name="group1" value="third" checked={selectedValue === '3'} label="3" onChange={handleChange} />
    
    </>
  );
};

export default LRadioButton;
