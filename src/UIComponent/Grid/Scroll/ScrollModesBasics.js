import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from '../products.json';
const availableProducts = products.slice();
const initialProducts = availableProducts.splice(0, 20);

const LScrollModesBasics = () => {
  const [gridData, setGridData] = React.useState(initialProducts);

  const scrollHandler = event => {
    const e = event.nativeEvent;

    if (e.target.scrollTop + 10 >= e.target.scrollHeight - e.target.clientHeight) {
      const moreData = availableProducts.splice(0, 10);

      if (moreData.length > 0) {
        setGridData(oldData => oldData.concat(moreData));
      }
    }
  };

  return <div>
        <Grid style={{
      height: '400px'
    }} data={gridData} onScroll={scrollHandler}>
          <Column field="ProductID" title="ID" width="40px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Discontinued" width="250px" />
          <Column field="UnitPrice" width="250px" />
          <Column field="QuantityPerUnit" width="250px" />
          <Column field="Category.CategoryName" width="250px" />

        </Grid>
        <br />
        showing: {gridData.length} items
      </div>;
};

export default LScrollModesBasics;