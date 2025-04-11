import { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Movie } from '../ds/types';
import './MovieListPage.css';

const MovieListPage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load watchlist from localStorage on component mount
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/movies');
        const savedWatchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
        
        const movieData: Movie[] = response.data.map((item: any) => ({
          id: item.id.toString(),
          title: item.title,
          director: item.director,
          actors: item.actors,
          genre: item.genre,
          description: item.description,
          releaseDate: item.releaseDate,
          imageUrl: item.imageUrl.includes('jpg') ? 
                   item.imageUrl : 
                   `${item.title.toLowerCase().replace(/\s+/g, '-')}.jpg`,
          isInWatchlist: savedWatchlist.some((m: Movie) => m.id === item.id.toString())
        }));

        setMovies(movieData);
      } catch (err) {
        console.error('Error fetching movies:', err);
        setError(err instanceof Error ? err.message : 'Failed to load movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  const handleAddToWatchlist = (movie: Movie) => {
    // Get current watchlist
    const watchlist = JSON.parse(localStorage.getItem('watchlist') || '[]');
    
    // Check if movie is already in watchlist
    const isInWatchlist = watchlist.some((m: Movie) => m.id === movie.id);
    
    if (!isInWatchlist) {
      // Add to watchlist
      const updatedWatchlist = [...watchlist, movie];
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
      
      // Update UI state
      setMovies(movies.map(m => 
        m.id === movie.id ? { ...m, isInWatchlist: true } : m
      ));
    } else {
      // Remove from watchlist
      const updatedWatchlist = watchlist.filter((m: Movie) => m.id !== movie.id);
      localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist));
      
      // Update UI state
      setMovies(movies.map(m => 
        m.id === movie.id ? { ...m, isInWatchlist: false } : m
      ));
    }
  };

  if (loading) return <div className="text-center py-5">Loading movies...</div>;
  if (error) return <div className="alert alert-danger">{error}</div>;

  return (
    <div className="container-fluid py-5 mt-3 movie-list-container" style={{ backgroundColor: '#0D0D0D' }}>
      <h4 className="p-5 mx-5 text-white movie-collection">Movie Collection</h4>
      <div className="row g-4 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5 row-cols-xl-6">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            onAddToWatchlist={() => handleAddToWatchlist(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieListPage;