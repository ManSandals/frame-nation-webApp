import React from "react";
import { Link } from "react-router-dom";

import { OutlineButton } from "../components/button/Button";
import HeroSlide from "../components/hero-slide/HeroSlide";
import MovieList from "../components/movie-list/MovieList";

import { category, movieType, tvType } from "../api/tmdbApi";

import * as Config from "./../constants/Config";


/*
  Home Page Component
  -------------------
  This page displays:
    - The hero slideshow at the top
    - Multiple movie/TV sections:
        * Trending Movies
        * Top Rated Movies
        * Trending Shows
        * Top Rated Shows
        * Airing Shows

  Each section uses the <MovieList /> component 
  with the correct category + type passed in.
*/

const Home = () => {
  return (
    <>
      <HeroSlide />

      <div className="container">
        <div className="div mb-3">
          <div className="div__header mb-2">
            <h2>Trending Movies</h2>
            <Link to={`/${Config.HOME_PAGE}/movie`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="div mb-3">
          <div className="div__header mb-2">
            <h2>Top Rated Movies</h2>
            <Link to={`/${Config.HOME_PAGE}/movie`}>
              <OutlineButton className="small">
                  View more
              </OutlineButton>
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>

        <div className="div mb-3">
          <div className="div__header mb-2">
            <h2>Trending Shows</h2>
            <Link to={`/${Config.HOME_PAGE}/tv`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>

        <div className="div mb-3">
          <div className="div__header mb-2">
            <h2>Top Rated Shows</h2>
            <Link to={`/${Config.HOME_PAGE}/tv`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>

        <div className="div mb-3">
          <div className="div__header mb-2">
            <h2>Airing Shows</h2>
            <Link to={`/${Config.HOME_PAGE}/tv`}>
              <OutlineButton className="small">View more</OutlineButton>
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.on_the_air} />
        </div>
      </div>
    </>
  );
};

export default Home;
