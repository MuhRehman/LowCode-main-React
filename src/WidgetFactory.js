import LButton from "./UIComponent/Button/PrimaryButton";
import ButtonGroupComponent from "./UIComponent/Button/GroupButton";
import DropDownButtonComponent from "./UIComponent/Button/DropDownButton";
import {LDateInput} from "./UIComponent/DateInput/DateInput";
import LDatePicker from "./UIComponent/DateInput/DatePicker";
import LChip from "./UIComponent/Chip/Chip";
export const  getWidget=(type)=>
{
   
    if(type==="BUTTON")
    {
        return <LButton/>
    }
    if(type==="BUTTONGROUP")
    {
        return <ButtonGroupComponent/>
    }
    if(type==="DROPDOWNBUTTON")
    {
        return <DropDownButtonComponent/>
    }
    if(type==="DATEINPUT")
    {
        return <LDateInput/>
    }
    if(type==="DATEPICKER")
    {
        return <LDatePicker/>
    }
    if(type==="CHIP")
    {
        return <LChip/>
    }


    return <></>

}