import React, { Component } from 'react';
import classes from './YonghwaHome.css';

import NewMovies from './containers/NewMovies/NewMovies';
import MainLogo from './components/Logo/Logo';
import Search from './containers/Search/Search';

class YonghwaHome extends Component {
  render() {
    return (
      <div className={classes.container}>
        <MainLogo />
        <Search />
        <NewMovies />
      </div>
    );
  }
}

export default YonghwaHome;
