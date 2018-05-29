import React from 'react';

import classes from './Cast.css';

const cast = (props) => {
    const baseUrl = 'https://image.tmdb.org/t/p/w300';
    const castUrl = 'https://www.themoviedb.org/person/';

    return (
        <div className={classes.figContainer}>
            {props.cast.slice(0,4).map((element, index) => {
                return (
                    <a href={castUrl + props.cast[index].id} className={classes.castCircle} key={index} target='_blank'>
                        <img src={props.cast[index].profile_path === null ? 'http://via.placeholder.com/300*450' : baseUrl + props.cast[index].profile_path} key={index} alt={props.cast[index].name} className={classes.castImg} />
                        <div className={classes.castInfo}>
                            <h4>{props.cast[index].name}</h4>
                        </div>
                    </a>
                );
            })}
        </div>
    );
    
};

export default cast;