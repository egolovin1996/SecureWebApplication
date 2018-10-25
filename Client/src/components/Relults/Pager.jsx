import React from 'react';
import { connect } from 'react-redux';
import { filterOptionsSetPage } from '../../store/filterOptions/filterOptionsActions';
import { loadResults } from '../../store/results/resultsActions';

class Pager extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            pageNumber: 1,
            lastPage: 1
        }
    }

    componentWillReceiveProps(nextProps) {
        const { lastPage } = this.state; 
        const { totalCount, take, skip } = nextProps
        const newlastPage = Math.ceil(totalCount/take);
        if(newlastPage !== lastPage){
            this.setState({
                lastPage: newlastPage
            });
        }
        if(this.props.skip !== skip){
            this.props.loadResults(nextProps.options);
        }
    }

    setPageNumber = (e) =>{
        const { lastPage } = this.state; 
        let { value } = e.target;

        if(value < 1){
            value = 1;
        }
        if(value > lastPage){
            value = lastPage;
        }

        this.setState({ pageNumber: value});
        this.props.setPageNumber(value);
    }

    render(){
        const { pageNumber, lastPage } = this.state;

        return(
            <div className="form-group">
                <label>Страница</label>
                <input 
                    type="number" 
                    className="form-control mx-sm-3 col-md-3" 
                    value={pageNumber}
                    onChange={this.setPageNumber}>
                </input>
                <label>из {lastPage}</label>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        totalCount: state.results.totalCount,
        take: state.filterOptions.take,
        skip: state.filterOptions.skip,
        options: state.filterOptions
    }
};

const mapDispatchToProps = dispatch => {
    return {
        setPageNumber: (number) => {
            dispatch(filterOptionsSetPage(number));
        },
        loadResults: (options) => {
            dispatch(loadResults(options));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pager);