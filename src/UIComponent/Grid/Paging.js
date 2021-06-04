import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';
const initialDataState = {
  skip: 0,
  take: 10
};

const LPaging = () => {
  const [page, setPage] = React.useState(initialDataState);

  const pageChange = event => {
    setPage(event.page);
  };

  return <div>
        <Grid style={{
      height: '400px'
    }} data={products.slice(page.skip, page.take + page.skip)} skip={page.skip} take={page.take} total={products.length} pageable={true} onPageChange={pageChange}>
          <GridColumn field="ProductID" />
          <GridColumn field="ProductName" title="Product Name" />
          <GridColumn field="UnitPrice" title="Unit Price" />
        </Grid>
      </div>;
};

export default LPaging;