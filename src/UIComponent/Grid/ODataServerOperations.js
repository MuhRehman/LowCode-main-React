import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { ProductsLoader } from './products-loader';

const LODataServerOperations = () => {
  const [products, setProducts] = React.useState({
    data: [],
    total: 0
  });
  const [dataState, setDataState] = React.useState({
    take: 10,
    skip: 0
  });

  const dataStateChange = e => {
    setDataState(e.dataState);
  };

  const dataReceived = products => {
    setProducts(products);
  };

  return <div>
        <Grid filterable={true} sortable={true} pageable={true} {...dataState} {...products} onDataStateChange={dataStateChange}>
          <Column field="ProductID" filter="numeric" title="Id" />
          <Column field="ProductName" title="Name" />
          <Column field="UnitPrice" filter="numeric" format="{0:c}" title="Price" />
          <Column field="UnitsInStock" filter="numeric" title="In stock" />
        </Grid>

        <ProductsLoader dataState={dataState} onDataReceived={dataReceived} />
      </div>;
};

export default LODataServerOperations;