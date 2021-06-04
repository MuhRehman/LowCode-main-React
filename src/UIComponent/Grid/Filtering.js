import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { filterBy } from '@progress/kendo-data-query';
import { sampleProducts } from './Editing/sample-products';
const initialFilter = {
  logic: "and",
  filters: [{
    field: "ProductName",
    operator: "contains",
    value: "Chef"
  }]
};

const LFiltering = () => {
  const [filter, setFilter] = React.useState(initialFilter);
  return <Grid style={{
    height: '420px'
  }} data={filterBy(sampleProducts, filter)} filterable={true} filter={filter} onFilterChange={e => setFilter(e.filter)}>
        <Column field="ProductID" title="ID" filterable={false} width="60px" />
        <Column field="ProductName" title="Product Name" width="240px" />
        <Column field="FirstOrderedOn" width="240px" filter="date" format="{0:d}" />
        <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
        <Column field="Discontinued" width="190px" filter="boolean" />
      </Grid>;
};

export default LFiltering;