import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const seriesData = [20, 40, 45, 30, 50];
const categories = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

const LAxess = () => (
  <Chart>
    <ChartValueAxis>
      <ChartValueAxisItem title={{ text: "Miles" }} min={0} max={100} />
    </ChartValueAxis>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={categories} />
    </ChartCategoryAxis>
    <ChartSeries>
      <ChartSeriesItem data={seriesData} type="line" />
    </ChartSeries>
  </Chart>
);

export default LAxess;