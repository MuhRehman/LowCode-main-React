import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartArea,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const data = [1, 2, 3, 5];
const LChartArea = () => (
  <Chart>
    <ChartArea background="#eee" margin={30} />
    <ChartSeries>
      <ChartSeriesItem data={data} name="Fibonacci" />
    </ChartSeries>
  </Chart>
);

export default LChartArea;