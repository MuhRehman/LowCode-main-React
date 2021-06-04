import React, {useEffect, useState} from "react";
import {Window, WindowActionsBar} from "@progress/kendo-react-dialogs";
import "./AdvancSearch2.scss"
import Sidebar from "./Component/Sidebar";
import Content from "./Component/RightContent";


const AdvancSearch2 = () =>{
    const [showModel, setModel] = useState(false);
    useEffect(() => {
        setModel(true);
    }, []);

    const onChange = (e) => {
        setModel({layout: e.target.value});
    };
    const toggleDialog = () => {
        // setModel(!setModel);
    };

    return(
        <div className="main">

            {showModel &&
            <Window title={"Advance Search"} onClose={toggleDialog} initialHeight={532} initialWidth={1502}>
                <div className="example-config">
                        <div className="side-bar">

                            <Sidebar/>
                        </div>
                        <div className="right-side-box">
                            <Content/>
                        </div>

                    </div>
                    <div className="rightcontent"> </div>
                    <WindowActionsBar layout={showModel.layout} initialHeight={573} initialWidth={1502}>

                        <p className="SelectItem">select item to search</p>
                        <p className="PicupProduct">Picup Product</p>
                        {/*<p className="k-button" onClick={toggleDialog}>Select Item to Search</p>*/}
                        {/*<button type="button" className="k-button k-primary1" onClick={toggleDialog}>Picup Product</button>*/}
                    </WindowActionsBar>
            </Window>}
        </div>

    )
};

export default AdvancSearch2;