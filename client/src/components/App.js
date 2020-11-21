import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Dashboaed from '../pages/Dashboard'
import Navigation from './navigation/Navigation'
import Price from '../pages/Price'


function App() {
  return (
    <BrowserRouter>
    <div >
    <Navigation/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/dashboard' component={Dashboaed}/>
        <Route path='/price' component={Price}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
