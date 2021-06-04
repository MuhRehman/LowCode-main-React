import React,{useState} from "react";
import "./RightContent.scss"
import products from "../../ProductSearch/Component/AdvProduct";
import {Grid, GridColumn as Column} from "@progress/kendo-react-grid";
import {Checkbox} from "@progress/kendo-react-inputs";
import Laptopicon from "../../../Assets/Images/macbook-Advancesearch2.png"
import Elips from "../../../Assets/Images/Ellipse 2.png"

const Content =()=>{
    const [state,setState]= useState({
        expanded: false
    })

    const toggleDrawer = () => {
        setState({expanded: !state.expanded})
    };
    return(
        <div  className="main">
            <div className="title-bar">
                <input type="checkbox"/>
                <p className="p1">image</p>
                <p className="p2">Part#</p>
                <p className="p3">Description</p>
                <p className="p4">Mfr name</p>
                <p className="p5">Slock (Agg)</p>
                <p className="p6">MSRP</p>
                <p className="p7">Cost</p>
                <p className="p8">Price</p>
            </div>
            <div className="All-content">


                <Grid
                    style={{
                        height: "400px",
                    }}
                    data={[...products]}
                >
                        <Column
                            field={<Checkbox defaultChecked={false} style={{width:"12px", height:"12px"}}/>}
                            cell={props => (
                                <td>
                                    <Checkbox style={{backgroundColor:"white", width:"12px", height:"12px" }}/>
                                </td>
                            )}
                            width="70px"
                        />

                        <Column  className="titleOfimg"
                            title="Image"
                            cell={props => (
                                <td style={{innerWidth: "30px", innerpadding:"0",   width: "60px", padding: "0", margin:"0"}}>
                                    <img src={Laptopicon} width={"70px"}   height={"35px"}/>
                                </td>
                            )}
                        />
                    <Column field="part" title="Part" width="200px" />
                    <Column field="description" title="Description" width="250px" className="Ds"/>
                    <Column field="mfrName" title="Mfr Name" width="115px"/>
                    <Column field="stock" title="Stock" />
                    <Column field="msrp" title="Msrp" />
                    <Column field="cost" title="Cost" />
                    <Column field="price" title="Price" />
                    <Column
                            cell={props => (
                                <td style={{innerWidth: "1  0px", innerpadding:"0", padding: "0", margin:"0"}}>
                                    <img src={Elips} width={"12.5px"}   height={"12.5px"}/>
                                </td>
                            )}/>
                </Grid>
            </div>
        </div>
    );
};

export default Content;