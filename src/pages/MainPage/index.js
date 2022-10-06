import React from 'react';
import Banner from "../../components/Banner";
import Row from "../../components/Row";
import requests from '../../api/requests';

export default function Mainpage() {
  return (
    <div className="app">
    <Banner />
    <Row
      title = "NETFLIX ORIGINALS"
      id="NO"
      fecthUrl={requests.fetchNetflixOriginals}
      isLargeRow
    />
    <Row title="Treding Now" id="TN" fecthUrl={requests.fetchTrending} />
    <Row title="Top rated" id="TR" fecthUrl={requests.fetchTopRated} />
    <Row 
      title="Action Movies" 
      id="AM" 
      fecthUrl={requests.fetchActionMovies} 
    />
    <Row 
      title="Comedy Movies" 
      id="CM" 
      fecthUrl={requests.fetchComedyMovies} 
    />
  </div>
  )
}
