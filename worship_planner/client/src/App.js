import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = { apiResponse: "" }
  }
  
  callAPI() {
    fetch("http://localhost:4000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err)
  }

  componentDidMount(){
    this.callAPI()
  }
  render() {
    return (
      <div className="App">
          <header className="App-header">
            <h1>Welcome To Worship Planner</h1>
            <h3>cd to client <br /> npm start <br /> cd to api <br /> npm start </h3>
          </header>
      </div>
    )
  }
}
