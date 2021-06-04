import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { sampleProducts } from '../Editing/sample-products';

const LFittingContentToPaperSize = () => {
  let gridPDFExport;

  const exportPDF = () => {
    gridPDFExport.save();
  };

  const grid = <Grid data={sampleProducts} style={{
    height: '445px'
  }}>
        <GridToolbar>
          <button title="Export PDF" className="k-button k-primary" onClick={exportPDF}>
            Export PDF
          </button>
        </GridToolbar>
        <Column field="ProductID" title="ID" width="40px" />
        <Column field="ProductName" title="Name" width="300px" />
        <Column field="Category.CategoryName" title="Category" width="150px" />
        <Column field="UnitPrice" title="Price" width="120px" />
        <Column field="QuantityPerUnit" title="Quantity Per Unit" width="180px" />
        <Column field="UnitsInStock" title="In stock" width="120px" />
        <Column field="Discontinued" title="Discontinued" width="130px" />
      </Grid>;
  return <div>
        {grid}
        <GridPDFExport paperSize="A4" scale={0.5} ref={pdfExport => gridPDFExport = pdfExport}>
          {grid}
        </GridPDFExport>
      </div>;
};

export default LFittingContentToPaperSize;