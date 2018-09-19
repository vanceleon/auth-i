import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

class App extends Component {
  state = {
    users: []
    
  };
  
  componentDidMount() {
    axios
      .get("http://localhost:8000/api/users")
      .then((res)=> {
        console.log("res: ", res.data);
        this.setState({users: res.data});
      })
      .catch((err) => {
        console.log("Error getting data ", err);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>login</div>
      </div>
    );
  }
}

export default App;
