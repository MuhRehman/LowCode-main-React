import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { sampleProducts } from './sample-products';
import { CellRender, RowRender } from './renderers';

const LInCell = () => {
  const [data, setData] = React.useState(sampleProducts);
  const [editField, setEditField] = React.useState(undefined);
  const [changes, setChanges] = React.useState(false);

  const enterEdit = (dataItem, field) => {
    const newData = data.map(item => ({ ...item,
      inEdit: item.ProductID === dataItem.ProductID ? field : undefined
    }));
    setData(newData);
    setEditField(field);
  };

  const exitEdit = () => {
    const newData = data.map(item => ({ ...item,
      inEdit: undefined
    }));
    setData(newData);
    setEditField(undefined);
  };

  const saveChanges = () => {
    sampleProducts.splice(0, sampleProducts.length, ...data);
    setEditField(undefined);
    setChanges(false);
  };

  const cancelChanges = () => {
    setData(sampleProducts);
    setChanges(false);
  };

  const itemChange = event => {
    let field = event.field || '';
    event.dataItem[field] = event.value;
    let newData = data.map(item => {
      if (item.ProductID === event.dataItem.ProductID) {
        item[field] = event.value;
      }

      return item;
    });
    setData(newData);
    setChanges(true);
  };

  const customCellRender = (td, props) => <CellRender originalProps={props} td={td} enterEdit={enterEdit} editField={editField} />;

  const customRowRender = (tr, props) => <RowRender originalProps={props} tr={tr} exitEdit={exitEdit} editField={editField} />;

  return <Grid style={{
    height: '420px'
  }} data={data} rowHeight={50} onItemChange={itemChange} cellRender={customCellRender} rowRender={customRowRender} editField="inEdit">
        <GridToolbar>
          <button title="Save Changes" className="k-button" onClick={saveChanges} disabled={!changes}>
            Save Changes
          </button>
          <button title="Cancel Changes" className="k-button" onClick={cancelChanges} disabled={!changes}>
            Cancel Changes
          </button>
        </GridToolbar>
        <Column field="ProductID" title="Id" width="50px" editable={false} />
        <Column title="Product Name" width="200px" field="ProductName" />
        <Column title="Units In Stock" editor="numeric" field="UnitsInStock" />
        <Column title="First Ordered" editor="date" format="{0:d}" width="140px" field="FirstOrderedOn" />
        <Column editor="boolean" field="Discontinued" />
      </Grid>;
};

export default LInCell;