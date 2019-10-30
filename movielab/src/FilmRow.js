import React from 'react'
import './index.css'
import FilmPoster from './FilmPoster'
import Fave from './Fave'



const FilmRow = (props) => {
    // let posterUrl = "https://image.tmdb.org/t/p/w500"
    let posterUrl = props.url
    let posterImg = props.item.poster_path
    let handleDetailsClick = (film) =>{
      console.log(`Fetching details for ${film}`);
      
  }
    
    return (
        
<div className="film-row" onClick={()=>handleDetailsClick('filmRowClicked')}>
<FilmPoster posterUrl={posterUrl} posterImg={posterImg} />

  <div className="film-summary">
    <Fave />
    <h1>{props.item.title}</h1>
    <p>{new Date().getFullYear(props.item.release_date)}</p>
  </div>
</div>
    )
}

export default FilmRow