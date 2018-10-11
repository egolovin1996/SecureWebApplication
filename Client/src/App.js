import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute} from './components/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth/Auth';
import Home from './components/Home';
import Header from "./components/Header/Header"
import Users from './components/Admin/Users'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/admin" component={Users} />
          <Route path="/login" component={Auth} />
        </Switch>
      </div> 
    );
  }
}

export default App;
