import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const seriesData = [{ value: 2 }, { value: 4, extremum: "Max" }, { value: 3 }, { value: 1, extremum: "Min" }];

const LNotes = () => (
  <Chart>
    <ChartSeries>
      <ChartSeriesItem type="line" data={seriesData} field="value" noteTextField="extremum" />
    </ChartSeries>
  </Chart>
);

export default LNotes;