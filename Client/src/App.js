import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Filters from './components/Filters/Filters'
import Table from './components/Relults/Table'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Filters/>
        <Table/>
      </div>
    );
  }
}

export default App;
