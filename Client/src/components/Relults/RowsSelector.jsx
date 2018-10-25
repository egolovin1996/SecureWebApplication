import React from 'react';
import { connect } from 'react-redux';
import { filtersOptionsSetTake } from '../../store/filterOptions/filterOptionsActions';
import { loadResults } from '../../store/results/resultsActions';

class RowsSelector extends React.Component{
    componentWillReceiveProps(nextProps) {
        const { take} = nextProps
        
        if(this.props.take !== take){
            this.props.loadResults(nextProps.options);
        }
    }

    selectRowCount = (e) => {
        const { value } = e.target
        this.props.setTake(value);
    }

    render(){
        return(
            <div className="form-group">
                <label>отображать по</label>
                <select 
                    className="form-control mx-sm-3" 
                    value={this.props.take}
                    onChange={this.selectRowCount}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                </select>
                <label>записе на странице</label>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        take: state.filterOptions.take,
        options: state.filterOptions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setTake: (take) => {
            dispatch(filtersOptionsSetTake(take));
        },
        loadResults: (options) => {
            dispatch(loadResults(options));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowsSelector);