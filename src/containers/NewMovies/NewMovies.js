import React, { Component } from "react";
import axios from "axios";
import moment from "moment";
import { Link } from "react-router-dom";

import classes from "./NewMovies.css";

class NewMovies extends Component {
  state = {
    newMovies: []
  };

  componentDidMount() {
    const apiKey = "abc14d611d83e5377cc1aa1b311591fc";

    // Create date range to dynamically update the New Movies section
    // Should use moment.js
    let today = moment().format("YYYY-MM-DD");
    let lastMonth = moment()
      .subtract(1, "month")
      .format("YYYY-MM-DD");
    console.log(lastMonth);

    // API GET request
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          apiKey +
          "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=" +
          lastMonth +
          "&primary_release_date.lte=" +
          today
      )
      .then(response => {
        console.log(response);
        const newMovies = response.data.results;
        this.setState({ newMovies: newMovies });
      })
      .catch(error => console.log("Error: " + error.status));
  }

  render() {
    return (
      <section>
        <h2>New Releases</h2>
        <div className={classes.newMovies}>
          {this.state.newMovies.map((movie, index) => {
            return (
              <Link
                to={`/movie/${this.state.newMovies[index].id}`}
                key={index}
                className={classes.nmLink}
              >
                <img
                  src={
                    this.state.newMovies[index].poster_path === null
                      ? "http://via.placeholder.com/300x450"
                      : `https://image.tmdb.org/t/p/w300/${this.state.newMovies[index].poster_path}`
                  }
                  alt={`${this.state.newMovies.title} poster`}
                  className={classes.responsiveImg}
                />
                <div className={classes.nmInfo} key={index}>
                  <h3>{this.state.newMovies[index].title}</h3>
                  <p>{this.state.newMovies[index].release_date}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    );
  }
}

export default NewMovies;
