import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { sampleProducts } from '../Editing/sample-products';

const LPDFExportOverview = () => {
  let gridPDFExport;

  const exportPDF = () => {
    gridPDFExport.save();
  };

  const grid = <Grid data={sampleProducts}>
        <GridToolbar>
          <button title="Export PDF" className="k-button k-primary" onClick={exportPDF}>
            Export PDF
          </button>
        </GridToolbar>
        <Column field="ProductID" title="ID" width="50px" />
        <Column field="ProductName" title="Name" width="300px" />
        <Column field="Category.CategoryName" title="Category" />
        <Column field="UnitPrice" title="Price" />
        <Column field="UnitsInStock" title="In stock" />
        <Column field="Discontinued" title="Discontinued" />
      </Grid>;
  return <div>
        {grid}
        <GridPDFExport ref={pdfExport => gridPDFExport = pdfExport}>
          {grid}
        </GridPDFExport>
      </div>;
};

export default LPDFExportOverview;