import React, { useEffect, useState } from 'react'
import './Banner.css'
import instance from '../../axios'
import {imageUrl} from '../../Constants/Constants'
import { orginals } from '../../url'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    instance.get(orginals).then((response)=>{
      console.log(response.data.results) 
      setTimeout(function() {
        setMovie(response.data.results.sort(function (a, b) { return 0.5 - Math.random() })[0]);
      }, 4000);
      //console.log(movie)
  
    })    
    }, )
    const maxLength = 300;
    
      
  return (
    
    <div 
    style={ {backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path :""    })`} }
    className='banner'>
      <div className="content">
            <div className="title">{movie ? (movie.title ? movie.title : movie.name ):""}</div>
            <div className="buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">{movie? (movie.overview.length > maxLength ? movie.overview.slice(0, maxLength) + "..." : movie.overview) :""}</h1>
        </div>
        <div className="fade_bottom">
            
        </div>
    </div>
  )
}

export default Banner