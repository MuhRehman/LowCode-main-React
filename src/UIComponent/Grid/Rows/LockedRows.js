/* eslint-disable */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import products from '../products.json';
import { filterBy } from '@progress/kendo-data-query';
const rowHeight = 50;

const LockRowCell = props => {
  let styles = props.style;
  let classNames = props.className;

  if (props.dataItem.locked) {
    styles.top = props.getTop(props.dataItem);
    styles.bottom = props.getBottom(props.dataItem);
    classNames += ' k-grid-row-sticky';
  }

  return <td style={{
    textAlign: 'center',
    ...styles
  }} className={classNames} onClick={() => props.onClick(props.dataItem)}>
        {props.dataItem.locked ? <span className="k-icon k-i-pin" /> : <span className="k-icon k-i-unpin" />}
      </td>;
};

const filterDescriptorLocked = {
  logic: 'and',
  filters: [{
    field: "locked",
    operator: "eq",
    value: true
  }]
};

const LLockedRows = () => {
  const [data, setData] = React.useState(products);
  const [allLockedRows, setAllLockedRows] = React.useState(filterBy(products, filterDescriptorLocked));

  const cellRender = (td, props) => {
    let extraProps = {};

    if (props.dataItem.locked) {
      extraProps.style = {
        top: getTop(props.dataItem),
        bottom: getBottom(props.dataItem),
        ...props.style
      }, extraProps.className = props.className + ' k-grid-row-sticky';
    }

    return React.cloneElement(td, { ...td.props,
      ...extraProps
    }, td.props.children);
  };

  const getTop = dataItem => {
    const indexOfLockedItem = allLockedRows.findIndex(item => dataItem.ProductID === item.ProductID);
    return indexOfLockedItem * rowHeight;
  };

  const getBottom = dataItem => {
    const indexOfLockedItem = allLockedRows.findIndex(item => dataItem.ProductID === item.ProductID);
    const numberOfLockedRows = allLockedRows.length;
    return (numberOfLockedRows - indexOfLockedItem - 1) * rowHeight;
  };

  const handleLockRowChange = dataItem => {
    let itemIndex = data.findIndex(item => item.ProductID === dataItem.ProductID);
    let newData = [...data];
    newData[itemIndex].locked = !newData[itemIndex].locked;
    setData(newData);
    setAllLockedRows(filterBy(newData, filterDescriptorLocked));
  };

  const myLockedCell = props => <LockRowCell {...props} onClick={handleLockRowChange} getTop={getTop} getBottom={getBottom} />;

  return <div>
        <Grid style={{
      height: 400,
      width: 800
    }} data={data} reorderable={true} cellRender={cellRender} rowHeight={rowHeight}>
          <Column field='locked' cell={myLockedCell} title=' ' width="65px" locked={true} />
          <Column field="ProductID" title="ID" width="45px" />
          <Column field="ProductName" title="Name" width="350px" />
          <Column field="Category.CategoryName" title="CategoryName" width="250px" />
          <Column field="UnitPrice" title="Price" width="190px" />
          <Column field="UnitsInStock" title="In stock" width="190px" />
        </Grid>
      </div>;
};

export default LLockedRows;