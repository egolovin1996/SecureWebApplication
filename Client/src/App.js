import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute} from './components/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './components/Auth/Auth';
import Home from './components/Home';
import Header from "./components/Header/Header"

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <PrivateRoute exact path="/" component={Home} />
          {/* <Route exact path="/" component={Home}/> */}
          <Route path="/login" component={Auth} />
        </Switch>
      </div> 
    );
  }
}

export default App;
