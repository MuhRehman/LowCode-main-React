/* eslint-disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from '../products.json';
const columns = [{
  field: "ProductID",
  title: "ID",
  minWidnt: 50
}, {
  field: "ProductName",
  title: "Name",
  minWidnt: 200
}, {
  field: "Category.CategoryName",
  title: "CategoryName",
  minWidnt: 200
}, {
  field: "UnitPrice",
  title: "Price",
  minWidnt: 100
}, {
  field: "UnitsInStock",
  title: "In stock",
  minWidnt: 100
}];
const ADJUST_PADDING = 4;
const COLUMN_MIN = 4;

const LWidths = () => {
  let minGridWidth = 0;
  let grid;
  const [gridData, setGridData] = React.useState(products);
  const [applyMinWidth, setApplyMinWidth] = React.useState(false);
  const [gridCurrent, setGridCurrent] = React.useState(0);
  React.useEffect(() => {
    grid = document.querySelector('.k-grid');
    window.addEventListener('resize', handleResize);
    columns.map(item => minGridWidth += item.minWidnt);
    setGridCurrent(grid.offsetWidth);
    setApplyMinWidth(grid.offsetWidth < minGridWidth);
  }, []);

  const handleResize = () => {
    if (grid.offsetWidth < minGridWidth && !applyMinWidth) {
      setApplyMinWidth(true);
    } else if (grid.offsetWidth > minGridWidth) {
      setGridCurrent(grid.offsetWidth);
      setApplyMinWidth(false);
    }
  };

  const setWidth = minWidth => {
    let width = applyMinWidth ? minWidth : minWidth + (gridCurrent - minGridWidth) / columns.length;
    width < COLUMN_MIN ? width : width -= ADJUST_PADDING;
    return width;
  };

  return <div>
        <Grid style={{
      height: '400px'
    }} data={gridData}>
          {columns.map((column, index) => {
        return <Column field={column.field} title={column.title} key={index} width={setWidth(column.minWidnt)} />;
      })}
        </Grid>
      </div>;
};

export default LWidths;