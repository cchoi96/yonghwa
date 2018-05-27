import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

import NewMovies from './containers/NewMovies/NewMovies';
import MainLogo from './components/Logo/Logo';
import Search from './containers/Search/Search';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <MainLogo />
          <Search />
          <NewMovies/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
