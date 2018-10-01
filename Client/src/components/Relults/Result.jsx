import React from 'react';
import "./Results.css"

class Result extends React.Component{
    render(){
        return(
           <tr>
                <td>
                    <h4>
                        <a className="id" href={this.props.herf}>{
                            this.props.id}
                        </a>
                    </h4>
                </td>
                <td>
                    <div>
                        {this.props.text}
                    </div>
                    <div>
                        {this.props.soft}
                    </div>
                </td>
                <td>
                    <span>
                        {this.props.date}
                    </span>
                </td>
           </tr>
        );
    }
}

export default Result;