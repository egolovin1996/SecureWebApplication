import React, { Component } from 'react';
import Filters from './Filters/Filters'
import Table from './Relults/Table'

class Home extends Component {
    render() {
      return (
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
      );
    }
}

export default Home;