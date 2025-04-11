/*
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/watchlist';

export const getWatchlist = async () => {
  try {
    const response = await axios.get(API_URL, { withCredentials: true });
    return response.data;
  } catch (error) {
    console.error('Error fetching watchlist:', error);
    throw error;
  } 
};

export const addToWatchlist = async (movieId: number) => {
  try {
    await axios.post(`${API_URL}/${movieId}`, {}, { withCredentials: true });
  } catch (error) {
    console.error('Error adding to watchlist:', error);
    throw error;
  }
};

export const removeFromWatchlist = async (movieId: number) => {
  try {
    await axios.delete(`${API_URL}/${movieId}`, { withCredentials: true });
  } catch (error) {
    console.error('Error removing from watchlist:', error);
    throw error;
  }
};

*/

////////////////////////////////

/*
import axios from "axios";

export const addToWatchlist = async (movieId: number) => {
  console.log("Sending movieId:", movieId);
  try {
    const response = await axios.post(
      `http://localhost:8080/api/watchlist/${movieId}`,
      {},
      { 
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    console.log("Backend response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Full error:", error);
    throw error;
  }
};

*/

// src/services/watchlistService.ts
import axios from 'axios';

// export const getWatchlist = async () => {
//   const response = await axios.get('http://localhost:8080/api/watchlist', {
//     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }, // Add if using JWT
//   });
//   return response.data;
// };

// export const removeFromWatchlist = async (movieId: number) => {
//   await axios.delete(`http://localhost:8080/api/watchlist/${movieId}`, {
//     headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
//   });
// };






axios.defaults.withCredentials = true;

export const getWatchlist = async () => {
  const response = await axios.get('http://localhost:8080/api/watchlist');
  return response.data;
};

export const removeFromWatchlist = async (movieId: number) => {
  await axios.delete(`http://localhost:8080/api/watchlist/${movieId}`);
};
