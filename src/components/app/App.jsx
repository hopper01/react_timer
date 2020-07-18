import React, { Component } from 'react';
import './App.css';
import TimerList from '../timerlist/TimerList';

class App extends Component {
      constructor() {
            super();
            this.state = {
              timers : [],
              timerName: ''
        };
        this.addNewTimer = this.addNewTimer.bind(this);
        this.handleDeleteTimer = this.handleDeleteTimer.bind(this);
      }
  addNewTimer(event) {
    event.preventDefault();
      var newTimer = {
      id: Date.now(),
      timerName: this.state.timerName,
    };
    this.setState(prevState => ({
      timers: [...prevState.timers, newTimer],
      timerName: ''
    }));
  }
  handleDeleteTimer(timerId) {
    var updatedTimer = this.state.timers.filter(timer => {
      return timer.id !== timerId;
    });
    
    this.setState(prevState => ({
      timers: [].concat(updatedTimer)
    }));
  }
  render(){
      return (
        <div className="App">
          <header className="App-header">
            <i class="fas fa-hourglass-half"></i><span> React Timer</span>
          </header>
          <div className="conatiner">
            <div className="input-name">
              <input
                type="text"
                placeholder="Create Timer"
                maxLength="25"
                value={this.state.timerName}
                onChange={event => this.setState({ timerName : event.target.value })}zw
              />
              <button onClick={this.addNewTimer}>Add Timer</button>
            </div>
          </div>
          <TimerList
          timers = {this.state.timers}
          handleDeleteTimer = {this.handleDeleteTimer}
          />
          <footer class="foot">
              <p>Coded By ~<span class="hh">hopper</span></p>
          </footer>
        </div>
      );
  }
}

export default App;
