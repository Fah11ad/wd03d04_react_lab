
import FilmRow from './FilmRow'
import React, { Component } from 'react'
import './index'

export default class FilmListing extends Component {
  state ={
    filter:'all'
  }
  render() {
    let url = this.props.moviesImg
  
    let allFilms = this.props.films.map((film,index) =>{
      return <FilmRow key={index} film={film} url={url} onFaveToggle={()=> this.props.onFaveToggle(film)} isFave={this.props.faves.includes(film)} />
    })
    let faves = this.props.faves.map((film,index)=>{
      return <FilmRow key={index} film={film} url={url} inFaveToggle={()=> this.props.onFaveToggle(film)} isFave={this.props.faves.includes(film)} />
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
            <span className="section-count">{this.props.films.length}</span>
        </div>
        <div className={`film-list-filter ${this.state.filter === 'faves' ? 'is-active' : ''}`} onClick={() => handleFilterClick('faves')}>
            FAVES
            <span className="section-count">{this.props.faves.length}</span>
        </div>
    </div>

    {this.state.filter === 'faves' ? faves : allFilms}
</div>
    )
  }
}
