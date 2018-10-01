import './Filters.css'
import React from 'react';
import Search from './Items/Search'
import Button from './Items/Button'
import { connect } from 'react-redux';
import { loadFilters } from '../../store/filters/filterActions';

class Filters extends React.Component{
    constructor(){
        super();
        this.props.loadFilters();
    }

    render(){
        return(
            <div className="filters">
                <div className="title">
                    Фильтрация
                </div>
                {
                    this.props.filters.map((item) => {
                        <Search labelText="Search1" placeholder="Enter something"/>
                    })
                }
                <div>
                    <Button buttonClass="btn-light" text="Сброс"/>
                    <Button buttonClass="btn-success" text="Применить"/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return state.filters;
};

export default connect(mapStateToProps, loadFilters)(Filters);