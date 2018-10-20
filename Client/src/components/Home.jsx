import React, { Component } from 'react';
import Filters from './Filters/Filters'
import Table from './Relults/Table'

class Home extends Component {
    render() {
      return (
        <div className="container"> 
            <div className="row no-gutters"> 
                <div className="col-3 pr-2"> 
                    <Filters/> 
                </div> 
                <div className="col-9 pl-2"> 
                    <Table/> 
                </div> 
            </div>
        </div> 
      );
    }
}

export default Home;