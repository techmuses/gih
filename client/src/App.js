import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };

    fetch('http://localhost:3000/data')
      .then(response => response.json())
      .then(data => (this.setState({data})))
  } 

  render() {
    return (
    <div>
      Hello World
      <ul>
        {console.log(this.state)}
        {/* {this.state.data.map(post => <li>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
        ) JSON PARSING HERE
        } */}
      </ul>
    </div>
    ) 
      } 
}

export default App;