import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";
import * as Config from "./../../constants/Config";

/*
  MovieCard Component
  -------------------
  Displays a single movie/TV item as a clickable card.
  
  What it does:
    • Builds a link to the movie/TV detail page
    • Shows poster/backdrop as the card background
    • Displays a play button overlay
    • Shows the movie/TV title below the card

  Props:
    • item       = movie or TV show object returned from the API
    • category   = type of item (movie / tv)
*/

const MovieCard = (props) => {
  // The movie/TV object passed into the card
  const item = props.item;
   /*
    Build the URL for the detail page.
    Example format:
      /home/movie/12345
      /home/tv/67890
  */
  const link =
    "/" + Config.HOME_PAGE + "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);
/*
    Determine the card's background image.
    If poster_path is missing, fallback to backdrop_path.
  */
  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <h3>{item.title || item.name}</h3>
    </Link>
  );
};

export default MovieCard;
