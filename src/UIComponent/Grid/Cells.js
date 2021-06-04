import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from './products.json';

const UnitPriceCell = props => {
  const field = props.field || '';
  const min = products.reduce((acc, current) => Math.min(acc, current[field]), Number.MAX_VALUE);
  const max = products.reduce((acc, current) => Math.max(acc, current[field]), 0);
  return <td colSpan={props.colSpan} style={props.style}>
        min: {min}, max: {max}
      </td>;
};

const UnitsInStockCell = props => {
  const field = props.field || '';
  const total = products.reduce((acc, current) => acc + current[field], 0);
  return <td colSpan={props.colSpan} style={props.style}>
        total: {total}
      </td>;
};

const LCells = () => {
  return <Grid style={{
    height: '420px'
  }} data={products}>
        <Column field="ProductID" title="ID" width="50px" />
        <Column field="ProductName" title="Product Name" />
        <Column field="UnitPrice" title="Unit Price" footerCell={UnitPriceCell} />
        <Column field="UnitsInStock" title="Units In Stock" footerCell={UnitsInStockCell} />
        <Column field="Category.CategoryName" title="Category Name" />
      </Grid>;
};

export default LCells;