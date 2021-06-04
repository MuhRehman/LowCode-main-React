import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Chart,
    ChartSeries,
    ChartSeriesItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const categories = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri' ];
const seriesData = [ 20, 40, 45, 30, 50 ];
const valueAxisLabels = {
    padding: 3,
    font: 'bold 16px Arial, sans-serif'
};
const LLabels = () => (
  <Chart>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={categories} labels={{ color: '#0a0' }} />
    </ChartCategoryAxis>
    <ChartValueAxis>
      <ChartValueAxisItem labels={valueAxisLabels} />
    </ChartValueAxis>
    <ChartSeries>
      <ChartSeriesItem type="line" data={seriesData} />
    </ChartSeries>
  </Chart>
);

export default LLabels;