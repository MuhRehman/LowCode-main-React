import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { sampleProducts } from './sample-products';
import { MyCommandCell } from './myCommandCell';
import { DropDownCell } from './myDropDownCell';
import { insertItem, getItems, updateItem, deleteItem } from "./services";

const LInlineEditingwithCustomEditors = () => {
  const editField = "inEdit";
  const [data, setData] = React.useState(sampleProducts);

  const CommandCell = props => <MyCommandCell {...props} edit={enterEdit} remove={remove} add={add} discard={discard} update={update} cancel={cancel} editField={editField} />;

  const remove = dataItem => {
    const newData = deleteItem(dataItem);
    setData(newData);
  };

  const add = dataItem => {
    dataItem.inEdit = true;
    const newData = insertItem(dataItem);
    setData(newData);
  };

  const update = dataItem => {
    dataItem.inEdit = false;
    const newData = updateItem(dataItem);
    setData(newData);
  };

  const discard = dataItem => {
    const newData = [...data];
    newData.splice(0, 1);
    setData(newData);
  };

  const cancel = dataItem => {
    const originalItem = getItems().find(p => p.ProductID === dataItem.ProductID);
    const newData = data.map(item => item.ProductID === originalItem.ProductID ? originalItem : item);
    setData(newData);
  };

  const enterEdit = dataItem => {
    let newData = data.map(item => item.ProductID === dataItem.ProductID ? { ...item,
      inEdit: true
    } : item);
    setData(newData);
  };

  const itemChange = event => {
    const newData = data.map(item => item.ProductID === event.dataItem.ProductID ? { ...item,
      [event.field]: event.value
    } : item);
    setData(newData);
  };

  const addNew = () => {
    const newDataItem = {
      inEdit: true,
      Discontinued: false
    };
    setData([newDataItem, ...data]);
  };

  return <Grid data={data} onItemChange={itemChange} editField={editField} dataItemKey={'ProductID'}>
        <GridToolbar>
          <button title="Add new" className="k-button k-primary" onClick={addNew}>
            Add new
          </button>
        </GridToolbar>
        <Column field="ProductID" title="Id" width="50px" editable={false} />
        <Column field="ProductName" title="Product Name" />
        <Column field="FirstOrderedOn" title="First Ordered" editor="date" format="{0:d}" />
        <Column field="UnitsInStock" title="Units" editor="numeric" />
        <Column field="Discontinued" title="Discontinued" cell={DropDownCell} />
        <Column cell={CommandCell} width="240px" />
      </Grid>;
};

export default LInlineEditingwithCustomEditors;