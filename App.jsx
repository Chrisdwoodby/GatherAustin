import React from 'react';
import Main from "./src/Main.jsx"
import {useState} from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <Main/>
      </div>
    )
  }
}

export default App;