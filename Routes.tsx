import React from 'react';
// import './_main.css';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from './Main/Login'
import Feed from './Main/Feed'
import ProfileSideBar from './Main/ProfileSideBar'


function Routes (){
    return(
        <BrowserRouter>

       <section className = "main">    
            <Link to = "/">ROOT </Link>
            <Link to = "/feed">  TESTE</Link>
        

        <Switch>
            <Route exact={true} path="/">
                <Login />
            </Route>
            <Route path="/feed">
                <Feed />
                <ProfileSideBar />
            </Route>
        </Switch>
        </section>
        </BrowserRouter>
    );
}

export default Routes;