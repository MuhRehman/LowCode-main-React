import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  Chart,
  ChartLegend,
  ChartSeries,
  ChartSeriesItem,
  ChartSeriesLabels
} from '@progress/kendo-react-charts';

import 'hammerjs';

import data from './power-distribution-data.json';

const labelContent = (e) => (e.category);

const LDonut = () => (
  <Chart>
    <ChartSeries>
      <ChartSeriesItem type="donut" data={data} categoryField="kind" field="share">
        <ChartSeriesLabels color="#fff" background="none" content={labelContent} />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartLegend visible={false} />
  </Chart>
);

export default LDonut;
