import React from 'react';

const Cell = (props) => {
    return(
        <td>
            {props.value}
        </td>
    );
}

class Result extends React.Component{
    toJsName = (value) => {
        return value[0].toLowerCase() + value.slice(1);
    }

    render(){
        return(
            <tr>
            {
                this.props.columns && this.props.columns.map(
                    (item) => <Cell key={item} value={this.props.row[this.toJsName(item)]}/>)
            }
            </tr>
        );
    }
}

export default Result;