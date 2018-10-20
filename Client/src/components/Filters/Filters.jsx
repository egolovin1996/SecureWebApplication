import React from 'react';
import Search from './Search'
import { connect } from 'react-redux';
import { loadFilters, selectColumns } from '../../store/filters/filterActions';
import { filtersOptionsSetWhere } from '../../store/filterOptions/filterOptionsActions';
import { loadResults } from '../../store/results/resultsActions';

class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            whereFilters: [],
            selectedColumns: []
        }
    }

    componentWillMount() {
        this.props.loadFilters();
    }

    componentWillReceiveProps(nextProps) {
        const { selectedColumns } = this.state; 
        const newSelectedColumns = nextProps.selectedColumns;
        if(JSON.stringify(newSelectedColumns) !== JSON.stringify(selectedColumns)){
            this.setState({
                selectedColumns: newSelectedColumns
            })
        }
    }

    isVisible = (column) => {
        const { selectedColumns } = this.state;
        return selectedColumns.includes(column);
    }

    updateSelectedColumns = (column, visible) => {
        const { selectedColumns } = this.state;

        if(visible){
            selectedColumns.push(column);
        }else{
            const index = selectedColumns.indexOf(column);
            if (index > -1) {
                selectedColumns.splice(index, 1);
            }
        }

        this.setState({selectedColumns});
        this.props.selectColumns(selectedColumns);
    }

    applyCallback = () => {
        this.props.loadResults(this.props.options);
    }

    addFilterToWhere (propertyName, value) {
        const { whereFilters } = this.state;
        whereFilters[propertyName] = value;
        this.setState({whereFilters});
        this.props.setWhere(whereFilters);
    }

    render(){
        return(
            <div>
                <div className="d-flex justify-content-between pb-2 mb-2">
                    <h4>Фильтрация</h4>
                    <button 
                        className="btn btn-outline-dark fa fa-search" 
                        onClick={this.applyCallback}/>
                </div>
                {
                    this.props.filters && this.props.filters.map(
                        (item) =>
                            <Search
                                key={item.label}
                                placeholder={item.label}
                                visible={this.isVisible(item.propertyName)}
                                updateSelectedColumns = {
                                    (value) => 
                                    this.updateSelectedColumns(item.propertyName, value)}
                                setValue={
                                    (value) =>
                                        this.addFilterToWhere(item.propertyName, value)}
                            />
                    )
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters.filters,
        selectedColumns: state.filters.selectedColumns,
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
        },
        selectColumns: (columns) => {
            dispatch(selectColumns(columns));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filters);