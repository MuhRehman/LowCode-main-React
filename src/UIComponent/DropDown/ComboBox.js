import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ComboBox } from '@progress/kendo-react-dropdowns';
export class LComboBox extends React.Component {
  sports = [ "Baseball", "Basketball", "Cricket", "Field Hockey", "Football", "Table Tennis", "Tennis", "Volleyball" ];
  state = {
      allowCustom: true
  };

  onChange = (event) => {
      this.setState({
          allowCustom: event.target.checked
      });
  }

  render() {
      const allowCustom = this.state.allowCustom;
      return (
        <div className="example-wrapper">
          <div className="example-config">
            <input id="ac" type="checkbox" className="k-checkbox" onChange={this.onChange} checked={allowCustom} />
           
          </div>
          <div>
           
            <ComboBox data={this.sports} allowCustom={allowCustom} />
          </div>
        </div>
      );
  }
}
