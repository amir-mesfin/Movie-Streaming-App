import React from 'react'
// import style from './rowList.module.css'
import Row from '../row/Row'
import requests  from '../../../utils/requests'
function RowList() {
  return (
    <>
    <Row 
          title="MLA Originals"
          fetchUrl={requests.fetchTopRated}
          
    />
    <Row 
          title="Top Rated Movies"
          fetchUrl={requests.fetchTrending}
          isLargeRow={true}
    />
     <Row 
          title="Animation Movies"
          fetchUrl={requests.fetchAnimationMovies}
          isLargeRow={true}
    />
     <Row 
          title="Popular Movies"
          fetchUrl={requests.fetchPopularMovies}
          isLargeRow={true}
    />
    <Row 
          title="Trending Movies"
          fetchUrl={requests.fetchTrending}
          isLargeRow={true}
    />
    <Row 
          title="Comedy Movies"
          fetchUrl={requests.fetchComedyMovies}
          isLargeRow={true}
    />
      <Row 
          title=" Romance Movies"
          fetchUrl={requests.fetchRomanceMovies}
          isLargeRow={true}
    />
      <Row 
          title="Science Movies"
          fetchUrl={requests.fetchScienceFictionMovies}
          isLargeRow={true}
    />
      <Row 
          title="Fantas Movies"
          fetchUrl={requests.fetchFantasyMovies}
          isLargeRow={true}
    />
      <Row 
          title="Mystery Movies"
          fetchUrl={requests.fetchMysteryMovies}
          isLargeRow={true}
    />
      <Row 
          title="Western Movies"
          fetchUrl={requests.fetchWesternMovies}
          isLargeRow={true}
    />
      <Row 
          title="Documentaries Movies"
          fetchUrl={requests.fetchDocumentaries}
          isLargeRow={true}
          />
       <Row 
          title="UP Coming Movies"
          fetchUrl={requests.fetchUpcomingMovies}
          isLargeRow={true}
          />
         
    
    </>
  )
}

export default RowList
