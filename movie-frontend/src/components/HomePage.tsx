import React from 'react';
import './HomePage.css';
import { BsCameraReelsFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
   
      <div className="home-container">
      <div className="home-background">
        {/* You can add a background image here if needed */}
      </div>
      <div className="content banners">
        <h1 className='bannerheaders'>Welcome to Omelas Movie Rental<BsCameraReelsFill className='m-2' size={40}/></h1>
        <p className='bannerparagraphs'>Explore a wide range of movies and create your personal watchlist!</p>
        <button className="btn btn-primary" onClick={() => navigate('/movies')}>Explore More.....</button>
      </div>
    </div>
  
  );
};

export default HomePage;