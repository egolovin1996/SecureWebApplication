import React from 'react';
import { connect } from 'react-redux';
import { filtersOptionsSetTake } from '../../store/filterOptions/filterOptionsActions';


class RowsSelector extends React.Component{
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
        take: state.filterOptions.take
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setTake: (take) => {
            dispatch(filtersOptionsSetTake(take));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RowsSelector);