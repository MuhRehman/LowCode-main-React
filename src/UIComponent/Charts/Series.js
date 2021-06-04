import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const seriesData = {
    one: [[10, 10], [15, 20], [20, 25], [32, 40], [43, 50], [55, 60], [60, 70], [70, 80], [90, 100]],
    two: [[10, 40], [17, 50], [18, 70], [35, 90], [47, 95], [60, 100]]
};

const LSeries = () => (
  <Chart>
    <ChartSeries>
      <ChartSeriesItem type="scatterLine" data={seriesData.one} />
      <ChartSeriesItem type="scatterLine" data={seriesData.two} />
    </ChartSeries>
  </Chart>
);

export default LSeries;