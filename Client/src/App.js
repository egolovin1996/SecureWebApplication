import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute} from './components/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth/Auth';
import Home from './components/Home';
import Header from "./components/Header/Header";
import Users from './components/Admin/Users';
import Chats from './components/Chat/Chats';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route path="/login" component={Auth} />
          <PrivateRoute exact path="/" component={Home} />
          <PrivateRoute exact path="/vulnerabilities" component={Home} />
          <PrivateRoute path="/chat" component={Chats} />
          <PrivateRoute path="/admin" component={Users} />
        </Switch>
      </div> 
    );
  }
}

export default App;
