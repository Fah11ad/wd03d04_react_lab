import React from 'react'

const FilmPoster = (props) => {
    let posterUrl = props.posterUrl+props.posterImg
    
    return (
        <div>
           <img src={posterUrl} alt="" /> 
        </div>
    )
}

export default FilmPoster
