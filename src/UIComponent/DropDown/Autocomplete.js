
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { AutoComplete } from '@progress/kendo-react-dropdowns';
import countries from './Countries';

export const LAutoComplete = (props) => {
  return <AutoComplete data={countries} placeholder="Type" />
};


