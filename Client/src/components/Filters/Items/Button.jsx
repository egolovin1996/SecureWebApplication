import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <button 
                type="button" 
                className={`btn ${this.props.buttonClass}`}
                onClick={this.props.clickCallback}>
                    {this.props.text}
            </button>
        );
    }
}

export default Button;