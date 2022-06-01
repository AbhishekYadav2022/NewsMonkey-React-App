import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

// Write rcc and press enter to get the following code
export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News/>
      </>
    )
  }
}
