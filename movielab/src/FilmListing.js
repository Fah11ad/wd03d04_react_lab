import React from 'react'
import FilmRow from './FilmRow'


const FilmListing = (props) => {

    let url = props.moviesImg
    let allFilms =props.movies.map((item)=>{
        return  <FilmRow  item={item} url={url} />
    })

    return (
        
            <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    {allFilms}
  </div>
        
    )
}

export default FilmListing