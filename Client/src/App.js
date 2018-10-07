import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { PrivateRoute} from './components/PrivateRoute'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';
import Home from './components/Home';
import Header from "./components/Header/Header"

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <div className="container">
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            {/* <Route exact path="/" component={Home}/> */}
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div> 
    );
  }
}

export default App;
