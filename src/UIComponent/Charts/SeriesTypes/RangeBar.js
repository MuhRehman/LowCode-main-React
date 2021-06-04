import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
    Chart,
    ChartTitle,
    ChartTooltip,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem,
    ChartSeriesLabels,
    ChartSeriesLabelsFrom,
    ChartSeriesLabelsTo
} from '@progress/kendo-react-charts';

import 'hammerjs';

import data from './rangebar-data.json';

const tooltipRender = ({ point = {} }) => (<div>
  Avg Min Temp : { point.value && point.value.from } °C
  <br/>
  Avg Max Temp : { point.value && point.value.to } °C"
</div>);

const labelContentFrom = (e) => (`${ e.value.from } °C`);
const labelContentTo = (e) => (`${ e.value.to } °C`);

const LRangeBar = () => (
  <Chart>
    <ChartTitle text="Average Weather Conditions" />
    <ChartSeries>
      <ChartSeriesItem
        type="rangeColumn"
        data={data}
        fromField="min"
        toField="max"
        categoryField="month"
            >
        <ChartSeriesLabels>
          <ChartSeriesLabelsFrom content={labelContentFrom} />
          <ChartSeriesLabelsTo content={labelContentTo} />
        </ChartSeriesLabels>
      </ChartSeriesItem>
    </ChartSeries>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem labels={{ rotation: 'auto' }} />
    </ChartCategoryAxis>
    <ChartTooltip render={tooltipRender} />
  </Chart>
);

export default LRangeBar;