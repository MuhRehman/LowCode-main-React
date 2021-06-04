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
    ChartSeriesItem,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';

import 'hammerjs';

import data from './polar-data.json';

const labelContent = (e) => (`${ e.dataItem.time.substring(0, 2) }h`);

const LPolar = () => (
  <Chart>
    <ChartTitle text="Sun position at equinox" />
    <ChartSeries>
      <ChartSeriesItem
        type="polarLine"
        data={data}
        xField="azimuth"
        yField="altitude"
            >
        <ChartSeriesLabels position="below" content={labelContent} />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartXAxis>
      <ChartXAxisItem startAngle={-90} majorUnit={30} />
    </ChartXAxis>
    <ChartYAxis>
      <ChartYAxisItem labels={{ visible: false }} />
    </ChartYAxis>
  </Chart>
);

export default LPolar;