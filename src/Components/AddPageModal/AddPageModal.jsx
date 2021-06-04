import React from "react";
import { Window } from "@progress/kendo-react-dialogs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

import "./AddPageModal.scss";
import Input from "../Input/input";
import Button from "../Button/button";

const AddPageModal = (props) => {
  const { showModal, closeModal } = props;
  return (
    <div className="add-page-modal-container">
      {showModal && (
        <Window
          title={"Create a new page"}
          onClose={() => closeModal()}
          initialHeight={400}
          initialWidth={600}
        >
          <div>
            <div className="row-box">
              <div className="content-box">
                <label>Page Name</label>
                <Input placeholder={"Type here..."} />
              </div>
              <div className="content-box">
                <label>Clone Page From</label>
                <DropDownList data={["Page 1", "Page 2", "Page 3", "Page 4"]} />
              </div>
            </div>
            <div className="row-box">
              <div className="content-box">
              <label>No. of Rows</label>
                <DropDownList data={["1", "2", "3", "4"]} />
              </div>
              <div className="content-box">
                <label>No. of Columns</label>
                <DropDownList data={["1", "2", "3", "4","5","6"]} />
              </div>
            </div>
            <div className='btn-wrap'>
            <Button>Create Page</Button>
            </div>
          </div>
        </Window>
      )}
    </div>
  );
};

export default AddPageModal;
