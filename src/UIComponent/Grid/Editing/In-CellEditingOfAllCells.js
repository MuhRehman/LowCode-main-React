import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { sampleProducts } from './sample-products';
const allInEdit = sampleProducts.map(item => Object.assign({
  inEdit: true
}, item));

const LInCellEditingOfAllCells = () => {
  const [data, setData] = React.useState(allInEdit);

  const itemChange = e => {
    let newData = data.map(item => {
      if (item.ProductID === e.dataItem.ProductID) {
        item[e.field || ''] = e.value;
      }

      return item;
    });
    setData(newData);
  };

  return <Grid data={data} editField="inEdit" onItemChange={itemChange}>
      <Column field="ProductID" title="Id" width="50px" editable={false} />
      <Column field="ProductName" />
      <Column field="FirstOrderedOn" editor="date" format="{0:d}" />
      <Column field="UnitsInStock" width="150px" editor="numeric" />
      <Column field="Discontinued" width="50px" editor="boolean" />
    </Grid>;
};

export default LInCellEditingOfAllCells;