import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ListBox, ListBoxToolbar, processListBoxData, processListBoxDragAndDrop } from '@progress/kendo-react-listbox';

const data = [
    { name: 'Steven White', selected: true },
    { name: 'Nancy King', selected: false },
    { name: 'Nancy Davolio', selected: false },
    { name: 'Robert Davolio', selected: false },
    { name: 'Michael Leverling', selected: false },
    { name: 'Andrew Callahan', selected: false },
    { name: 'Michael Suyama', selected: false }
];

const SELECTED_FIELD = 'selected';

export class LListBox extends React.Component {

    state = {
        employees: data,
        developers: [],
        draggedItem: {}
    };

    handleItemClick = (event, data, connectedData) => {
        this.setState({
            [data]: this.state[data].map(item => {
                if (item.name === event.dataItem.name) {
                    item[SELECTED_FIELD] = !item[SELECTED_FIELD];
                } else if (!event.nativeEvent.ctrlKey) {
                    item[SELECTED_FIELD] = false;
                }
                return item;
            }),
            [connectedData]: this.state[connectedData].map(item => {
                item[SELECTED_FIELD] = false;
                return item;
            })
        });
    }

    handleToolBarClick = (e) => {
        let result = processListBoxData(this.state.employees, this.state.developers, e.toolName, SELECTED_FIELD);
        this.setState({
            employees: result.listBoxOneData,
            developers: result.listBoxTwoData
        });
    }

    handleDragStart = (e) => {
        this.setState({
            draggedItem: e.dataItem
        });
    }

    handleDrop = (e) => {
        let result = processListBoxDragAndDrop(this.state.employees, this.state.developers, this.state.draggedItem, e.dataItem, 'name');
        this.setState({
            employees: result.listBoxOneData,
            developers: result.listBoxTwoData
        });
    }

    render() {
        return (
          <div className='container'>
            <div className='row justify-content-center'>
              <div className='col'>
                <h6>Employees</h6>
                <ListBox
                  style={{ height: 350, width: '100%' }}
                  data={this.state.employees}
                  textField="name"
                  selectedField={SELECTED_FIELD}
                  onItemClick={(e) => this.handleItemClick(e, 'employees', 'developers')}
                  onDragStart={this.handleDragStart}
                  onDrop={this.handleDrop}
                  toolbar={() => {
                                return (
                                  <ListBoxToolbar
                                    tools={['moveUp', 'moveDown', 'transferTo', 'transferFrom', 'transferAllTo', 'transferAllFrom', 'remove']}
                                    data={this.state.employees}
                                    dataConnected={this.state.developers}
                                    onToolClick={this.handleToolBarClick}
                                    />
                                );
                            }}
                        />
              </div>
              <div className='col'>
                <h6>Developers</h6>
                <ListBox
                  style={{ height: 350, width: '100%' }}
                  data={this.state.developers}
                  textField="name"
                  selectedField={SELECTED_FIELD}
                  onItemClick={(e) => this.handleItemClick(e, 'developers', 'employees')}
                  onDragStart={this.handleDragStart}
                  onDrop={this.handleDrop}
                        />
              </div>
            </div>
          </div>
        );
    }
}

