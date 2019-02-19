import React, { Component } from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };

    
  } 


  componentWillMount(){
    const url = "/data";

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({
        data: data
      }))
  }

  render() {
    const { data } = this.state;

    return (
    <div>
        {console.log(this.state)}
        

        {data ? <div>  {console.log(data)}
        
        <ReactTable
          data={data}
          columns={[
            {
              Header: "EMP_NO",
              accessor: 'EMP_NO'
            },
            {
              Header: "IN_TIME",
              accessor: 'IN_TIME'
            },
            {
              Header: "OUT_TIME",
              accessor: 'OUT_TIME'
            },
            {
              Header: "SR_NO",
              accessor: 'SR_NO'
            }
          ]}
         
        />
         </div>
    : <div> Loading ... </div>
    }


        



    </div>
    ) 
      } 
}

export default App;

// INSERT INTO ATTENDENCE  VALUES ('125', '10-11-25', '11-20-15', '5');