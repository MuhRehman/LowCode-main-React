import React, {useState, useEffect} from "react";
import {Window, WindowActionsBar} from '@progress/kendo-react-dialogs';
import { RangeSlider, SliderLabel } from "@progress/kendo-react-inputs"
import searchicon from "../../../Assets/Images/searchicon.png";
import AutoCompletDropdown from "./AutoCompletDropdown";
import {useHistory} from "react-router-dom";


const title = [

    {label: "Catalog", classname: "catalog"},
    {label: "Category", classname: "category "},
    {label: "Subcategory", classname: "subcategory"},
    {label: "Brand", classname: "brand"},
    {label: "Part number", classname: "part-number"},
    {label: "sku", classname: "sku"},
    {label: "Keyword", classname: "ketword"},
    {label: "Price range", classname: "price-range"},
    {label: "Availability", classname: "availability"},
];
const searchFilter = [
    {id: "brand1", label: "Brand1"},
    {id: "brand2", label: "Brand2"},
    {id: "brand3", label: "Brand3"},
    {id: "brand4", label: "Brand4"},
    {id: "brand5", label: "Brand5"},
    {id: "brand6", label: "Brand6"},
    {id: "brand7", label: "Brand7"},
    {id: "brand8", label: "Brand8"},
    {id: "brand9", label: "Brand9"},
    {id: "brand10", label: "Brand10"}
];


const AdvanceSearch = () => {

    const history = useHistory();
    const [showModel, setModel] = useState(false);
    const [activeClass, setClass] = useState("catalog");
    const [label, setLabel] = useState("Catalog");
    const handelModel = () => {
        setModel({});
    };
    useEffect(() => {
        setModel(true);
    }, []);

    const onChange = (e) => {
        setModel({layout: e.target.value});
    };
    const toggleDialog = () => {
        setModel(!setModel);
        history.push("/product-search");

    };
    const selectTab = (label, classActive) => {
        console.log("--->", classActive)
        setLabel(label);
        setClass(classActive);
    };
    return (
        <div>

            {showModel &&
            <Window title={"Advance Search"} onClose={toggleDialog} initialHeight={786} initialWidth={1328}>
                <div className="example-config">
                    <div className="side-bar">
                        <div className="items">
                            {title.map((item, i) => (
                                <div className="side-content">
                                    <p className={`${item.classname} ${item.classname === activeClass && "active"}`} key={i}
                                       onClick={() => selectTab(item.label, item.classname)}>{item.label}</p>
                                </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className="rightcontent">
                        {/*<div className="search-div">*/}
                        {/*    <div className="search-inner">*/}
                        {/*        <img src={searchicon}/><input type="text" className="searchbar"*/}
                        {/*                                      placeholder="Search brands..."/>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="right-bottom">
                            {(label === "Brand"  || label === "Subcategory"|| label === "Category") &&
                                <div className="search-page">
                                    <div className="search-div">
                                        <div className="search-inner">
                                            <img src={searchicon}/><input type="text" className="searchbar"
                                                                          placeholder="Search brands..."/>
                                        </div>
                                    </div>
                                    {searchFilter.map((item, i) =>(
                                        <div>
                                            <input type="checkbox" value="Brand1" id="brand1" className="brand"/>
                                            <label htmlFor="brand1">Brand1</label>
                                            <input type="checkbox" value="Brand2" id="brand2" className="brand"/>
                                            <label htmlFor="brand2">Brand2</label>
                                            <input type="checkbox" value="Brand3" id="brand3" className="brand"/>
                                            <label htmlFor="brand3">Brand3</label>
                                            <input type="checkbox" value="Brand4" id="brand4" className="brand"/>
                                            <label htmlFor="brand4">Brand4</label>
                                            <input type="checkbox" value="Brand5" id="brand5" className="brand"/>
                                            <label htmlFor="brand5">Brand5</label>
                                        </div>
                                    ))}
                                </div>
                            }

                            {(label === "Part number" || label === "sku" || label === "Keyword" )&&
                            <div>
                                    <AutoCompletDropdown/>
                            </div>}
                            {label === "Catalog" &&
                            <div className="catalog">
                                <div className="chekbox">


                                    <div> <input type="checkbox" value="varstree1" id="varstree1" className="varstree"/>
                                        <label htmlFor="varstree1" className="varstree" >VARStree</label></div>
                                    <div><input type="checkbox" value="custom catlog"  id="varstree2" className="varstree"/>
                                        <label htmlFor="varstree2" className="varstree" >Custom Catlog</label></div>

                                </div>
                                </div>}

                            {label === "Price range" &&
                            <div className="rang-selector">
                                <RangeSlider
                                    defaultValue={{
                                        start: 30,
                                        end: 70,
                                    }}
                                    step={1}
                                    min={0}
                                    max={100}
                                >
                                    {[0, 25, 50, 75, 100].map((perc, i) => (
                                        <SliderLabel key={i} position={perc}>
                                            {perc.toString()}
                                        </SliderLabel>
                                    ))}
                                </RangeSlider>
                            </div>}
                            {label === "Availability" &&
                            <div className="availability">
                                <div className="instok">
                                    <input type="radio" value="inStoke" id="inStoke" name="StokeCheker" className="stokeradio"/>
                                    <label htmlFor="inStoke" className="stokelabel">In Stoke</label>
                                    <input type="radio" value="outOfStoke" id="outOfStoke" name="StokeCheker" className="stokeradio"/>
                                    <label htmlFor="outOfStoke" className="stokelabel">Out Of Stoke</label>
                                </div>
                            </div>}

                        </div>
                    </div>
                </div>
                <WindowActionsBar layout={showModel.layout} initialHeight={786} initialWidth={1328}>
                    <button type="button" className="k-button" onClick={toggleDialog}>Cancel</button>
                    <button type="button" className="k-button k-primary" onClick={toggleDialog}>Apply</button>
                </WindowActionsBar>
            </Window>}
        </div>
    )
}

export default AdvanceSearch;