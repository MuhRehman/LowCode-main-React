import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { products } from './products';
import { styles } from './styles';

const LCustomizingFonts = () => {
  let gridPDFExport;

  const exportPDF = () => {
    gridPDFExport.save(products);
  };

  const grid = <Grid data={products}>
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
        <GridPDFExport ref={element => {
      gridPDFExport = element;
    }} margin="1cm">
          {grid}
        </GridPDFExport>
        <style>{styles}</style>
      </div>;
};

export default LCustomizingFonts;