import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaHeart, FaRegHeart, FaPlay } from 'react-icons/fa';
import { Movie } from '../ds/types';

interface MovieCardProps {
  movie: Movie;
  onAddToWatchlist: (movie: Movie) => void;
  isInWatchlist?: boolean;
}

const MovieCard = ({ movie, onAddToWatchlist, isInWatchlist = false }: MovieCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [localIsInWatchlist, setLocalIsInWatchlist] = useState(isInWatchlist);

  const handleAddToWatchlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLocalIsInWatchlist(!localIsInWatchlist);
    onAddToWatchlist(movie);
  };

  return (
    <div className="col-md-4 mb-4">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.03 }}
        className="card h-100 position-relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Movie Poster */}
        <img
          src={`/images/movies/${movie.imageUrl}`}
          className="card-img-top"
          alt={movie.title}
          style={{ 
            height: '300px', 
            objectFit: 'cover',
            borderTopLeftRadius: '0.375rem',
            borderTopRightRadius: '0.375rem'
          }}
          onError={(e) => {
            e.currentTarget.src = '/images/movies/placeholder.jpg';
          }}
        />

        {/* Hover Overlay */}
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="position-absolute top-0 start-0 w-100 h-100 p-3 text-white"
            style={{
              background: 'rgba(0, 0, 0, 0.8)',
              backdropFilter: 'blur(2px)',
              cursor: 'pointer'
            }}
          >
            <div className="d-flex flex-column h-100 justify-content-between">
              <div>
                <h5>{movie.title}</h5>
                <p className="small">{movie.description}</p>
              </div>
              
              <div className="d-flex">
                <button 
                  className="btn btn-sm btn-primary me-2 flex-grow-1"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Handle play action
                  }}
                >
                  <FaPlay className="me-1" /> Trailer
                </button>
                
                <button 
                  className="btn btn-sm flex-grow-1"
                  onClick={handleAddToWatchlist}
                  style={{
                    backgroundColor: localIsInWatchlist ? 'rgba(255, 0, 0, 0.2)' : 'transparent',
                    color: 'white',
                    border: '1px solid white'
                  }}
                >
                  {localIsInWatchlist ? (
                    <FaHeart className="text-danger me-1" />
                  ) : (
                    <FaRegHeart className="me-1" />
                  )}
                  {localIsInWatchlist ? 'In Watchlist' : 'Watchlist'}
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Card Body */}
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <p className="card-text small text-muted">{movie.director}</p>
          <span className="badge bg-secondary">{movie.genre}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default MovieCard;