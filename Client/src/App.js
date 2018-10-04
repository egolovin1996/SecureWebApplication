import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './components/Filters/Filters'
import Table from './components/Relults/Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid"> 
          <div className="row no-gutters"> 
            <div className="col-3"> 
              <Filters/> 
            </div> 
            <div className="col-9"> 
              <Table/> 
            </div> 
          </div>
        </div> 
      </div> 
    );
  }
}

export default App;
