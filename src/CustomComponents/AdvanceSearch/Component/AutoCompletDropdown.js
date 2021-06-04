import React, {useState} from "react";
import { AutoComplete } from "@progress/kendo-react-dropdowns";
// import { filterBy } from "@progress/kendo-data-query";
import countries from "./countries";
// const source = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan"];
const AutoCompletDropdown = () => {
    const [state, setState] = React.useState({
        value: "",
        suggest: ""
    });

    const handleChange = event => {
        setState({
            value: event.value,
            suggest: event.suggestion ? event.suggestion.value : ""
        });
    };

    const dataOrders = [
        { orderName: "Cunewalde", orderId: 1, productId: 1 },
        { orderName: "Albuquerque", orderId: 2, productId: 1 },
        { orderName: "Geneva", orderId: 3, productId: 2 },
        { orderName: "Graz", orderId: 4, productId: 2 },
        { orderName: "London", orderId: 5, productId: 3 },
    ];

    return <div className="example-wrapper">
        <div className="col-xs-12 col-sm-6 example-col">
            {/*<p>AutoComplete in Uncontrolled Mode</p>
            <AutoComplete data={countries} value={state.value} suggest={true} placeholder="e.g. Austria" />*/}
        </div>
        <div className="col-xs-12 col-sm-6 example-col">

            <AutoComplete
                // style={{
                //     zIndex: 10003
                // }}
                label="Order"
                data={dataOrders}
                textField="orderName"
                suggest={true}
                popupSettings={{
                    className: "testClass"
                }}
            />
        </div>
    </div>;
};

export default AutoCompletDropdown;