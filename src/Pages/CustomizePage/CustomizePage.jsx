import React, { useState } from "react";
import Input from "../../Components/Input/input";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { BsSearch } from "react-icons/bs";
import { FiMoreHorizontal, FiSettings } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import logo from "../../Assets/Images/clogo.png";
import AddPageModal from "../../Components/AddPageModal/AddPageModal";
import "./CustomizePage.scss";
import { withRouter } from "react-router";
import { Button } from "@progress/kendo-react-buttons";
import { getWidget } from "../../WidgetFactory";


const CustomizePage = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [type, setType] = useState(new Map());

  const allowDrop = e => {
    e.preventDefault();
  };
  const handleDragStart = e => {
    e.dataTransfer.setData("type", e.type);
    };
  
  const handleDrop = (e,index) => {
    debugger;
    e.preventDefault();
    var data = e.dataTransfer.getData("type");

    let newMap=new Map(type);
    newMap.set(index,data);
    setType(newMap);
};
const renderWidget=(index)=>
{
  let widgetType=type.get(index);
  return getWidget(widgetType);
}

  return (
    <div className="customize-container">
      <div className="navbar-wrapper">
        <div className="top-line">
          <div className="left">
            <img src={logo} alt="logo" height="25px" width="35px" />
            <span>Page : &nbsp;</span>
            <DropDownList
              data={["Home", "About Us", "Contact Us", "FAQ"]}
              defaultValue={"Home"}
            />
          </div>
          <div className="left">
            <span className="save">Save</span>
            <div className="vl"></div>
            <span className="preview">Preview</span>
            <div className="vl"></div>
            <FiMoreHorizontal className="more" />
          </div>
        </div>
        <div className="bottom-line">
          <div className="left" onClick={() => props.history.goBack()}>
            <IoArrowBackCircleOutline />
            <span>Back</span>
          </div>
          <div className="left">
            <AiOutlineClose className="close" />
          </div>
        </div>
      </div>
      <div className="page-wrap">
        <div className="content-wrapper">
          <div className="box-1">
            <div className="pages-box">
              <div className="search-box">
                <div className="input-icon">
                  <BsSearch />
                  <Input
                    className="search-input"
                    placeholder={"Search in the list"}
                  />
                </div>
                <div className="close-icon">
                  <AiOutlineClose />
                </div>
              </div>
              <div className="page-list">
                <div>
                </div>
                <PanelBar>
                  <PanelBarItem title={"Standard Controls"} expanded={true}>

                    <li id="li1" draggable={true} onDragStart={(e) => { e.type = "BUTTON"; handleDragStart(e) }} >Button</li>
                    <li id="li2" draggable={true} onDragStart={(e) => { e.type = "Button Group"; handleDragStart(e) }} >Button Group</li>
                    <li id="li3" draggable={true} onDragStart={(e) => { e.type = "Drop Down Button"; handleDragStart(e) }} >Drop Down Button</li>
                    <li id="li4" draggable={true} onDragStart={(e) => { e.type = "Date Input"; handleDragStart(e) }} >Date Input</li>
                    <li id="li5" draggable={true} onDragStart={(e) => { e.type = "Date Picker"; handleDragStart(e) }} >Date Picker</li>

                    <PanelBarItem title={"Chip"}></PanelBarItem>
                    <PanelBarItem title={"Chip List"}></PanelBarItem>
                    <PanelBarItem title={"Floating Action Button"}></PanelBarItem>
                    <PanelBarItem title={"Split Button"}></PanelBarItem>
                    <PanelBarItem title={"Tool Bar"}></PanelBarItem>
                    <PanelBarItem title={"Date Input"}></PanelBarItem>
                    <PanelBarItem title={"Date Range Picker"}></PanelBarItem>
                    <PanelBarItem title={"Dialouge"}></PanelBarItem>
                    <PanelBarItem title={"Window"}></PanelBarItem>
                    <PanelBarItem title={"Editor"}></PanelBarItem>
                    <PanelBarItem title={"Badge"}></PanelBarItem>
                    <PanelBarItem title={"Loader"}></PanelBarItem>
                    <PanelBarItem title={"Skeleton"}></PanelBarItem>
                    <PanelBarItem title={"Input"}></PanelBarItem>
                    <PanelBarItem title={"Masked Input"}></PanelBarItem>
                    <PanelBarItem title={"Numeric Text Box"}></PanelBarItem>
                    <PanelBarItem title={"Radio Button"}></PanelBarItem>
                    <PanelBarItem title={"Radio Group"}></PanelBarItem>
                    <PanelBarItem title={"Range Slider"}></PanelBarItem>
                    <PanelBarItem title={"Slider"}></PanelBarItem>
                    <PanelBarItem title={"Rating"}></PanelBarItem>
                    <PanelBarItem title={"Switch"}></PanelBarItem>
                    <PanelBarItem title={"Text Area"}></PanelBarItem>
                    <PanelBarItem title={"Label"}></PanelBarItem>
                    <PanelBarItem title={"List Box"}></PanelBarItem>
                    <PanelBarItem title={"List View"}></PanelBarItem>
                    <PanelBarItem title={"Auto Complete"}></PanelBarItem>
                    <PanelBarItem title={"Combo Box"}></PanelBarItem>
                    <PanelBarItem title={"Drop Down List"}></PanelBarItem>
                    <PanelBarItem title={"Drop Down Tree"}></PanelBarItem>
                    <PanelBarItem title={"Multi Column Drop Down"}></PanelBarItem>
                    <PanelBarItem title={"Multi Select"}></PanelBarItem>


                  </PanelBarItem>
                  <PanelBarItem title={"Custom Control"} expanded={true}>
                    <PanelBarItem title={"Grid"}></PanelBarItem>
                    <PanelBarItem title={"Inner Item"}></PanelBarItem>
                    <PanelBarItem title={"Product Search"}></PanelBarItem>
                    <PanelBarItem title={"Advance Search"}></PanelBarItem>
                    <PanelBarItem title={"Address"}></PanelBarItem>
                    <PanelBarItem title={"Account Picker"}></PanelBarItem>
                    <PanelBarItem title={"Varriable List"}></PanelBarItem>
                    <PanelBarItem title={"Multi Item Picker"}></PanelBarItem>
                  </PanelBarItem>
                </PanelBar>
              </div>
            </div>
          </div>



          <div className="box-2">
            {new Array(16).fill("null").map((_, index) => (
              <div id={`div-${index}`} className={`grid-item-${index}`} onDragOver={e => allowDrop(e)} onDrop={e => handleDrop(e,index)} >
               
                {renderWidget(index)}
                
                 <FiSettings className='setting' onClick={() => setShowModal(true)} />
              </div>
            ))}

            {/* {[1, 2, 3].map((item) => (
              <div className="row">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div className="col">
                    <FiSettings className='setting' onClick={()=>setShowModal(true)} />
                  </div>
                ))}
              </div>
            ))} */}
          </div>
        </div>
      </div>
      <AddPageModal
        showModal={showModal}
        closeModal={() => setShowModal(false)}
      />
    </div>
  );
};

export default withRouter(CustomizePage);
