import React from "react";
import "./more.scss";
import { TextArea } from "@progress/kendo-react-inputs";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const More = () => {
  const sports = ["Baseball", "Basketball", "Cricket", "Football"];
  return (
    <div className="general-wrap">
      <div className="item-row">
        <div className="item-box">
          <span className="item-title">Currency</span>
          <DropDownList defaultValue="USD" data={sports} />
        </div>
      </div>
      <div className="item-row">
        <div className="item-box">
          <span className="item-title">Notes</span>
          <TextArea
            defaultValue={
              "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
            }
            spellCheck={false}
            rows={7}
          />
        </div>
      </div>
    </div>
  );
};

export default More;
