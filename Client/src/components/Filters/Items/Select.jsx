import React from 'react';

class Select extends React.Component{
    render(){
        return(
            <div className="input-group mb-3">
                <select className="custom-select">
                    <option selected>Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
            </div>
        );
    }
}

export default Select;