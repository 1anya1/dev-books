import React, { Component } from 'react'
import './App.css'
import BooksContainer from './components/BooksContainer.js'

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Dev Books</h1>
        </div>
        <BooksContainer />
      </div>
    );
  }
}

export default App
