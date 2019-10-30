import axios from "axios"
import React, { Component } from 'react'
import './App.css';
import FilmListing from './FilmListing'
import FilmDetails from './FilmDetails'
import TMDB from './TMDB'


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
handleDetailsClick=(film)=>{
  console.log(`Fetching details for ${film}`);
}


  handleFaveToggle = (film)=>{
    const faves = this.state.faves.slice(0)
    const filmIndex = faves.indexOf(film)
    if(filmIndex === -1){
      console.log(`Adding [FILM NAME] to faves`);
      faves.push(film)
    }else{
      console.log(`Removing [FILM NAME] from faves`);
       faves.splice(filmIndex,1)
    }
    const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`

    axios({
      method: 'GET',
      url: url
    }).then(response => {
      console.log(response);
      console.log(`Fetching details for ${film}`);
      this.setState({current: response.data})

    })
    this.setState({
      faves:faves
    }) 
  }
  
  render() {
    return (
      <div className="App">
        <div className="film-library">
        <FilmListing films={this.state.films} faves={this.state.faves} onFaveToggle={this.props.handleFaveToggle} moviesImg={TMDB.api_key} moviesImg={TMDB.api_key} onFaveToggle={this.handleFaveToggle}/>
        <FilmDetails current={this.state.current} current={this.state.current} />

        </div>
        </div>
      
    )
  }
}