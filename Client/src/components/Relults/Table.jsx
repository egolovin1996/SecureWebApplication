import React from 'react';
import Result from './Result';
import { connect } from 'react-redux';
import { loadResults } from '../../store/results/resultsActions';
import Pager from './Pager';
import RowsSelector from './RowsSelector';

const HeaderColumn = (props) => {
    return (
        <th scope="col">{props.text}</th>
    );
}

class Table extends React.Component{
    componentWillMount() {
        this.props.loadResults(this.props.options);
    }

    render(){
        return(
            <div>
                <div className="form-inline mb-3 justify-content-between">
                    <Pager/>
                    <RowsSelector/>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                        {
                            this.props.columns && this.props.columns.map(
                                (item) => <HeaderColumn key={item} text={item}/>
                            )
                        }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.vulnerabilities && this.props.vulnerabilities.map(
                            (item) =>
                                <Result
                                    key={item.id}
                                    row={item}
                                    columns={this.props.columns}
                                />)
                    }
                    </tbody>
                </table>
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        vulnerabilities: state.results.vulnerabilities,
        columns: state.filters.selectedColumns,
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