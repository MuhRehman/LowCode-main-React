import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { sampleProducts } from './sample-products';

const LEditingBasics = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [editID, setEditID] = React.useState(null);

  const rowClick = event => {
    setEditID(event.dataItem.ProductID);
  };

  const itemChange = event => {
    const inEditID = event.dataItem.ProductID;
    const field = event.field || '';
    const newData = data.map(item => item.ProductID === inEditID ? { ...item,
      [field]: event.value
    } : item);
    setData(newData);
  };

  const closeEdit = event => {
    if (event.target === event.currentTarget) {
      setEditID(null);
    }
  };

  const addRecord = () => {
    const newRecord = {
      ProductID: data.length + 1
    };
    setData([newRecord, ...data]);
    setEditID(newRecord.ProductID);
  };

  return <Grid style={{
    height: '420px'
  }} data={data.map(item => ({ ...item,
    inEdit: item.ProductID === editID
  }))} editField="inEdit" onRowClick={rowClick} onItemChange={itemChange}>
        <GridToolbar>
          <div onClick={closeEdit}>
            <button title="Add new" className="k-button k-primary" onClick={addRecord}>
              Add new
            </button>
          </div>
        </GridToolbar>
        <Column field="ProductID" title="Id" width="50px" editable={false} />
        <Column field="ProductName" title="Name" />
        <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
        <Column field="UnitsInStock" title="Units" width="150px" editor="numeric" />
        <Column field="Discontinued" title="Discontinued" editor="boolean" />
      </Grid>;
};

export default LEditingBasics;