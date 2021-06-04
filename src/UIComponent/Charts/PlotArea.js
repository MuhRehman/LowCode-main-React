import * as React from 'react'
import {
    Chart,
    ChartPlotArea,
    ChartSeries,
    ChartSeriesItem
} from '@progress/kendo-react-charts';

import 'hammerjs';

const seriesData = [1, 2, 3, 5];
const LPlotArea = () => (
    <Chart>
        <ChartPlotArea background="#888" />
        <ChartSeries>
            <ChartSeriesItem data={seriesData} />
        </ChartSeries>
    </Chart>
);

export default LPlotArea;