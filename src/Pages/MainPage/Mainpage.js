import  {React , useState} from 'react'
import Button from 'react-bootstrap/Button';
import {  Modal  } from 'react-bootstrap';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './Mainpage.css'; 
import InnerTabs from './InnerTabs';
export default function Mainpage() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
             <Tabs>
    <header  className="flex-container">
      
      <h1>Style </h1>
      <h1>Mian</h1>
       

     
      <div style={{ marginTop : "12px"}}>
        
      <button style={{ padding: "12px"}}>Upload</button>
      <div>Username</div>
    
      </div>

    </header>



      <Modal
        show={show}
        size="xl"
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Style </Modal.Title>
          <Modal.Title><span> Dark</span> <span>-</span> <span>Light</span>  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div>
   
   <div>
<div className="">
<h2>Create Your own style</h2>
<div class="flex-container" style={{ marginTop : "13px",marginBottom : "1px",}}>




</div>
<div className="" >

<div class="flex-container" >

 
<input type="text" placeholder="Enter Your Style Here" />



</div>
<div class="flex-container" >

 
<input type="text" placeholder="Enter the  CSS path of your  style Here" />



</div>
<div class="flex-container" >

 
<input type="text" placeholder="Element On which you want to apply your style" />



</div>
<div class="flex-container" >

 
<div className="div"></div>
<div className=""  style={{display:"flex"}}>

 

</div>
</div>
</div>
</div>
 </div>
</div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{width:"122px",height:"52px", marginTop:"13px"}} variant="secondary" onClick={handleClose}>
          Create
          </Button>
          
 <h2 style={{marginLeft:"22px",marginRight:"22px"}}>|  </h2>
          <Button style={{width:"122px",height:"52px", marginTop:"13px"}} variant="secondary">Draft</Button>
        </Modal.Footer>
      </Modal>
    <TabList  className="flex-container">
      <Tab > Main </Tab>

      <Button onClick={handleShow} variant="secondary" >Add Style </Button>
      <Tab>Edit</Tab>
      <button>Page  : Index  <i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></button>

    </TabList>

    <TabPanel>
    <div class="flex-container" style={{  marginTop : "83px",}}>
  <div class="flex-item-custom flex-item-1">
  <div>Button </div>

<div>-</div>
  </div>
  <div class="flex-item flex-item-2">
  <div>Primery </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item flex-item-2">
  <div>Secondary </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item flex-item-2">
  <div>Outline </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Alert   </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Standard </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Warning </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Note </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Group </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Selected </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Border </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Warning </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
    
    
    
<div class="flex-container" style={{  marginTop : "",}}>
  <div class="flex-item-custom flex-item-1">
  <div>Heading </div>

<div>-</div>
  </div>
  <div class="flex-item flex-item-2">
  <div>H1 </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item flex-item-2">
  <div>H2 </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item flex-item-2">
  <div>H3</div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Section   </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Heading </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Section Title </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Section Text </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Text </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Trip Text </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Warning Text </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Input Text </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
    <div class="flex-container" >
  <div class="flex-item-custom flex-item-1">
  <div>Selection </div>

<div>-</div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Check Box </div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div> Dropdown</div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div class="flex-item-button flex-item-2">
  <div>Radio Buttons </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>
 
    
    </TabPanel>
    <TabPanel>
    <Tabs
  defaultActiveKey="home"
  transition={false}
  id="noanim-tab-example"
  className="mb-3 row"
>
<InnerTabs></InnerTabs>
</Tabs>
    </TabPanel>
    <TabPanel>
 


   

{/* <div className="editing-container">

    <div class="flex-container" >

  <div class="flex-item-button flex-item-2">
  <div>Appearance</div>

<div><i className="fa fa-angle-down" style={{ color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
  <div style={{ marginTop : "12px" , }}>|</div>
  <div class="flex-item-button flex-item-2">
  <div> Conditional </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
 <div style={{ marginTop : "12px" , }}>|</div>  
  <div class="flex-item-button flex-item-2">
  <div>Transition</div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>





    <div class="flex-container" >

    <div class="flex-item-button-font flex-item-2">
  <div>Font </div>

<div><i className="fa fa-angle-down" style={{ marginLeft : "12px" , }}></i></div>
  </div>
  
  <div class="flex-item-button-biu flex-item-2">
  <div> B<div style={{ marginTop : "12px" , }}>|</div>I <div style={{ marginTop : "12px" , }}>|</div>U </div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
 <div style={{ marginTop : "12px" , }}>|</div>  
  <div class="flex-item-button flex-item-2">
  <div>Transition</div>

<div><i className="fa fa-angle-down" style={{color:"rgb(214, 212, 212)", marginLeft : "12px" , }}></i></div>
  </div>
</div>





</div>  */}
    </TabPanel>
  </Tabs>
        </div>
    )
}
