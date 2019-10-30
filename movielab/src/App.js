import React, { Component } from 'react'
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'
import Fave from './Fave';

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      //set inital state
    films: TMDB.films,
    faves: [],
    current: {}, 
  }
  //event handlers
  this.handleFaveToggle = this.handleFaveToggle.bind(this)
}


  handleFaveToggle = (film)=>{
    const faves = this.film.state.faves.slice()
    const filmIndex = faves.indexOf(film)
    if(filmIndex === 0){
       faves.splice(0,1)
    }else if(filmIndex === -1){
       faves.push(film)
    }
    this.setState({faves}) 
  }
  
  render() {
    console.log(TMDB.api_key)
    console.log(this.state.faves.slice())
    
    return (
        <div className="film-library">
        <FilmListing movies={this.state.films} faves={this.state.faves} onFaveToggle={this.props.handleFaveToggle} moviesImg={TMDB.api_key} />
        <FilmDetails movies={this.state.films} current={this.state.current} />
        <Fave faves={this.state.faves}/>

        </div>
      
    )
  }
}