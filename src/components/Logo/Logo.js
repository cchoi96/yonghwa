import React, {Component} from 'react';
import {Link} from 'react-router-dom';  

import classes from './Logo.css';

class MainLogo extends Component {
    render () {
        return (
            <header className={classes.Logo}>
                <Link to={'/'}>
                    <h1>Flick</h1>
                </Link>
            </header>
        );
    }
}

export default MainLogo;