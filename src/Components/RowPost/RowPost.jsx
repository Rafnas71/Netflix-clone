import React, { useEffect, useState } from 'react'
import './RowPost.css'
import { imageUrl,API_KEY } from '../../Constants/Constants'
import instance from '../../axios.js'
import YouTube from 'react-youtube'



function RowPost(props) {
  const [movies,setMovies]=useState([])
  const [urlId,setUrlId ]=useState('')
  

  useEffect(() => {
    instance
    .get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    })
    .catch(err=>{
      //alert('Network Error')
    })
  }, [props.url])

  function horizontalScroll (event) {
    const delta = Math.max(-1, Math.min(1, (event.nativeEvent.wheelDelta || -event.nativeEvent.detail)))
    event.currentTarget.scrollLeft -= (delta * 10)
    event.preventDefault()
  } 

  const handleMovie = (id)=>{
    console.log(id)
    instance
    .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
    .then(response=>{
      console.log(response.data)
      if(response.data.results.length !== 0){
        setUrlId(response.data.results[0])
      }
      else{
        console.log("Array Empty")
        setUrlId(null)
      }

    })
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    }}
    
  return (
    <div className='row' onWheel={horizontalScroll}>
        <h2>{props.title}</h2> 
        <div className='posters' >
          {movies.map((obj)=>
          <img  onClick={() => handleMovie(obj.id)} className= {props.isSmall ? 'smallposter':'poster'}   alt='poster' src={`${imageUrl+obj.backdrop_path }`}/>
          )} 
        </div>
        { urlId && <YouTube opts={opts} videoId={urlId.key} /> }


    </div>
  )
}

export default RowPost