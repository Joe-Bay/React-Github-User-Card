import React from 'react';
import './App.css';
import Card from './components/card'
import axios from 'axios'
import Followers from './components/followers'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      githubData: [],
      gitHubFollowers: [],
      userText: '',
    }
  }

  handleChanges = e => {
    const { value } = e.target
    this.setState({
      userText: value
    })
  }

  fetchUser = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.userText}`)
    .then(res => {
      this.setState({
        githubData: res.data
      })
    })
    this.setState({
      userText:''
    })
  }

  componentDidUpdate(prevState, prevProps) {
    if(prevState !== this.state.gitHubFollowers){
      axios.get(`https://api.github.com/users/${this.state.userText}/followers`)
      .then(res => {
        console.log(res.data)
        this.setState({
          gitHubFollowers: res.data
        })
      })
    }
  }

  componentDidMount() {
    axios.get(`https://api.github.com/users/Joe-Bay`)
    .then(res => {
      this.setState({
        githubData: res.data
      })
      
    }).catch(err => console.log(err))
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
        <button onClick={this.fetchUser}>Search</button>
      </div>
      <div className="card">
          <Card data={this.state.githubData}/>
      </div>
      <div className="followers">
        <h2>Followers</h2>
        {this.state.gitHubFollowers.map(follower => {
          return (
        <Followers data={follower}/> 
          )         
        })
        

        }
      </div>
      </div>
  );
}
}
export default App;
