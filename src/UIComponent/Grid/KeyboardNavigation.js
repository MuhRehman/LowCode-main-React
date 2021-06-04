import * as React from "react";
import * as ReactDOM from "react-dom";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import { process } from '@progress/kendo-data-query';
import products from "./products.json";

const DetailComponent = props => {
  const dataItem = props.dataItem;
  return <section>
            <p><strong>In Stock:</strong> {dataItem.UnitsInStock} units</p>
            <p><strong>On Order:</strong> {dataItem.UnitsOnOrder} units</p>
            <p><strong>Reorder Level:</strong> {dataItem.ReorderLevel} units</p>
            <p><strong>Discontinued:</strong> {dataItem.Discontinued}</p>
            <p><strong>Category:</strong> {dataItem.Category.CategoryName} - {dataItem.Category.Description}</p>
          </section>;
};

const initialDataState = {
  sort: [{
    field: "code",
    dir: "asc"
  }],
  take: 10,
  skip: 0
};

const LKeyboardNavigation = () => {
  const [data, setData] = React.useState(products);
  const [dataState, setDataState] = React.useState(initialDataState);

  const expandChange = event => {
    let newData = data.map(item => {
      if (item.ProductID === event.dataItem.ProductID) {
        item.expanded = !event.dataItem.expanded;
      }

      return item;
    });
    setData(newData);
  };

  return <Grid pageable={true} sortable={true} filterable={true} data={process(data, dataState)} {...dataState} onDataStateChange={e => {
    setDataState(e.dataState);
  }} detail={DetailComponent} style={{
    height: '600px'
  }} expandField="expanded" onExpandChange={expandChange} navigatable={true}>
            <Column field="ProductID" title="ID" width="80px" filterable={false} />
            <Column field="ProductName" title="Name" width="250px" />
            <Column field="UnitPrice" title="Price" filter='numeric' width="150px" />
            <Column field="UnitsInStock" title="In stock" filter='numeric' width="150px" />
            <Column field="Discontinued" filter='boolean' cell={props => <td>
                  <input disabled={true} type="checkbox" checked={props.dataItem[props.field || '']} />
                </td>} />
          </Grid>;
};

export default LKeyboardNavigation;