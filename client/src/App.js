import React, { Component } from 'react';
import './App.css';
import axios from 'axios'

class App extends Component {
  state = {cities: []}

  componentDidMount() {
    var that = this
    axios.all([
      axios.get('/cities')
    ])
    .then(axios.spread(function (response) {
      that.setState({cities: response.data})
    })).catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <p>Hello my app v2:</p>
        <ul>
          {this.state.cities.map( city => {
            return <li key={city.name}> <b>{city.numbers}</b>: test</li>
          })}
        </ul>
      </div>
    );
  }
}

export default App;
