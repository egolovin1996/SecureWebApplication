import React from 'react';
import Result from './Result'

class Table extends React.Component{
    render(){
        return(
           <table>
               <tbody>
               <Result
                    id="BDU:2018-01143"
                    text="Уязвимость компонента Windows GDI операционных систем Windows, позволяющая нарушителю раскрыть защищаемую информацию"
                    soft="Microsoft Corp. Windows Server 2008 R2 SP1"
                    date="11.09.2018"
                />
                <Result 
                    id="BDU:2018-01143"
                    text="Уязвимость компонента Windows GDI операционных систем Windows, позволяющая нарушителю раскрыть защищаемую информацию"
                    soft="Microsoft Corp. Windows Server 2008 R2 SP1"
                    date="11.09.2018"
                />
                <Result 
                    id="BDU:2018-01143"
                    text="Уязвимость компонента Windows GDI операционных систем Windows, позволяющая нарушителю раскрыть защищаемую информацию"
                    soft="Microsoft Corp. Windows Server 2008 R2 SP1"
                    date="11.09.2018"
                />
               </tbody>
           </table>
        );
    }
}

export default Table;