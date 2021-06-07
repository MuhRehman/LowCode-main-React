import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './Mainpage.css'; 
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '@progress/kendo-theme-default/dist/all.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Mainpage.css'; 

export default function InnerTabs() {
    return (
        <div>
                <Tabs style={{  marginRight: "223px",marginLeft : "213px",}}>

    <TabList  className="flex-container mx-auto" style={{  marginTop : "83px",marginLeft:"120px"}}>
      <Tab style={{  marginTop : "13px",marginLeft : "13px",}}>Appearance</Tab>
      <Tab style={{  marginRight: "223px",marginLeft : "213px",}}>Conditional </Tab>
      <Tab>Transition</Tab>

    </TabList>

    <TabPanel>
    <div class="flex-container" style={{  marginTop : "13px",marginBottom : "13px",}}>
  <div class="flex-item-heading flex-item-1">
  <div> <span>Edit </span> </div>


  </div>
  <div class="flex-item-heading flex-item-heading2 flex-item-2">
  <div><span> Dark</span> <span>-</span> <span>Light</span> </div>
     


  </div>

</div>
<div className="flex-container">
    <select style={{width:"320px", height:"60px",}} id="cars" name="cars">
  <option value="volvo">Font</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
    <h1>B | I | U</h1>
    <button  style={{width:"120px", height:"60px", marginTop:"12px", fontSize:"23px"}} >Bullets</button>
</div>
<div className="flex-container">
<button  style={{width:"520px", height:"60px", marginTop:"12px", fontSize:"23px"}} >Font Color</button>


    <button  style={{width:"520px", height:"60px", marginTop:"12px", fontSize:"23px"}} >Back-Ground Color</button>
</div>
<div className="flex-container">
<button  style={{width:"300px", height:"60px", marginTop:"12px", fontSize:"23px"}} >Text Alignment</button>

<h3>Padding</h3>
<select style={{width:"220px", height:"60px",}} id="cars" name="cars">
  <option value="volvo">height</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<select style={{width:"220px", height:"60px",}} id="cars" name="cars">
  <option value="volvo">width</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
</div>
<div className="flex-container">

<h3>Padding</h3>
<select style={{width:"120px", height:"60px",}} id="cars" name="cars">
  <option value="volvo">Word</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<select style={{width:"120px", height:"60px",}} id="cars" name="cars">
  <option value="volvo">Line</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<select style={{width:"120px", height:"60px",}} id="cars" name="cars">
  <option value="volvo">Letter</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<select style={{width:"120px", height:"60px",}} id="cars" name="cars">
  <option value="volvo">Paragraph</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
</div>
<div className="flex-container">
<select style={{width:"220px", height:"60px",}} id="cars" name="cars">
  <option value="volvo">Shadow</option>
  <option value="saab">Saab</option>
  <option value="fiat">Fiat</option>
  <option value="audi">Audi</option>
</select>
<h3>Shadow-Style</h3>
<select style={{width:"220px", height:"60px",}} id="cars" name="cars">

</select></div>
<div className="flex-container">
<button  style={{width:"320px", height:"50px", marginRight:"85px", marginLeft:"auto", marginTop:"12px", fontSize:"23px"}} >Ok</button>

</div>

    </TabPanel>
    <TabPanel>
<h1>.
</h1>
    </TabPanel>
    <TabPanel>
 


      <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3 row"
>

</Tabs>

   
       </TabPanel>
  </Tabs>
        </div>
    )
}
