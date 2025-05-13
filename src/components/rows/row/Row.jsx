import React from 'react'
import './row.css'
import axios from '../../../utils/Axios'
import { useEffect, useState } from 'react'
import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';

function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [noTrailer, setNoTrailer] = useState(false);
  const base_url = "https://image.tmdb.org/t/p/original";
                 
  useEffect(() => {
      (async () => {
          try {
            //  console.log(fetchUrl);
              const request = await axios.get(fetchUrl);
              setMovie(request.data.results);
              // console.log(request.data.results);
          } catch (error) {
              console.log("error", error);
          }
      })();
  }, [fetchUrl]);


  // movies trailer function 
  const handleClick = (movie) => {
      // setNoTrailer(false); 
      if (trailerUrl) {
          setTrailerUrl('');
        //   setIsModalOpen(false); 
      } else {
        
          movieTrailer(movie?.title || movie?.name || movie?.original_name)
              .then((url) => {
                console.log(url);
                  if (url) {
                      const urlParams = new URLSearchParams(new URL(url).search);
                      console.log(urlParams);
                      const videoId = urlParams.get('v');
                      console.log(videoId);
                      setTrailerUrl(videoId);
                      setIsModalOpen(true); 
                  } else {
                      setNoTrailer(true); 
                  }
              })
              .catch(() => {
                //   setNoTrailer(true); 
              });
      }
  };

  const opts = {
      height: '390',
      width: "100%",
      playerVars: {
          autoplay: 1,
      },
  };

  return (
      <div className="row">
          <h1 className='rowtitle'>{title}</h1>
          <div className="row__posters">
              {movies?.map((movie, index) => (
                  <img
                      onClick={() => handleClick(movie)}
                      key={index}
                      src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                      alt={movie.name}
                      className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                  />
              ))}
          </div>

      
          <div style={{ padding: '40px'}}>
              {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
          {/* {isModalOpen && (
              <div className="modal">
                  <div className="modal__content">
                      <span className="modal__close" onClick={() => setIsModalOpen(false)}>
                          &times;
                      </span>
                      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
                  </div>
              </div>
          )}

          {noTrailer && (
              <div className="modal">
                  <div className="modal__content small">
                      <span className="modal__close" onClick={() => setNoTrailer(false)}>
                          &times;
                      </span>
                      <p>No trailer available for this movie.</p>
                  </div>
              </div>
          )} */}
      </div>
  );
};

export default Row;