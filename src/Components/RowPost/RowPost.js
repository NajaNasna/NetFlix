import React, {useEffect, useState} from 'react'
import './Rowpost.css'
import axios from '../axios'
import {imageUrl,API_KEY } from '../../Constants/Constants'
import YouTube from 'react-youtube'

function RowPost(props) {
    const[movies,setMovies] = useState([])
    const[urlId,setUrlId] = useState('')
    


    useEffect(()=>{
      axios.get(props.url).then((response)=>{
        setMovies(response.data.results)
        console.log(response.data)
      }).catch((err)=>{
        alert('Network Error')
      })
      
      
    },[])


    const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };



      const handleMovie = (id) =>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response =>{
          if(response.data.results.length!==0){
            setUrlId(response.data.results[0])
          }
          else{
            console.log('Array empty')
          }
        }).catch((err)=>{
          alert('unavailable')
        })
      }



  return (
    <div className='row'>
        <h2 className='heading'>{props.title}</h2>
        <div className='posters'>
          {movies.map((obj)=>
            <img onClick={() => handleMovie(obj.id)} alt='' className={ props.isSmall ? 'smallPosters' : 'poster'} src={`${imageUrl+obj.backdrop_path}` }/>

          )}
            

        </div>
        <div>
           {  urlId &&  <YouTube opts={opts} videoId={urlId.key} />         }


        </div>

    </div>    

  )
}

export default RowPost