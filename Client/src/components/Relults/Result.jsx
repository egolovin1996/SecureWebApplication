import React from 'react';
import "./Results.css"

class Result extends React.Component{
    render(){
        return(
           <tr>
                <td>
                    {this.props.id}
                </td>
                <td>
                    {this.props.text}
                </td>
                <td>
                    {this.props.date}
                </td>
           </tr>
        );
    }
}

export default Result;