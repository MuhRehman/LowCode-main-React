import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Chart,
    ChartTitle,
    ChartLegend,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

import data from './radar-data.json';

const LRadar = () => (
  <Chart>
    <ChartTitle text="Market Value of Major Banks /bln/" />
    <ChartSeries>
      <ChartSeriesItem
        type="radarLine"
        data={data}
        field="pre"
        categoryField="name"
        name="Market value as of 2007"
            />
      <ChartSeriesItem
        type="radarLine"
        data={data}
        field="post"
        categoryField="name"
        name="Market value as of 2009"
            />
    </ChartSeries>
    <ChartValueAxis>
      <ChartValueAxisItem labels={{ format: 'C0' }} />
    </ChartValueAxis>
    <ChartLegend position="bottom" />
  </Chart>
);

export default LRadar;