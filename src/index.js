import React from 'react';
import ReactDOM from 'react-dom';
import Login from './login/Login';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import MainPage from './MainPage/mainPage';

const routing = (  
    <Router>  
      <div>
        <Route strict exact path="/" component={Login} />  
        <Route path="/dashboard" component={MainPage} />  
      </div>  
    </Router>  
  )  
  ReactDOM.render(routing, document.getElementById('root'));  