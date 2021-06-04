import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const categoryPlotBands = [{
    from: 1,
    to: 2,
    color: '#ffd246',
    opacity: 0.8
}];

const valuePlotBands = [{
    from: 2,
    to: 3,
    color: '#78d237',
    opacity: 0.8
}];

const LPlotBands = () => (
  <Chart>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={['A', 'B', 'C']} plotBands={categoryPlotBands} />
    </ChartCategoryAxis>
    <ChartValueAxis>
      <ChartValueAxisItem plotBands={valuePlotBands} />
    </ChartValueAxis>
    <ChartSeries>
      <ChartSeriesItem data={[1, 2, 3]} />
    </ChartSeries>
  </Chart>
);

export default LPlotBands;