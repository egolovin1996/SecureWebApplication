import './Filters.css'
import React from 'react';
import Search from './Items/Search'
import Button from './Items/Button'

class Filters extends React.Component{
    render(){
        return(
            <div className="filters">
                <div className="title">
                    Фильтрация
                </div>
                <Search labelText="Search1" placeholder="Enter something"/>
                <Search labelText="Search1" placeholder="Enter something"/>
                <Search labelText="Search1" placeholder="Enter something"/>
                <Search labelText="Search1" placeholder="Enter something"/>
                <div>
                    <Button buttonClass="btn-light" text="Сброс"/>
                    <Button buttonClass="btn-success" text="Применить"/>
                </div>
            </div>
        );
    }
}

export default Filters;