import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../Filters.css'

class Search extends React.Component{
    render(){
        return(
            <div>
                <label className="search-label">{this.props.labelText}</label>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary search-button" type="button" id="button-addon1">
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </button>
                    </div>
                    <input type="text" className="form-control" placeholder={this.props.placeholder}/>
                </div>
            </div>
        );
    }
}

export default Search;