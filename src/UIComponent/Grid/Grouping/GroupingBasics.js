import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { process } from '@progress/kendo-data-query';
import products from '../products.json';
const initialState = {
  take: 10,
  skip: 0,
  group: [{
    field: 'UnitsInStock'
  }]
};

const createAppState = dataState => {
  return {
    result: process(products, dataState),
    dataState: dataState
  };
};

const LGroupingBasics = () => {
  const [dataState, setDataState] = React.useState(createAppState(initialState));

  const dataStateChange = event => {
    setDataState(createAppState(event.dataState));
  };

  const expandChange = event => {
    const expandField = event.target.props.expandField || '';
    event.dataItem[expandField] = event.value;
    setDataState({ ...dataState
    });
  };

  return <Grid style={{
    height: '520px'
  }} resizable={true} reorderable={true} filterable={true} sortable={true} pageable={{
    pageSizes: true
  }} groupable={true} data={dataState.result} onDataStateChange={dataStateChange} {...dataState.dataState} onExpandChange={expandChange} expandField="expanded">
        <Column field="ProductID" filterable={false} title="ID" width="50px" />
        <Column field="ProductName" title="Product Name" />
        <Column field="UnitPrice" title="Unit Price" filter="numeric" />
        <Column field="UnitsInStock" title="Units In Stock" filter="numeric" />
        <Column field="Category.CategoryName" title="Category Name" />
      </Grid>;
};

export default LGroupingBasics;