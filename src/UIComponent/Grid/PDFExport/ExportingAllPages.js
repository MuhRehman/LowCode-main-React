import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column, GridToolbar } from '@progress/kendo-react-grid';
import { GridPDFExport } from '@progress/kendo-react-pdf';
import { products } from './products';

const LExportingAllPages = () => {
  let gridPDFExport;
  let total = products.length;
  let pageSize = 5;
  const [page, setPage] = React.useState({
    skip: 0,
    take: pageSize
  });

  const pageChange = event => {
    setPage(event.page);
  };

  const exportPDF = () => {
    setTimeout(() => {
      gridPDFExport.save(products);
    }, 250);
  };

  const grid = <Grid data={products.slice(page.skip, page.skip + page.take)} pageable={true} onPageChange={pageChange} pageSize={pageSize} total={total} {...page}>
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
        <GridPDFExport ref={pdfExport => gridPDFExport = pdfExport} margin="1cm">
          {grid}
        </GridPDFExport>
      </div>;
};

export default LExportingAllPages;