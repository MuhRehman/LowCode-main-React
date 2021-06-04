import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from '../products.json';

const LResizing = () => {
  return <Grid style={{
    height: '400px'
  }} data={products} resizable={true}>
        <GridColumn field="ProductID" title="ID" width="45px" minResizableWidth={30} />
        <GridColumn field="ProductName" title="Name" width="250px" />
        <GridColumn field="Category.CategoryName" width="250px" title="CategoryName" />
        <GridColumn field="UnitPrice" title="Price" width="80px" />
        <GridColumn field="UnitsInStock" title="In stock" />
      </Grid>;
};

export default LResizing;