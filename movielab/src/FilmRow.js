import React from 'react'
import './index.css'
import FilmPoster from './FilmPoster'


const FilmRow = (props) => {
    // let posterUrl = "https://image.tmdb.org/t/p/w500"
    let posterUrl2 = props.url
    let posterImg = props.item.poster_path
    
    return (
        
<div className="film-row">
<FilmPoster posterUrl={posterUrl2} posterImg={posterImg} />

  <div className="film-summary">
    <h1>{props.item.title}</h1>
    <p>{new Date().getFullYear(props.item.release_date)}</p>
  </div>
</div>
    )
}

export default FilmRow