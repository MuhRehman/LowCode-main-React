import React from 'react';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import products from "../../../products";
import {Grid, GridColumn as Column} from "@progress/kendo-react-grid";
import {Button} from "@progress/kendo-react-buttons";


class ProductsAndServices extends React.Component {
    render() {
        return (
            <div className="k-mt-5 k-pt-5" style={{borderTop: "1px solid #b7b5b5"}}>
                <h3>2. Products & Services</h3>

                <div className="k-d-flex w-100 k-mt-5">
                    <TabStrip selected={0} className="w-100">
                        <TabStripTab title="Products">
                            <div>
                                <Grid
                                    data={[] || [{
                                        "ProductID" : 1,
                                        "sortOrder": "1",
                                        "image": "https://www.reliancedigital.in/medias/Microsoft-Surface-Laptop-Go-Laptops-491946834-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyMjIzMjJ8aW1hZ2UvanBlZ3xpbWFnZXMvaGVjL2gwNi85NDY2MzQ1Njg1MDIyLmpwZ3wwMGVjMzE3MTc3MjY4MjAyODQ5ZDBlYjkyNDcyOWZjYTBiNzY2ODhmNjFjNjAzN2I2OWQxY2JjMGZmODEzNmMw",
                                        "part": "ABCDEF-123456789",
                                        "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
                                        "mfrName": "Apple lnc.",
                                        "price": "$1,999",
                                        "catalog": "VARStreet",
                                        "enteredBy": "Saquib Jawed"
                                    }]}
                                >
                                    <Column
                                        field="checkbox"
                                        title={<input type="checkbox" defaultChecked={false}/>}
                                    />
                                    <Column
                                        title="Sort"
                                        field="part #"
                                    />
                                    <Column field="part #" title="Part #" />
                                    <Column field="description" title="Description"/>
                                    <Column field="mfrName" title="Last Price" />
                                    <Column field="price" title="Unit Price" />
                                    <Column field="catalog" title="Unit Cost" />
                                    <Column field="enteredBy" title="Qty." />
                                    <Column field="enteredBy" title="Extended" />
                                    <Column field="enteredBy" title="Tax" />
                                    <Column field="enteredBy" title="Margins" />
                                    <Column field="enteredBy" title="% Off" />
                                    <Column field="enteredBy" title="Action"/>
                                    {/*<Column*/}
                                    {/*    title="Action"*/}
                                    {/*    footerCell={props => (*/}
                                    {/*        <td colSpan={1} className="k-text-center">*/}
                                    {/*            <Button primary={true} className="k-mr-5">Add Product</Button>*/}
                                    {/*            <Button primary={true}>Add Section</Button>*/}
                                    {/*        </td>*/}
                                    {/*    )}*/}
                                    {/*    colSpan={13}*/}
                                    {/*/>*/}
                                </Grid>
                            </div>
                        </TabStripTab>
                        <TabStripTab title="Services" />
                        <TabStripTab title="Suggestions" />
                        <TabStripTab title="Price Worksheet" />
                    </TabStrip>
                </div>
            </div>
        );
    }
}

export default ProductsAndServices
