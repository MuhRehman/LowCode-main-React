import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartLegend,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const seriesData = [1, 2, 3, 5];
const LLegend = () => (
  <Chart>
    <ChartLegend position="bottom" orientation="horizontal" />
    <ChartSeries>
      <ChartSeriesItem name="Fibonacci" data={seriesData} />
    </ChartSeries>
  </Chart>
);

export default LLegend;