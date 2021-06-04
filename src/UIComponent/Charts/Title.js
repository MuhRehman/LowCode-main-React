import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartTitle
} from '@progress/kendo-react-charts';

import 'hammerjs';

const LTitle = () => (
  <Chart>
    <ChartTitle text="A Lovely Title" color="blue" background="#ccff00" font="19pt sans-serif" />
  </Chart>
);

export default LTitle; 