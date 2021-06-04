import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy } from '@progress/kendo-data-query';
import products from './products.json';
const initialSort = [{
  field: 'ProductName',
  dir: 'asc'
}];

const LSorting = () => {
  const [sort, setSort] = React.useState(initialSort);
  return <Grid style={{
    height: '300px'
  }} data={orderBy(products, sort)} sortable={true} sort={sort} onSortChange={e => {
    setSort(e.sort);
  }}>
        <Column field="ProductID" />
        <Column field="ProductName" title="Product Name" />
        <Column field="UnitPrice" title="Unit Price" />
      </Grid>;
};

export default LSorting;