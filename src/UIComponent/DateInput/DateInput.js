import * as React from 'react'
import * as ReactDOM from 'react-dom'

import { DateInput } from '@progress/kendo-react-dateinputs';

export  class LDateInput extends React.Component {
    state = { value: new Date() };

    render() {
        return (
          <div>
            <DateInput
              value={this.state.value}
              onChange={this.changeDate}
                />
          </div>
        );
    }

    changeDate = (event) => {
        this.setState({ value: event.value });
    }
}

