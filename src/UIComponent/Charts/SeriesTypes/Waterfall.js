import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Chart,
    ChartTitle,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels
} from '@progress/kendo-react-charts';

import 'hammerjs';

import data from './waterfall-data.json';

const pointColor = (point) => {
    let summary = point.dataItem.summary;

    if (summary) {
        return summary === 'total' ? '#555' : 'gray';
    }

    if (point.value > 0) {
        return 'green';
    } else {
        return 'red';
    }
};

const LWaterfall = () => (
  <Chart>
    <ChartTitle text="Cash flow" />
    <ChartSeries>
      <ChartSeriesItem
        type="waterfall"
        data={data}
        color={pointColor}
        field="amount"
        categoryField="period"
        summaryField="summary"
            >
        <ChartSeriesLabels format="C0" position="insideEnd" />
      </ChartSeriesItem>
    </ChartSeries>
    <ChartValueAxis>
      <ChartValueAxisItem title={{ format: 'C0' }} />
    </ChartValueAxis>
  </Chart>
);

export default LWaterfall;