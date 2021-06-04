import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from '../products.json';
const MyContext = React.createContext({
  reorder: null,
  dragStart: null
});

const DragCell = props => {
  const currentContext = React.useContext(MyContext);
  return <td onDragOver={e => {
    currentContext.reorder(props.dataItem);
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }}>
        <span className="k-icon k-i-reorder" draggable={true} style={{
      cursor: 'move'
    }} onDragStart={e => {
      currentContext.dragStart(props.dataItem);
      e.dataTransfer.setData("dragging", "");
    }} />
      </td>;
};

const LReorderingOfRows = () => {
  const [gridData, setGridData] = React.useState(products);
  const [activeItem, setActiveItem] = React.useState(null);

  const reorder = dataItem => {
    if (activeItem === dataItem) {
      return;
    }

    let reorderedData = gridData.slice();
    let prevIndex = reorderedData.findIndex(p => p === activeItem);
    let nextIndex = reorderedData.findIndex(p => p === dataItem);
    reorderedData.splice(prevIndex, 1);
    reorderedData.splice(nextIndex, 0, activeItem);
    setGridData(reorderedData);
  };

  const dragStart = dataItem => {
    setActiveItem(dataItem);
  };

  return <MyContext.Provider value={{
    reorder: reorder,
    dragStart: dragStart
  }}>
        <Grid style={{
      height: '400px'
    }} data={gridData} dataItemKey={"ProductID"}>
          <Column title="" width="80px" cell={DragCell} />
          <Column field="ProductID" title="ID" width="60px" />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" />
          <Column field="UnitPrice" title="Price" width="80px" />
          <Column field="UnitsInStock" title="In stock" width="80px" />
        </Grid>
      </MyContext.Provider>;
};

export default LReorderingOfRows;