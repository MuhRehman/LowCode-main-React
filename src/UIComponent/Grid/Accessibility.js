import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';

import products from './products.json';
import { Keys } from './keys';
class LAccessibility extends React.Component {
  state = {
    data: [...products]
  }

  handleRowClick = (props) => {
    const { data } = this.state;
    const newData = data.map((item) => ({...item, selected: item.ProductID === props.dataItem.ProductID }));
    this.setState({ data: newData });
  }

  handleNavigationAction = (event) => {
    const {focusElement} = event;
    const { data } = this.state;

    const rowId = focusElement.parentElement.getAttribute('data-id');

    if (rowId) {
      const newData = data.map((item) => ({...item, selected: String(item.ProductID) === rowId }));
      this.setState({ data: newData });
    }
  }

  rowRender = (trElement, rowProps) => {
    const trProps = {
        ...trElement.props,
        ['data-id']: rowProps.dataItem.ProductID
    };
    return React.cloneElement(trElement, { ...trProps }, trElement.props.children);
}

  render() {
    const { data } = this.state;

    return (
      <div>
        <Grid
          style={{ height: '410px' }}
          data={data}
          selectedField="selected"

          onRowClick={this.handleRowClick}
          rowRender={this.rowRender}

          navigatable={true}
          onNavigationAction={this.handleNavigationAction}
        >
          <Column field="ProductName" title="Product Name" width="300px" />
          <Column field="UnitsInStock" title="Units In Stock" />
          <Column field="UnitsOnOrder" title="Units On Order" />
          <Column field="ReorderLevel" title="Reorder Level" />
        </Grid>
      </div >
    );
  }
}

export default LAccessibility;
