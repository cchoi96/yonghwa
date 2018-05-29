import React from 'react';

import classes from './Cast.css';

const cast = (props) => {
    const baseUrl = 'https://image.tmdb.org/t/p/w300';

    return (
        <div className={classes.figContainer}>
            {props.cast.slice(0,4).map((element, index) => {
                return (
                    <figure key={index}>
                        <img src={props.cast[index].profile_path === null ? 'http://via.placeholder.com/300*450' : baseUrl + props.cast[index].profile_path} key={index} alt={props.cast[index].name} className={classes.castImg} />
                    </figure>
                );
            })}
        </div>
    );
    
};

export default cast;