import React from 'react'
import FilmRow from './FilmRow'


const FilmListing = (props) => {

  let url = props.moviesImg
  let allFilms = props.movies.map((item) => {
    return <FilmRow item={item} url={url} />
  })
  let handleFilterClick = (filter) =>{
    console.log(`Setting filter to ${filter}`);
  }

  return (
    
    <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className="film-list-filter" onClick={()=> handleFilterClick('all')}>
            ALL
            <span className="section-count">{props.movies.length}</span>
        </div>
        <div className="film-list-filter" onClick={() => handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
</div>

  )
}

export default FilmListing