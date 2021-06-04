import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  Chart,
  ChartTitle,
  ChartLegend,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

import 'hammerjs';

import data from './funnel-data.json';

const tooltipRender = (({ point = {} }) => (point.category));

const LFunnel = () => (
  <Chart style={{ margin: '0 auto', width: 300 }} >
    <ChartTitle text="Sales funnel" />
    <ChartSeries>
      <ChartSeriesItem type="funnel" data={data} categoryField="stat" field="count" colorField="color">
        <ChartSeriesLabels color="white" background="none" format="N0" />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartTooltip render={tooltipRender} />
    <ChartLegend visible={false} />
  </Chart>
);

export default LFunnel;