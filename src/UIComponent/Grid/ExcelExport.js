import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { ExcelExport } from '@progress/kendo-react-excel-export';
import products from './products.json';

const LExcelExport = () => {
  let _export;

  const excelExport = () => {
    _export.save();
  };

  return <ExcelExport data={products} ref={exporter => _export = exporter}>
        <Grid data={products} style={{
      height: '420px'
    }}>
          <GridToolbar>
            <button title="Export Excel" className="k-button k-primary" onClick={excelExport}>
              Export to Excel
            </button>
          </GridToolbar>
          <GridColumn field="ProductID" title="Product ID" width="50px" />
          <GridColumn field="ProductName" title="Product Name" width="350px" />
          <GridColumn field="UnitPrice" title="Price" />
          <GridColumn field="UnitsInStock" title="In stock" />
          <GridColumn field="Discontinued" title="Discontinued" />
        </Grid>
      </ExcelExport>;
};

export default LExcelExport;