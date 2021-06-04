import React from "react";
import "./Sidebar.scss"
import searchicon from "../../../Assets/Images/searchicon.png";

const Sidebar = () => {

    return(
        <div className="main">
            <div className="search-box">
                <div className="search-inner">
                    <img src={searchicon}/><input type="text" className="searchbar"
                                                  placeholder="Search brands..."/>
                </div>
            </div>
            <div className="filter filter-1">
                <p>Filter-1</p>
                <input type="checkbox" value="Brand1" id="Value1" className="brand"/>
                <label htmlFor="Value1">Value</label><br/>
                <input type="checkbox" value="Brand1" id="Value2" className="brand"/>
                <label htmlFor="Value2">Value</label><br/>
                <input type="checkbox" value="Brand1" id="Value3" className="brand"/>
                <label htmlFor="Value3">Value</label><br/>
            </div>
            <div className="filter filter-2">
                <p>Filter-2</p>
                <input type="checkbox" value="Brand1" id="Value1" className="brand"/>
                <label htmlFor="Value1">Value</label><br/>
                <input type="checkbox" value="Brand1" id="Value2" className="brand"/>
                <label htmlFor="Value2">Value</label><br/>
                <input type="checkbox" value="Brand1" id="Value3" className="brand"/>
                <label htmlFor="Value3">Value</label><br/>
            </div>
            <div className="filter filter-3">
                <p>Filter-3</p>
                <input type="checkbox" value="Brand1" id="Value1" className="brand"/>
                <label htmlFor="Value1">Value</label><br/>
                <input type="checkbox" value="Brand1" id="Value2" className="brand"/>
                <label htmlFor="Value2">Value</label><br/>
                <input type="checkbox" value="Brand1" id="Value3" className="brand"/>
                <label htmlFor="Value3">Value</label><br/>
            </div>
            <div className="filter filter-4">
                <p>Filter-4</p>
                {/*<input type="checkbox" value="Brand1" id="Value1" className="brand"/>*/}
                {/*<label htmlFor="Value1">Value</label><br/>*/}
                {/*<input type="checkbox" value="Brand1" id="Value2" className="brand"/>*/}
                {/*<label htmlFor="Value2">Value</label><br/>*/}
                {/*<input type="checkbox" value="Brand1" id="Value3" className="brand"/>*/}
                {/*<label htmlFor="Value3">Value</label><br/>*/}
            </div>
            
        </div>
    )
};

export default Sidebar;