import React from 'react';
import { Card } from '@progress/kendo-react-layout';
import {Input} from "@progress/kendo-react-inputs";
import { MaterialInput } from "../../../GlobalComponents/Inputs"

class GeneralInformation extends React.Component {
    render() {
        return (
            <div className="k-mt-5">
                <h3>1. General Information</h3>

                <div className="k-d-flex w-100">
                    <Card className="w-35 k-mt-4 k-mr-5" style={{ boxShadow: '0 0 4px 0 rgba(0, 0, 0, .1)' }}>
                        <div className="k-p-7">
                            <h3>Saquib Jawed for VARStreet lnc.</h3>

                            <p className="k-mt-5">+1-8888 888 888</p>
                            <p>sjawed@varstreet.com</p>

                            <p className="k-mt-5">Blooming Dales, Opp. Jupiter Hospital, Baner</p>
                            <p>Pasadena, California, 35005, U.S.A</p>
                        </div>
                        <div style={{borderTop: "1px solid #b7b5b5"}}>
                            <div className="k-p-7">
                                <a className="k-mr-5 k-cursor-pointer"><b>Edit Customer</b></a>
                                <a className="k-cursor-pointer"><b>Change Customer</b></a>
                            </div>
                        </div>
                    </Card>
                    <div className="w-100">
                        {
                            [1, 2, 3, 4].map((x, index) => (
                                <div className="k-d-flex justify-content-between w-100 k-mt-2" key={index.toString()}>
                                    <div className="w-100 k-mr-2 k-mt-1">
                                        <MaterialInput label={"Quote 1"} value={"VS- QUOTE - 20210331"} />
                                    </div>
                                    <div className="w-100 k-mr-2 k-mt-1">
                                        <MaterialInput label={"Quote 1"} value={"VS- QUOTE - 20210331"} />
                                    </div>
                                    <div className="w-100 k-mr-2 k-mt-1">
                                        <MaterialInput label={"Quote 1"} value={"VS- QUOTE - 20210331"} />
                                    </div>
                                    <div className="w-100 k-mt-1">
                                        <MaterialInput label={"Quote 1"} value={"VS- QUOTE - 20210331"} />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default GeneralInformation
