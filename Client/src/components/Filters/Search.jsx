import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: this.props.visible
        }
    }

    changeVisibility = () => {
        const { visible } = this.state;
        this.props.updateSelectedColumns(!visible);
        this.setState({
            visible: !visible
        })
    }

    render(props){
        const { visible } = this.state;

        return(
            <div className="form-group input-group">
                <input 
                    type="text" 
                    className="form-control" 
                    placeholder={this.props.placeholder}
                    onBlur={this.handleBlur}/>
                <div className="input-group-append">
                    <button 
                        className={'btn btn-outline-secondary fa ' + (visible 
                            ? 'fa-eye' 
                            : 'fa-eye-slash')}
                        onClick={this.changeVisibility}/>
                </div>
            </div>
        );
    }

    handleBlur = (e) => {
        this.props.setValue(e.target.value);
    }
}

export default Search;