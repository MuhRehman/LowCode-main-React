import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartTitle,
    ChartSeries,
    ChartSeriesItem,
    ChartCategoryAxis,
    ChartCategoryAxisItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

class LArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            firstSeries: [123, 276, 310, 212, 240, 156, 98],
            secondSeries: [165, 210, 287, 144, 190, 167, 212],
            thirdSeries: [56, 140, 195, 46, 123, 78, 95]
        };
    }

    render() {
        const { categories, firstSeries, secondSeries, thirdSeries } = this.state;

        return (
          <Chart>
            <ChartTitle text="Units sold" />
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={categories} title={{ text: 'Months' }} />
            </ChartCategoryAxis>
            <ChartSeries>
              <ChartSeriesItem type="area" data={firstSeries} />
              <ChartSeriesItem type="area" data={secondSeries} />
              <ChartSeriesItem type="area" data={thirdSeries} />
            </ChartSeries>
          </Chart>
        );
    }
}

export default LArea;