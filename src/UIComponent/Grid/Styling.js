import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import products from './products.json';

const cellWithBackGround = props => {
  const examplePrice = props.dataItem.UnitPrice < 15;
  const icon = examplePrice ? <span className="k-icon k-i-sort-desc-sm" /> : <span className="k-icon k-i-sort-asc-sm" />;
  const style = {
    backgroundColor: examplePrice ? "rgb(243, 23, 0, 0.32)" : "rgb(55, 180, 0,0.32)"
  };
  const field = props.field || '';
  return <td style={style}>
        {props.dataItem[field]} {icon}
      </td>;
};

const LStyling = () => <Grid data={products} style={{
  height: '240px'
}}>
    <GridColumn field="ProductName" title="Product Name" />
    <GridColumn field="UnitPrice" title="Units Price" cell={cellWithBackGround} />
    <GridColumn field="UnitsOnOrder" title="Units On Order" />
    <GridColumn field="ReorderLevel" title="Reorder Level" />
  </Grid>;

export default LStyling;