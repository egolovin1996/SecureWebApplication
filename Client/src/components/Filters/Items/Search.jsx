import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Search extends React.Component{
    render(){
        return(
            <div>
                <label>{this.props.labelText}</label>
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder={this.props.placeholder}
                    onBlur={this.handleBlur}/>
            </div>
        );
    }

    handleBlur = (e) => {
        this.props.setValue(e.target.value);
    }
}

export default Search;