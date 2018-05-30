import React from 'react';

import classes from './Footer.css';

const footer = () => {
    let todaysDate = new Date();
    let year = todaysDate.getFullYear();

    return (
        <div className={classes.footer}>
            <p>Coded by Chris Choi &copy; {year}</p>
        </div>
    );
}

export default footer;