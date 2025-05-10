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
  })
  return (
    <div className={style["banner"]}
                style={{
                  backgroundSize: "cover",
                  backgroundImage: `url('https://image.thdb.org/t/p/original/${movie?.backdrop_path}')`,
                  backgroundPosition: "center center",
                  backgroundRepeat: 'no-repeat'
                }}>
      <div className={style['banner_contents']}>
        <h1 className={style["banner_title"]}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className={style["banner_buttons"]}></div>
          <button className={style["banner_button play"]}>Play</button>
          <button className={style["banner_button"]}>My List</button>
        </div>
      </div>
  
  )
}

export default Banner
