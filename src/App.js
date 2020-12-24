import React, { Component } from 'react';
import './App.css';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0
    }
  }


  updateName = (event) => {
    this.setState({
     name: event.target.value
    })
  }

  updateAge = (event) => {
    this.setState({
     age: event.target.value
    })
  }
 
  alertText = () => {
    alert(`Come in ${this.state.name}, you're ${this.state.age} - that's good enough`)
  }

  render() {
    return (
      <div>
<div>
  <input value={this.state.name} onChange={this.updateName} id="name-input" />
<input value={this.state.age} onChange={this.updateAge} id="age-input" />
<button onClick={this.alertText}>Go to Bar</button>
</div>

        <div className='ex-space'>
          <h4 className='ex-title'>Exercise 2</h4 >
          <Exercise2 />
        </div>
      </div>
    )
  }
}

export default App;
