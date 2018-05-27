import React, {Component} from 'react';
import {Link} from 'react-router-dom';  

import logo from '../../assets/logo/logo.png';
import classes from './Logo.css';

class MainLogo extends Component {
    render () {
        return (
            <header className={classes.Logo}>
                <Link to={'/'}>
                    <img src={logo} alt='yonghwa' />
                </Link>
            </header>
        );
    }
}

export default MainLogo;