import React from 'react';
import Search from './Items/Search'
import Button from './Items/Button'
import { connect } from 'react-redux';
import { loadFilters } from '../../store/filters/filterActions';
import { filtersOptionsSetWhere } from '../../store/filterOptions/filterOptionsActions';
import { loadResults } from '../../store/results/resultsActions';

class Filters extends React.Component{
    whereFilters = [];

    componentWillMount() {
        this.props.loadFilters();
    }

    render(){
        return(
            <div>
                {
                    this.props.filters && this.props.filters.map(
                        (item) =>
                        <div className="form-group">
                            <Search
                                placeholder={item.placeholder}
                                labelText={item.label}
                                setValue={(value) => {
                                    this.addFilterToWhere(item.propertyName, value)}}
                            />
                        </div> 
                    )
                }
                <div>
                    <Button buttonClass="btn-light" text="Сброс"/>
                        <Button 
                            buttonClass="btn-success" 
                            text="Применить" 
                            clickCallback={this.applyCallback}/>
                    </div>
            </div>
        );
    }

    applyCallback = () => {
        this.props.loadResults(this.props.options);
    }

    addFilterToWhere (propertyName, value) {
        this.whereFilters[propertyName] = value;
        this.props.setWhere(this.whereFilters);
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters.filters,
        options: state.filterOptions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadFilters: () => {
            dispatch(loadFilters());
        },
        loadResults: (options) => {
            dispatch(loadResults(options));
        },
        setWhere: (where) => {
            dispatch(filtersOptionsSetWhere(where));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);