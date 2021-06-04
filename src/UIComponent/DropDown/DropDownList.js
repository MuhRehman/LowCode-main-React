import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DropDownList } from '@progress/kendo-react-dropdowns';

export class LDropDownList extends React.Component {
    sizes = [ "X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large" ];

    render() {
        return (
          <div>
            <div>T-shirt size:</div>
            <DropDownList data={this.sizes} />
          </div>
        );
    }
}

