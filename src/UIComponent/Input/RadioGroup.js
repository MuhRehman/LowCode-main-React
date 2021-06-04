import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { RadioGroup } from '@progress/kendo-react-inputs';

const LRadioGroup = () => {




const data = [
    { label: 'Female', value: 'female' },
    { label: 'Male', value: 'male' },
    { label: 'Other', value: 'other' }
];

return <RadioGroup data={data} />
};

export default LRadioGroup;
