import * as React from 'react'
import * as ReactDOM from 'react-dom'

import {
    Chart,
    ChartCategoryAxis,
    ChartCategoryAxisItem,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';
import 'hammerjs';

class LSelection extends React.Component {
    categories = ['A', 'B', 'C', 'D'];
    series = [1, 2, 3, 4];
    selection = { from: 1, to: 2 };

    render() {
        return (
          <Chart onSelectEnd={this.onSelectEnd}>
            <ChartCategoryAxis>
              <ChartCategoryAxisItem categories={this.categories} select={this.selection} />
            </ChartCategoryAxis>
            <ChartSeries>
              <ChartSeriesItem data={this.series} />
            </ChartSeries>
          </Chart>
        );
    }

    onSelectEnd = (args) => {
        const selectedCategories = this.categories.slice(args.from, args.to);
        console.log(`Selected categories: ${selectedCategories}`);
    }
}

export default LSelection;