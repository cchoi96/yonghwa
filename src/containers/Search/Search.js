import React, {Component} from 'react';
import axios from 'axios';

import SearchResults from './SearchResults';
import classes from './Search.css';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: []
        };
        this.emptySubmissionHandler = this.emptySubmissionHandler.bind(this);
        this.searchHandler = this.searchHandler.bind(this);
    }

    emptySubmissionHandler(event) {
        event.preventDefault();
    }

    searchHandler() {
        const apiKey = 'abc14d611d83e5377cc1aa1b311591fc';

        document.getElementById('searchResults').className = 'formResults';
        let searchValue = document.getElementById('searchInput').value;

        if (searchValue === '') {
            document.getElementById('searchResults').className = 'notDisplayed';
        }

        axios.get('https://api.themoviedb.org/3/search/movie?api_key=' + apiKey + '&language=en-US&query=' + searchValue + '&page=1&include_adult=false')
            .then(response => {
                const searchedMovies = response.data.results;
                this.setState({searchResults : searchedMovies});
            })
            .catch (error => {
                console.log('Error: ' + error.status);
            })

    }

    render () {
        return (
                <form onSubmit={this.emptySubmissionHandler} className={classes.searchForm}>
                    <input onKeyUp={this.searchHandler} id='searchInput' className={classes.Search} type='text' placeholder='Search your movie!' required />
                    <SearchResults searchResults={this.state.searchResults} />
                </form>
        );
    }
}

export default Search;