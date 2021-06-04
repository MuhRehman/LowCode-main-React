import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
    Chart,
    ChartTitle,
    ChartXAxis,
    ChartXAxisItem,
    ChartYAxis,
    ChartYAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

import data from './scatter-plot-data.json';

const LScatter = () => (
  <Chart>
    <ChartTitle text="Charge current vs. charge time" />
    <ChartSeries>
      <ChartSeriesItem
        type="scatter"
        data={data}
        xField="rainfall"
        yField="windSpeed"
            />
    </ChartSeries>
    <ChartXAxis>
      <ChartXAxisItem title={{ text: 'Wind Speed [km/h]' }} />
    </ChartXAxis>
    <ChartYAxis>
      <ChartYAxisItem title={{ text: 'Rainfall [mm]' }} />
    </ChartYAxis>
  </Chart>
);

export default LScatter;