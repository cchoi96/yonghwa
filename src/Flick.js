import React, { Component } from 'react';
import classes from './Flick.css';

import NewMovies from './containers/NewMovies/NewMovies';
import MainLogo from './components/Logo/Logo';
import Search from './containers/Search/Search';
import Footer from './components/Footer/Footer';

class Flick extends Component {
  render() {
    return (
      <div className={classes.container}>
        <MainLogo />
        <Search />
        <NewMovies />
        <Footer />
      </div>
    );
  }
}

export default Flick;
