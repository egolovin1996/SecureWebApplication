import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';
import { loadResults } from '../../store/results/resultsActions';

class Table extends React.Component{
    componentWillMount() {
        this.props.loadResults(this.props.options);
    }

    render(){
        return(
           <table class="table">
               <thead>
               </thead>
               <tbody>
               {
                    this.props.results && this.props.results.map(
                        (item) =>
                            <Result
                                id={item.identifier}
                                text={item.description}
                                soft={item.software}
                                date={item.date}
                            />)
                }
               </tbody>
           </table>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        results: state.results.results,
        options: state.filterOptions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        loadResults: (options) => {
            dispatch(loadResults(options));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);