import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, getSelectedState, getSelectedStateFromKeyDown } from '@progress/kendo-react-grid';
import products from './products.json';
import { Checkbox, RadioGroup } from '@progress/kendo-react-inputs';
import { getter } from '@progress/kendo-react-common';
const DATA_ITEM_KEY = 'ProductID';
const SELECTED_FIELD = 'selected';
const idGetter = getter(DATA_ITEM_KEY);
const selectionModes = [{
  value: 'single',
  label: 'Single selection mode'
}, {
  value: 'multiple',
  label: 'Multiple selection mode'
}];

const LGridSelection = () => {
  const [data, setData] = React.useState(products.map(dataItem => Object.assign({
    selected: false
  }, dataItem)));
  const [selectedState, setSelectedState] = React.useState({});
  const [dragEnabled, setDragEnabled] = React.useState(true);
  const [cellEnabled, setCellEnabled] = React.useState(true);
  const [selectionMode, setSelectionMode] = React.useState(selectionModes[1].value);

  const onSelectionChange = event => {
    const newSelectedState = getSelectedState({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY
    });
    setSelectedState(newSelectedState);
  };

  const onKeyDown = event => {
    const newSelectedState = getSelectedStateFromKeyDown({
      event,
      selectedState: selectedState,
      dataItemKey: DATA_ITEM_KEY
    });
    setSelectedState(newSelectedState);
  };

  const onDragChange = event => {
    setDragEnabled(event.value);
  };

  const onCellChange = event => {
    setCellEnabled(event.value);
  };

  const onSelectionModeChange = event => {
    setSelectionMode(event.value);
  };

  return <div>
      <Checkbox value={dragEnabled} label={'Enable drag selection'} onChange={onDragChange} />
      <Checkbox value={cellEnabled} label={'Enable cell selection'} onChange={onCellChange} />
      <RadioGroup value={selectionMode} onChange={onSelectionModeChange} data={selectionModes} />
      <Grid style={{
      height: '400px'
    }} data={data.map(item => ({ ...item,
      [SELECTED_FIELD]: selectedState[idGetter(item)]
    }))} dataItemKey={DATA_ITEM_KEY} selectedField={SELECTED_FIELD} selectable={{
      enabled: true,
      drag: dragEnabled,
      cell: cellEnabled,
      mode: selectionMode
    }} navigatable={true} onSelectionChange={onSelectionChange} onKeyDown={onKeyDown}>
        <Column field="ProductName" title="Product Name" width="300px" />
        <Column field="UnitsInStock" title="Units In Stock" />
        <Column field="UnitsOnOrder" title="Units On Order" />
        <Column field="ReorderLevel" title="Reorder Level" />
      </Grid>
    </div>;
};

export default LGridSelection;