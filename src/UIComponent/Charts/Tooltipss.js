import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartTooltip,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesItemTooltip
} from '@progress/kendo-react-charts';

import 'hammerjs';

const seriesData = [1, 2, 3];

const LTooltipss = () => (
  <Chart>
    <ChartTooltip />
    <ChartSeries>
      <ChartSeriesItem data={seriesData} />
      <ChartSeriesItem data={seriesData}>
        <ChartSeriesItemTooltip background="green" />
      </ChartSeriesItem>
    </ChartSeries>
  </Chart>
);

export default LTooltipss;