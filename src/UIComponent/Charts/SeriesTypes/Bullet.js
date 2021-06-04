import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  Chart,
  ChartTitle,
  ChartTooltip,
  ChartSeries,
  ChartSeriesItem,
  ChartCategoryAxis,
  ChartCategoryAxisItem,
  ChartValueAxis,
  ChartValueAxisItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const LBullet = () => {
  const hidden = { visible: false };
  const tempPlotBands = [{
      from: 30, to: 45, color: '#e62325', opacity: 1
  }, {
      from: 15, to: 30, color: '#ffc000', opacity: 1
  }, {
      from: 0, to: 15, color: '#37b400', opacity: 1
  }, {
      from: -10, to: 0, color: '#5392ff', opacity: 1
  }];
  const humPlotBands = [{
      from: 0, to: 33, color: '#ccc', opacity: .6
  }, {
      from: 33, to: 66, color: '#ccc', opacity: .3
  }];
  const mmhgPlotBands = [{
      from: 715, to: 752, color: '#ccc', opacity: .6
  }, {
      from: 752, to: 772, color: '#ccc', opacity: .3
  }];
  const temp = [[25, 22]];
  const hum = [[45, 60]];
  const mmhg = [[750, 762]];

  const tooltipRender = ({ point }) => {
    const { value } = point;

    return (
      <span>
        Maximum: { value.target }
        <br />
        Average: { value.current }
      </span>
    )
  };

  return (
    <div>

      <Chart style={{ height: 120 }} >
        <ChartTitle text="Temperature [&deg;C]" />
        <ChartSeries>
          <ChartSeriesItem type="bullet" color="#fff" data={temp} />
        </ChartSeries>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem majorGridLines={hidden} minorGridLines={hidden} />
        </ChartCategoryAxis>
        <ChartValueAxis>
          <ChartValueAxisItem majorGridLines={hidden} minorTicks={hidden} min={-10} max={45} plotBands={tempPlotBands} />
        </ChartValueAxis>
        <ChartTooltip render={tooltipRender} />
      </Chart>

      <Chart style={{ height: 120 }}>
        <ChartTitle text="Humidity [%]" />
        <ChartSeries>
          <ChartSeriesItem type="bullet" color="#0058e9" data={hum} />
        </ChartSeries>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem majorGridLines={hidden} minorGridLines={hidden} />
        </ChartCategoryAxis>
        <ChartValueAxis>
          <ChartValueAxisItem majorGridLines={hidden} minorTicks={hidden} min={0} max={100} plotBands={humPlotBands} />
        </ChartValueAxis>
        <ChartTooltip render={tooltipRender} />
      </Chart>

      <Chart style={{ height: 120 }}>
        <ChartTitle text="Atmospheric pressure [mmHg]" />
        <ChartSeries>
          <ChartSeriesItem type="bullet" color="#111" data={mmhg} />
        </ChartSeries>
        <ChartCategoryAxis>
          <ChartCategoryAxisItem majorGridLines={hidden} minorGridLines={hidden} />
        </ChartCategoryAxis>
        <ChartValueAxis>
          <ChartValueAxisItem majorGridLines={hidden} minorTicks={hidden} min={715} max={795} plotBands={mmhgPlotBands} />
        </ChartValueAxis>
        <ChartTooltip render={tooltipRender} />
      </Chart>
    </div>
  );
};

export default LBullet;