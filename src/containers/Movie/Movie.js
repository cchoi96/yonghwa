import React, {Component} from 'react';
import axios from 'axios';

import Logo from '../../components/Logo/Logo';
import Search from '../Search/Search';
import Cast from '../../components/Cast/Cast';
import classes from './Movie.css';


class Movie extends Component {
    constructor (props) {
        super(props);
        this.state= {
            movie: {
                genres: [],
                credits: {
                    cast: [],
                    crew: []
        }
            }
        }
        this.movieData = this.movieData.bind(this);
    }

    movieData = () => {
        const apiKey = 'abc14d611d83e5377cc1aa1b311591fc';
        const id = window.location.pathname.substring(7);

        axios.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' +  apiKey + '&language=en-US&append_to_response=credits')
        .then(response => {
            const movie = response.data;
            this.setState({movie : movie});
        })
        .catch (error => {
            console.log('Error: ' + error.status);
        })
    }

    componentDidMount() {
        this.movieData();
      }
    
    componentDidUpdate(nextProps) {
        if(nextProps.movie !== this.state.movie) {
          this.movieData();
        }
    }

    render () {
        return (
            <div className={classes.container}>
                <Logo />
                <Search />
                <div className={classes.movieSection}>
                    <div className={classes.moviePoster}>
                        <img src={this.state.movie.poster_path === null ? 'http://via.placeholder.com/300x450' : `https://image.tmdb.org/t/p/w300${this.state.movie.poster_path}`} alt={`${this.state.movie.title} poster`} className={classes.posterImg} />
                    </div>
                    <div className={classes.movieInfo}>
                        <h2 className={classes.movieTitle}>{this.state.movie.title}</h2>
                        <ul className={classes.movieDetailList}>
                            <li><strong>Release Date: </strong>{this.state.movie.release_date}</li>
                            <li><strong>Rating: </strong>{this.state.movie.vote_average}</li>
                            <li><strong>Votes: </strong>{this.state.movie.vote_count}</li>
                            <li><strong>Genre(s): </strong>{this.state.movie.genres.map((element, index) => {
                                if (this.state.movie.genres.length === 1) {
                                    return this.state.movie.genres[index].name;
                                } else {
                                    return this.state.movie.genres[index].name + ' | ';
                                }
                            })}
                            </li>
                        </ul>
                        <p className={classes.overview}>{this.state.movie.overview}</p>
                    </div>
                </div>
                <Cast cast={this.state.movie.credits.cast} />
            </div>
        );
    }
}

export default Movie;