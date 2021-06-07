import React from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import "./App.scss";
import CustomizePage from "./Pages/CustomizePage/CustomizePage";
import EditPage from "./Pages/EditPage/EditPage";
import ForgotPassword from "./Pages/ForgotPassword/ForgotPassword";
import MainPage from "./Pages/MainPage/Mainpage";
import Login from "./Pages/Login/Login";
import PageList from "./Pages/PageList/PageList";
import Signup from "./Pages/Signup/Signup";
import ListScreen from "./CustomComponents/ListScreen";
import FormScreen from "./CustomComponents/FormScreen";
import AdvanceSearch from "./CustomComponents/AdvanceSearch";
import ProductSearch from "./CustomComponents/ProductSearch";
import PartyPicker from "./Pages/PartyPicker";

const App = (props) => {

  return (
    <div className="App">
      <Switch>        
        <Route exact path={'/register'} component={Signup} />
        <Route exact path={'/forgot-password'} component={ForgotPassword} />
        <Route exact path={'/page-list'} component={PageList} />
        <Route exact path={'/edit-page'} component={EditPage} />
        <Route exact path={'/customize-page'} component={CustomizePage} />
        <Route exact path={'/list-screen'} component={ListScreen} />
        <Route exact path={'/form-screen'} component={FormScreen} />
        <Route exact path={'/advance-search'} component={AdvanceSearch} />
        <Route exact path={'/product-search'} component={ProductSearch} />
        <Route exact path={'/party-picker'} component={PartyPicker} />
        <Route exact path={'/main-page'} component={MainPage} />
        <Route exact path={'/'} component={Login} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
};

export default withRouter(App);
