import React from 'react'
/* The following line can be included in a src/App.scss */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Header from './components/home/header/Header';
import Home from './components/home/Home';
import Footerpart from './components/Footer/Footerpart';
import Courses from './components/Courses/Courses';
import Teachers from './components/Teacher/Teachers';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyClasses from './components/MyClasses/MyClasses';







const App = () => {
  return (
    <div className="App">
      
    <AuthProvider>
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
          <Route exact path="/login">
          <Login></Login>

          </Route>
          <Route exact path="/teachers">
          <Teachers></Teachers>

          </Route>
          <PrivateRoute exact path="/myclasses">
          <MyClasses></MyClasses>

          </PrivateRoute>
          <Route exact path="/aboutus">
          <AboutUs></AboutUs>

          </Route>
          <Route path="*">
          <NotFound></NotFound>

          </Route>
        </Switch>
      </Router>
      
      <Footerpart></Footerpart>
    </AuthProvider>
      </div>
  )
}

export default App