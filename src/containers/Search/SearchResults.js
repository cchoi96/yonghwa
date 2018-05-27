import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import classes from './SearchResults.css';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = () => {
        document.getElementById('searchResults').className = 'notDisplayed';
        document.getElementById('searchInput').value = '';
    }

    render () {
        const baseUrl = 'https://image.tmdb.org/t/p/w300';
        return (
            <div className={classes.results}>
                <ul id='searchResults' onClick={this.clickHandler}>
                    {this.props.searchResults.map((elem, index) => {
                        return (
                            <li key={index} onClick={this.clickHandler}>
                                <Link to={`/movie/${this.props.searchResults[index].id}`}>
                                    <img src={this.props.searchResults[index].poster_path === null ? 'http://via.placeholder.com/300*450' : `${baseUrl}${this.props.searchResults[index].poster_path}`} alt={`{this.props.searchResults[index].title} poster`} className={classes.resultsPoster} />
                                    <div>
                                        <h5>{this.props.searchResults[index].title}</h5>
                                        <p>{this.props.searchResults[index].release_date}</p>
                                    </div>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default SearchResults;
