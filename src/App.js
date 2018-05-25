import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import NewMovies from './containers/NewMovies/NewMovies';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NewMovies/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
