import React, { Component } from 'react'
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'


export default class App extends Component {
  render() {
    console.log(TMDB.api_key);
    
    return (
        <div className="film-library">
        <FilmListing movies={TMDB.films} moviesImg={TMDB.api_key} />
        <FilmDetails />

        </div>
      
    )
  }
}