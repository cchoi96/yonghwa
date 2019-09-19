import React, {Component} from 'react';
import {Link} from 'react-router-dom';  

import flick from '../../assets/logo/flick.png';
import classes from './Logo.css';

class MainLogo extends Component {
    render () {
        return (
            <div className={classes.Logo}>
                <Link to={'/'}> <h1><img src={flick} alt='Flick Logo'/>flick</h1></Link>
            </div>
        );
    }
}

export default MainLogo;