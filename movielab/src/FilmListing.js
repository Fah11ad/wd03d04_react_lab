
import FilmRow from './FilmRow'
import React, { Component } from 'react'
import './index'

export default class FilmListing extends Component {
  state ={
    filter:'all'
  }
  render() {
    let url = this.props.moviesImg
  let allFilms = this.props.movies.map((item,index) => {
    return <FilmRow item={item} url={url} key={index}/>
  })
  let handleFilterClick = (filter) =>{
    console.log(`Setting filter to ${filter}`);
    this.setState({
      filter: filter
  }) 
  }
    return (
      <div className="film-list">
    <h1 className="section-title">FILMS</h1>
    <div className="film-list-filters">
        <div className={`film-list-filter ${this.state.filter === 'all' ? 'is-active' : ''}`} onClick={() => handleFilterClick('all')}>
            ALL
            <span className="section-count">{this.props.movies.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
            FAVES
            <span className="section-count">0</span>
        </div>
    </div>

    {allFilms}
</div>
    )
  }
}
