import React from 'react'

const FilmPoster = (props) => {
    let posterUrl2 = props.posterUrl+props.posterImg
    
    return (
        <div>
           <img src={posterUrl2} alt="" /> 
        </div>
    )
}

export default FilmPoster
