import React, { useRef, useState } from "react";
import Input from "../../Components/Input/input";
import Button from "../../Components/Button/button";
import { Popup } from "@progress/kendo-react-popup";
import {
  BsSearch,
  BsFileEarmarkText,
  BsThreeDotsVertical,
  BsPencil
} from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { RiDeleteBin5Line } from "react-icons/ri";

import "./PageList.scss";
import AddPageModal from "../../Components/AddPageModal/AddPageModal";



const PageList = (props) => {

  const [indexShow, setIndexShow] = useState();
  const [showAddPageModal,setShowAddPageModal]=useState(false)

  const pages = [
    {name:'Home',anchor:useRef(null)},
    {name:'Category',anchor:useRef(null)},
    {name:'Product',anchor:useRef(null)},
    {name:'Checkout',anchor:useRef(null)},
    {name:'Payment',anchor:useRef(null)},
    {name:'FAQ',anchor:useRef(null)},
    {name:'Home',anchor:useRef(null)},
    {name:'Category',anchor:useRef(null)},
    {name:'Product',anchor:useRef(null)},
    {name:'Checkout',anchor:useRef(null)},
    {name:'Payment',anchor:useRef(null)},
    {name:'FAQ',anchor:useRef(null)},
  ];
  

  const onMoreClick=(index)=>{
    if(index===indexShow){
      setIndexShow()
    }else{
      setIndexShow(index)
    }
  }

  return (
    <div className="pagelist-container">
      <div className="page-wrap" >
        <div className="box-1">
          <div className="page-global">
            <span className="page">Page</span>
            <span className="desk">|</span>
            <span className="global">Global</span>
          </div>
          <div className="pages-box">
            <div className="search-box">
              <BsSearch />
              <Input
                className="search-input"
                placeholder={"Search in the list"}
              />
            </div>
            <div className="page-list">
              {pages.map((page, index) => (
                <div className="page">
                  <div className="left">
                    <BsFileEarmarkText />
                    <span>{page.name}</span>
                  </div>
                  <div className="right" ref={page.anchor} >
                    <BsThreeDotsVertical
                      onClick={() => onMoreClick(index)}
                    />
                    <Popup className="popup-setting" show={index === indexShow} anchor={page.anchor.current}>
                      <div className='more-content'>
                        <div className='content' onClick={()=>{setShowAddPageModal(true);setIndexShow()}}>
                          <BsPencil />
                          <span>Edit page info</span>
                        </div>
                        <div className='content' onClick={()=>props.history.push('/customize-page')}>
                          <GoSettings />
                          <span>Customize page</span>
                        </div>
                        <div className='content'>
                          <RiDeleteBin5Line />
                          <span>Delete page</span>
                        </div>
                      </div>
                    </Popup>
                  </div>
                </div>
              ))}
            </div>
            <div className="add-btn">
              <Button onClick={()=>setShowAddPageModal(true)}>Add New Page</Button>
            </div>
          </div>
        </div>
        <div className="box-2" onClick={()=>setIndexShow()}></div>
      </div>
      <AddPageModal showModal={showAddPageModal} closeModal={()=>setShowAddPageModal(false)} />
    </div>
  );
};

export default PageList;