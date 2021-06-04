import React from 'react';
import {Button, SplitButton, SplitButtonItem} from "@progress/kendo-react-buttons";
// import GeneralInformation from "./component/GeneralInformation"
// import ProductsAndServices from "./component/ProductsAndServices"
import "./quote.scss"


class FormScreen extends React.Component {
    render() {
        return (
            <div className="quote">
                <div>
                    <div className="k-d-flex justify-content-between">
                        <h2>
                            Add New Quote
                        </h2>
                        <div>
                            <Button className="k-mr-3">Cancel</Button>
                            <Button className="k-mr-3">Preview</Button>
                            <SplitButton text="Save" className="primary-button" />
                        </div>
                    </div>
                    <div className="quote-step">
                        <p className="k-icon k-i-check-circle k-mr-2" style={{color: "#11d411"}} />
                        <p className="k-mr-3">General Information</p>
                        <p className="k-mr-3">></p>
                        <p className="k-mr-3 active">Products & Services</p>
                        <p className="k-mr-3 disable">></p>
                        <p className="k-mr-3 disable">Terms</p>
                        <p className="k-mr-3 disable">></p>
                        <p className="k-mr-3 disable">Proposal Builder</p>
                        <p className="k-mr-3 disable">></p>
                        <p className="disable">Send</p>
                    </div>
                </div>

                {/*<GeneralInformation />
                <ProductsAndServices />

                <div className="k-mt-5 k-pt-5" style={{borderTop: "1px solid #b7b5b5"}}>
                    <h3>3. Terms</h3>
                </div>

                <div className="k-mt-5 k-pt-5" style={{borderTop: "1px solid #b7b5b5"}}>
                    <h3>4. Proposal Builder</h3>
                </div>*/}

            </div>
        );
    }
}

export default FormScreen
