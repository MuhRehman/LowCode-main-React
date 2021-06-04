import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';

const LColumnVirtualization = () => {
  const [skip, setSkip] = React.useState(0);
  const [take, setTake] = React.useState(15);
  let numberOfColumns = 1000;
  let numberOfRows = 100000;

  const columns = (() => {
    const cols = [];

    for (let c = 1; c <= numberOfColumns; c++) {
      cols.push(<GridColumn field={'Field-' + c.toString()} width={150} />);
    }

    return cols;
  })();

  const pageChange = event => {
    setSkip(event.page.skip);
    setTake(event.page.take);
  };

  const getData = (skip, take) => {
    const page = [];

    for (let r = skip + 1; r <= skip + take && r <= numberOfRows; r++) {
      const row = {};

      for (let c = 1; c <= numberOfColumns; c++) {
        row["Field-" + c] = "R" + r + ":C" + c;
      }

      page.push(row);
    }

    return page;
  };

  return <Grid style={{
    width: '720px',
    height: '400px'
  }} columnVirtualization={true} scrollable="virtual" data={getData(skip, take)} skip={skip} take={take} total={numberOfRows} onPageChange={pageChange}>
        {columns}
      </Grid>;
};

export default LColumnVirtualization;