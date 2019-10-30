import React, { Component } from 'react'
import './index.css'
export default class Fave extends Component {
    
        isFave= false
    
    handleClick = (e) => {
        console.log("handling Fave click!")
        e.stopPropagation()
       
        this.props.onFaveToggle()
         
    }
    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        return (
                <div className={"film-row-fave  " + isFave} onClick={this.handleClick}>
                    <p className="material-icons">{isFave}</p>
                </div>
        )
    }
}
