import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DatePicker } from '@progress/kendo-react-dateinputs';

export const LDatePicker = () => {
  return <DatePicker defaultValue={new Date()} defaultShow={true} />
};

export default LDatePicker;
