import React, { useEffect, useState } from 'react';
import axios from '../../utils/Axios';
import requests from '../../utils/requests';
import style from './Banner.module.css';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';

function Banner() {
  const [movies, setMovies] = useState([]);
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(requests.fetchNetflixOriginals);
        setMovies(response.data.results || []);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % movies.length);
        setFade(true);
      }, 500); // fade-out time
    }, 6000); // 6 seconds interval
    return () => clearInterval(interval);
  }, [movies]);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;
  };

  const movie = movies[index];

  return (
    <div
      className={`${style.banner} ${fade ? style.fadeIn : style.fadeOut}`}
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className={style.banner__contents}>
        <h1 className={style.banner__title}>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className={style.banner__buttons}>
          <button className={`${style.banner__button} ${style.banner__play}`}>
            <PlayArrowIcon style={{ marginRight: '8px' }} />
            <p>Play</p>
          </button>
          <button className={`${style.banner__button} ${style.banner__info}`}>
            <AddIcon style={{ marginRight: '8px' }} />
            <p>My List</p>
          </button>
        </div>

        <p className={style.banner__description}>
          {truncate(movie?.overview, 180)}
        </p>
      </div>

      <div className={style.banner__fadeBottom} />
    </div>
  );
}

export default Banner;
