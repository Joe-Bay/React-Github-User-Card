import React from 'react';
import './App.css';
import Card from './components/card'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      githubData: [],
      userText: '',
    }
  }

  handleChanges = e => {
    const { value } = e.target
    this.setState({
      userText: value
    })
  }


  componentDidMount() {
    axios.get(`https://api.github.com/users/${this.state.userText}`)
  }


render() {
  return (
    <div className="App">
      <div className="header">
        <h1>Github Users!</h1>
        <input 
        name="user"
        placeholder="Search Github Handles"
        type="text"
        value={this.state.userText}
        onChange={this.handleChanges}
        />
      </div>
      <div className="card">
        {this.state.githubData.map(user => {
          return (
          <Card data={this.state.githubData}/>
          )
        })
        }
      </div>
      </div>
  );
}
}
export default App;
