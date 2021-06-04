import React, { useState } from "react";
import "./styles.scss";
import { Window, WindowActionsBar } from "@progress/kendo-react-dialogs";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import General from "../../CustomComponents/PartyPicker/Genral/general";
import Billing from "../../CustomComponents/PartyPicker/Billing/billing";
import Payment from "../../CustomComponents/PartyPicker/Payment/payment";
import More from "../../CustomComponents/PartyPicker/More/more";
import CustomerDialog from "../../CustomComponents/PartyPicker/Customer/customer";

const PartyPicker = (props) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(0);

  const toggleDialog = () => {
    setVisible(!visible);
  };

  const handleSelect = (e) => {
    setSelected(e.selected);
  };

  return (
    <div className="customer-wrapper">
      <CustomerDialog toggleDialog={toggleDialog} />
      {visible && (
        <Window
          title={"Add New Customer"}
          className="window"
          top={50}
          height={660}
          width={800}
          onClose={toggleDialog}
          initialHeight={350}
        >
          <TabStrip selected={selected} onSelect={handleSelect}>
            <TabStripTab title="General">
              <General />
            </TabStripTab>
            <TabStripTab title="Billing">
              <Billing />
            </TabStripTab>
            <TabStripTab title="Shipping">
              <Billing shipping={true} />
            </TabStripTab>
            <TabStripTab title="Payment Details">
              <Payment />
            </TabStripTab>
            <TabStripTab title="More">
              <More />
            </TabStripTab>
          </TabStrip>
          <WindowActionsBar layout={"end"}>
            <button type="button" className="k-button cancle__button" onClick={toggleDialog}>
              Cancel
            </button>
            <button
              type="button"
              className="k-button k-primary save__button"
              onClick={toggleDialog}
            >
              Save
            </button>
          </WindowActionsBar>
        </Window>
      )}
    </div>
  );
};

export default PartyPicker;
