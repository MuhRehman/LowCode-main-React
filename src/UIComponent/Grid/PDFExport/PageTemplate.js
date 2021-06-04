import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { products } from './products';

const PageTemplate = props => {
  return <div style={{
    position: "absolute",
    top: "10px",
    left: "10px"
  }}>
        Page {props.pageNum} of {props.totalPages}
      </div>;
};

const LPageTemplate = () => {
  let gridPDFExport;

  const exportPDF = () => {
    gridPDFExport.save();
  };

  const grid = <Grid data={products} style={{
    maxHeight: '490px'
  }}>
        <GridToolbar>
          <button title="Export PDF" className="k-button k-primary" onClick={exportPDF}>
            Export PDF
          </button>
        </GridToolbar>
        <GridColumn field="ProductID" title="ID" width="50px" />
        <GridColumn field="ProductName" title="Name" width="300px" />
        <GridColumn field="Category.CategoryName" title="Category" />
        <GridColumn field="UnitPrice" title="Price" />
        <GridColumn field="UnitsInStock" title="In stock" />
        <GridColumn field="Discontinued" title="Discontinued" />
      </Grid>;
  return <div>
        {grid}
        <GridPDFExport pageTemplate={PageTemplate} paperSize="A4" margin="1.2cm" landscape={true} ref={pdfExport => gridPDFExport = pdfExport}>
          {grid}
        </GridPDFExport>
      </div>;
};

export default LPageTemplate;