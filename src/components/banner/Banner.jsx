import React, { useEffect, useState } from 'react'
import axios from '../../utils/Axios'
import requests from '../../utils/requests';
import style from './Banner.module.css'

function Banner() {
  const [movie, setMovie] = useState();
  useEffect(()=>{
    async function fetchData(){
      try{
        const response = await axios.get(requests.fetchNetflixOriginals);
        console.log(response)
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length - 1)
          ]
        );
      } catch (error){
        console.log("error", error);
      }
    }
    fetchData();
  },[]);
  const truncate = (string,n)=>{
    return string?.length >0 ? string.substr(0,n-1) + "..." : string;
  }
  return (
    <div className={style["banner"]}
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
                  backgroundPosition: "center center",
                  backgroundRepeat: 'no-repeat'
                }}>
      <div className={style['banner__contents']}>
        <h1 className={style['banner_title']}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={style['banner__buttons']}>
        <button className={`${style.banner__button} ${style.banner__play}`}>
            <p>play</p>
          </button>
          <button className={`${style.banner__button} ${style.banner__info} ${style.hoverButton}`}>
            <p>my list</p>
          </button>
        </div>
        <h1 className={style['banner__description']}> {truncate(movie?.overview, 1500)} </h1>
        </div>
        <div className={style['banner_fadeBOtom']} />
      </div>
  
  )

}

export default Banner
