import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { NumericTextBox } from '@progress/kendo-react-inputs';

export default class LNumericBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        };
    }

    ChangeNumbers = (e) => {
        this.setState({
            value: e.value
        });
    }

   

    render() {
        return (
          <NumericTextBox
                placeholder=""
                value={this.state.value}
                onChange={this.ChangeNumbers}
                    /> 
            );
    }
}
