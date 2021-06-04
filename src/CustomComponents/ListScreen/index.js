import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { Input, Checkbox } from '@progress/kendo-react-inputs';
import {DropDownButton, DropDownButtonItem, SplitButton, SplitButtonItem} from "@progress/kendo-react-buttons";
import products from '../../products.json';
import search from '../../Assets/Images/search.png';
import LayerIcon from "../../Assets/Images/LayerIcon.png"
import Dot3 from "../../Assets/Images/dot3.svg"
import DrawerComponent from "./Drawer";
import "../../App.scss"
import "./CustomerMaster.scss"

class CustomerMaster extends React.Component {
    state = {
        expanded: false
    };
    toggleDrawer = () => {
        this.setState({expanded: !this.state.expanded})
    };
    render() {
        return (
            <div className="customer-master">
                <DrawerComponent toggleDrawer={this.toggleDrawer} expanded={this.state.expanded}/>
                <div className="k-p-5">
                    <div className=" search-bar display-table  k-mb-5 k-d-flex k-justify-content-between">
                        <div className="w-100 h-40 display-table-cell k-pr-10">
                            <div className="search-input k-justify-content-start">
                                <img src={search} alt="search"/>
                                <Input placeholder={"Search Products..."} className="w-100 border-bottom-unset"/>
                            </div>
                        </div>
                        <div className="display-table-cell">
                            <div className="k-text-right k-d-flex h-40">
                                <SplitButton text="0 - 20 of 2,000" className="k-mr-3 h-40 eNum"/>
                                <DropDownButton text="Sort" icon="cog" className="k-mr-3 h-40 Sort"/>
                                <DropDownButton text="Filter" icon="k-icon k-i-saturation" className="k-mr-3 h-40 filter"/>
                                <SplitButton text="Add" className="k-mr-3 h-40 primary-button add-button w-120px">
                                <SplitButtonItem text="Add Product" />
                                <SplitButtonItem text="Add Product Group" />
                            </SplitButton>
                        </div>
                        </div>
                    </div>
                    <div className="table-div">
                        <Grid
                            data={[...products]}
                        >
                            <Column
                                title=" "
                                cell={() => (
                                    <td style={{paddingTop: "22px"}}>
                                        <img className="svg-filter" src={Dot3} alt={"dot"} width={"15px"} height={"25px"}/>
                                    </td>
                                )}
                                width={"70px"}
                            />
                            <Column
                                field={<Checkbox defaultChecked={false}/>}
                                cell={props => (
                                    <td>
                                        <Checkbox style={{backgroundColor:"white"}}/>
                                    </td>
                                )}
                                width="70px"
                            />
                            <Column
                                title="Sort Order"
                                cell={props => (
                                    <td>
                                        <div className="order-td">
                                            <SplitButton text={props.dataItem.sortOrder}/>
                                        </div>
                                    </td>
                                )}
                                width={"140px"}
                            />
                            <Column
                                title="Image"
                                cell={props => (
                                    <td>
                                        <img src={props.dataItem.image} width={"90px"} height={"70px"}/>
                                    </td>
                                )}
                                width={"130px"}
                            />
                            <Column field="part" title="Part#" width={"200px"}/>
                            <Column field="description" title="Description"/>
                            <Column field="mfrName" title="Mfr. Name" width={"140px"}/>
                            <Column field="price" title="Price" width={"100px"}/>
                            <Column field="catalog" title="Catalog" width={"140px"}/>
                            <Column field="enteredBy" title="Entered By" width={"140px"}/>
                            <Column
                                field=""
                                title={<img src={LayerIcon} onClick={this.toggleDrawer} alt="icon"/>}
                                cell={props => (
                                    <td>
                                        <DropDownButton icon="k-icon k-i-more-horizontal" className="table-more-icon">
                                            <DropDownButtonItem text="Edit"/>
                                            <DropDownButtonItem text="Move Up"/>
                                            <DropDownButtonItem text="Move Down"/>
                                            <DropDownButtonItem text="Change Group"/>
                                            <DropDownButtonItem text="Remove"/>
                                        </DropDownButton>
                                    </td>
                                )}
                                width="90px"
                            />
                        </Grid>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomerMaster
