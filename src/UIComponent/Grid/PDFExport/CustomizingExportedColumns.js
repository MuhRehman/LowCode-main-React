import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { sampleProducts } from '../Editing/sample-products';

const LCustomizingExportedColumns = () => {
  let gridPDFExport;
  const [exporting, setExporting] = React.useState(false);

  const exportPDF = () => {
    gridPDFExport.save(undefined, pdfExportDone);
    setExporting(true);
  };

  const pdfExportDone = () => {
    setExporting(false);
  };

  const grid = <Grid data={sampleProducts} style={{
    height: '445px'
  }}>
        <GridToolbar>
          <button title="Export PDF" className="k-button k-primary" onClick={exportPDF} disabled={exporting}>
            Export PDF
          </button>
        </GridToolbar>
        <GridColumn field="ProductID" title="ID" width="50px" />
        <GridColumn field="ProductName" title="Name" width="350px" />
        <GridColumn field="Category.CategoryName" title="Category" />
        <GridColumn field="UnitPrice" title="Price" />
        <GridColumn field="UnitsInStock" title="In stock" />
      </Grid>;
  return <div>
        {grid}
        <GridPDFExport ref={pdfExport => gridPDFExport = pdfExport}>
          <GridColumn field="ProductID" title="Product ID" />
          <GridColumn field="ProductName" title="Product Name" />
          <GridColumn field="QuantityPerUnit" title="Quantity Per Unit" />
          {grid}
        </GridPDFExport>
      </div>;
};

export default LCustomizingExportedColumns;