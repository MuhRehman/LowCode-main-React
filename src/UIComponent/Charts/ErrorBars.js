import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const data = [
    { value: 4.743, low: 4.5, high: 5 },
    { value: 7.295, low: 7, high: 8 },
    { value: 6.376, low: 5, high: 6.5 }
];

const LErrorBars = () => (
  <Chart>
    <ChartSeries>
      <ChartSeriesItem type="line" data={data} field="value" errorLowField="low" errorHighField="high" />
    </ChartSeries>
  </Chart>
);

export default LErrorBars;