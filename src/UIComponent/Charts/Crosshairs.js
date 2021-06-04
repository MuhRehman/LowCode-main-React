import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartCategoryAxisCrosshair,
    ChartCategoryAxisCrosshairTooltip,
    ChartValueAxis,
    ChartValueAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const data = [1, 2, 3];
const categories = ['A', 'B', 'C'];
const crosshair = {
    visible: true,
    tooltip: {
        visible: true,
        format: '#.##'
    }
}

const CCrosshairs = () => (
  <Chart>
    <ChartCategoryAxis>
      <ChartCategoryAxisItem categories={categories}>
        <ChartCategoryAxisCrosshair>
          <ChartCategoryAxisCrosshairTooltip />
        </ChartCategoryAxisCrosshair>
      </ChartCategoryAxisItem>
    </ChartCategoryAxis>
    <ChartValueAxis>
      <ChartValueAxisItem crosshair={crosshair} />
    </ChartValueAxis>
    <ChartSeries>
      <ChartSeriesItem data={data} />
    </ChartSeries>
  </Chart>
);

export default CCrosshairs;