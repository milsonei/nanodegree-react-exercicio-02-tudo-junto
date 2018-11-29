import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow'
/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/
const users = [{ username: 'Amy' }, { username: 'John' }]
class App extends Component {
  state = {
    messages : []
  } 
 
  /**
   * Adiciona uma nova mensagem
   */
  sendMessage = (username, text) => {
    this.setState(oldState => ({
      messages: [...oldState.messages, {username, text}]
    }))
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
        { users.map((user) => (<ChatWindow username={user.username} messages={this.state.messages} onSendMessage={this.sendMessage} />)) }                 
        </div>
      </div>
    );
  }
}

export default App;
