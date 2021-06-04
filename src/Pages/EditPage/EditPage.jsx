import React from "react";
import Input from "../../Components/Input/input";
import { BsSearch } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { RiPencilFill } from "react-icons/ri";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";


import "./EditPage.scss";

const EditPage = (props) => {
    
  return (
    <div className="editpage-container">
      <div className="page-wrap">
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
              <PanelBar>
                <PanelBarItem title={"Data"} expanded={true}>
                  <PanelBarItem title={"Data Tables"}></PanelBarItem>
                  <PanelBarItem title={"Cards with charts"}></PanelBarItem>
                  <PanelBarItem title={"Cards with numbers"}></PanelBarItem>
                  <PanelBarItem title={"Calendar"}></PanelBarItem>
                  <PanelBarItem title={"Carousel"}></PanelBarItem>
                </PanelBarItem>
                <PanelBarItem title={"Visual Elements"} expanded={true}>
                  <PanelBarItem title={"Text"}></PanelBarItem>
                  <PanelBarItem title={"Button"}></PanelBarItem>
                  <PanelBarItem title={"Images"}></PanelBarItem>
                  <PanelBarItem title={"Alerts"}></PanelBarItem>
                  <PanelBarItem title={"Toasters"}></PanelBarItem>
                  <PanelBarItem title={"Accordian"}></PanelBarItem>
                  <PanelBarItem title={"Tabs"}></PanelBarItem>
                  <PanelBarItem title={"Tooltips"}></PanelBarItem>
                </PanelBarItem>
                <PanelBarItem title={"Navigation"} expanded={true}>
                  <PanelBarItem title={"Breadcrumb"}></PanelBarItem>
                  <PanelBarItem title={"Dropdown"}></PanelBarItem>
                  <PanelBarItem title={"Menu"}></PanelBarItem>
                  <PanelBarItem title={"Pagination"}></PanelBarItem>
                  <PanelBarItem title={"Steps"}></PanelBarItem>
                </PanelBarItem>
                <PanelBarItem title={"Feedback"} expanded={true}>
                  <PanelBarItem title={"Alert"}></PanelBarItem>
                  <PanelBarItem title={"Drawer"}></PanelBarItem>
                  <PanelBarItem title={"Modal"}></PanelBarItem>
                  <PanelBarItem title={"Popconfirm"}></PanelBarItem>
                  <PanelBarItem title={"Progress"}></PanelBarItem>
                  <PanelBarItem title={"Skeleton"}></PanelBarItem>
                </PanelBarItem>
              </PanelBar>
            </div>
          </div>
        </div>
        <div className="box-2">
          <div className='column-grp'>
            {[1, 2, 3, 4, 5, 6,7].map((item) => (
              <div className="column">
                <span>Column Name</span>
                <RiPencilFill />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default EditPage;
