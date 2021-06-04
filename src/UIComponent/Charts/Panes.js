import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartPanes,
    ChartPane,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const seriesData = [[1, 2, 3, 5], [0, 1, 0, 1]];

const LPanes = () => (
  <Chart>
    <ChartPanes>
      <ChartPane name="top" />
      <ChartPane name="bottom" height={100} />
    </ChartPanes>
    <ChartValueAxis>
      <ChartValueAxisItem name="top" />
      <ChartValueAxisItem name="bottom" pane="bottom" />
    </ChartValueAxis>
    <ChartSeries>
      <ChartSeriesItem data={seriesData[0]} />
      <ChartSeriesItem type="line" data={seriesData[1]} axis="bottom" />
    </ChartSeries>
  </Chart>
);

export default LPanes;