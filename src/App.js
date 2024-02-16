import React from 'react'
/* The following line can be included in a src/App.scss */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Header from './components/home/header/Header';
import Home from './components/home/Home';
import Footerpart from './components/Footer/Footerpart';
import Courses from './components/Courses/Courses';
import Teachers from './components/Teacher/Teachers';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';







const App = () => {
  return (
    <div>
      
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
          <Home></Home>

          </Route>
          <Route exact path="/home">
          <Home></Home>

          </Route>
          <Route exact path="/courses">
          <Courses></Courses>

          </Route>
          <Route exact path="/teachers">
          <Teachers></Teachers>

          </Route>
          <Route exact path="/aboutus">
          <AboutUs></AboutUs>

          </Route>
          <Route path="*">
          <NotFound></NotFound>

          </Route>
        </Switch>
      </Router>
      
      <Footerpart></Footerpart>
      </div>
  )
}

export default App