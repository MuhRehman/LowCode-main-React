import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from '../products.json';

const LMultiColumnHeaders = () => {
  return <Grid style={{
    height: '420px'
  }} resizable={true} reorderable={true} data={products.slice(0, 10)}>
        <Column field="ProductID" title="ID" width={40} resizable={false} />
        <Column title="Product Informaiton">
          <Column field="ProductName" title="Name" />
          <Column title="Unit">
            <Column field="UnitPrice" title="Price" />
            <Column field="UnitsInStock" title="In Stock" />
          </Column>
        </Column>
        <Column title="Category" children={[{
      field: 'Category.CategoryName',
      title: 'Name'
    }, <Column field="Category.Description" title="Description" />]} />
      </Grid>;
};

export default LMultiColumnHeaders;