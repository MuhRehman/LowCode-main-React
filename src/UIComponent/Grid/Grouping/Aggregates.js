import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import products from '../products.json';
const aggregates = [{
  field: 'UnitsInStock',
  aggregate: 'sum'
}, {
  field: 'UnitPrice',
  aggregate: 'average'
}];
const initialState = {
  skip: 0,
  take: 10,
  group: [{
    field: 'UnitsInStock'
  }]
};

const createAppState = dataState => {
  const groups = dataState.group;

  if (groups) {
    groups.map(group => group.aggregates = aggregates);
  }

  return {
    result: process(products, dataState),
    dataState: dataState
  };
};

const LAggregates = () => {
  const [state, setState] = React.useState(createAppState(initialState));

  const dataStateChange = event => {
    setState(createAppState(event.dataState));
  };

  const expandChange = event => {
    const expandField = event.target.props.expandField || '';
    event.dataItem[expandField] = event.value;
    setState({ ...state
    });
  };

  const cellRender = (tdElement, cellProps) => {
    if (cellProps.rowType === 'groupFooter') {
      if (cellProps.field === 'UnitPrice') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                    Average: {cellProps.dataItem.aggregates.UnitPrice.average}
                  </td>;
      } else if (cellProps.field === 'UnitsInStock') {
        return <td aria-colindex={cellProps.columnIndex} role={'gridcell'}>
                    Sum: {cellProps.dataItem.aggregates.UnitsInStock.sum}
                  </td>;
      }
    }

    return tdElement;
  };

  return <Grid style={{
    height: '520px'
  }} filterable={true} sortable={true} pageable={{
    pageSizes: true
  }} groupable={{
    footer: 'visible'
  }} data={state.result} {...state.dataState} onDataStateChange={dataStateChange} onExpandChange={expandChange} expandField="expanded" cellRender={cellRender}>
        <Column field="ProductID" filterable={false} title="ID" width="50px" />
        <Column field="ProductName" title="Product Name" />
        <Column field="UnitPrice" title="Unit Price" filter="numeric" />
        <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
        <Column field="Category.CategoryName" title="Category Name" />
      </Grid>;
};

export default LAggregates;