import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Button } from '@progress/kendo-react-buttons';
import products from '../products.json';

const LLockedColumns = () => {
  const [locked, setLocked] = React.useState(false);

  const handleClick = () => {
    setLocked(!locked);
  };

  return <div>
        <div className="mb-3">
          <div className="mb-2">
            <Button primary={true} onClick={handleClick}>
              Lock / Unlock Additional details Column
            </Button>
          </div>

          <div className={'w-50 alert ' + (locked ? 'alert-success' : 'alert-danger')}>
            The Additional details Column is
            <strong className="text-muted">
              {locked ? " Frozen" : " Unfrozen"}
            </strong>
          </div>
        </div>
        <Grid style={{
      height: 350
    }} data={products} reorderable={true}>
          <Column field="ProductID" title="ID" width="45px" locked={true} />
          <Column field="ProductName" title="Name" width="250px" />
          <Column field="Category.CategoryName" title="CategoryName" width="250px" locked={true} />
          <Column field="UnitPrice" title="Price" width="90px" />
          <Column field="UnitsInStock" title="In stock" width="90px" />
          <Column field="UnitsOnOrder" title="On order" width="90px" />
          <Column field="Discontinued" width="120px" />
          <Column field="QuantityPerUnit" title="Additional details" width="250px" locked={locked} />
        </Grid>
      </div>;
};

export default LLockedColumns;