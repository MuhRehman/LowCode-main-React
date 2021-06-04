import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import data from './box-plot-data.json';

import 'hammerjs';

const LBoxPlot = () => (
  <Chart>
    <ChartTitle text="Monthly Mean Temperatures (&deg;F)" />
    <ChartSeries>
      <ChartSeriesItem
        type="boxPlot"
        lowerField="lower"
        q1Field="q1"
        medianField="median"
        q3Field="q3"
        upperField="upper"
        outliersField="outliers"
        meanField="mean"
        categoryField="year"
        data={data}
            />
    </ChartSeries>
  </Chart>
);

export default LBoxPlot;