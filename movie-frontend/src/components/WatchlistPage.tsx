import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Movie } from "../ds/types";
import "./WatchlistPage.css";

export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("username") || "Movie Buff";
    setUsername(user);
    
    const savedWatchlist = localStorage.getItem("watchlist");
    if (savedWatchlist) setWatchlist(JSON.parse(savedWatchlist));
  }, []);

  const removeFromWatchlist = (movieId: string | number) => {
    setWatchlist(prev => {
      const updated = prev.filter(m => m.id !== movieId);
      localStorage.setItem("watchlist", JSON.stringify(updated));
      return updated;
    });
  };

  return (
    <div className="watchlist-page">
      <motion.header
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="watchlist-header"
>
  <h3>Welcome to  WATCHLIST</h3>

    </motion.header>

      {/* Movie List */}
      <motion.div className="movie-list">
        <AnimatePresence>
          {watchlist.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="empty-message"
            >
              Your watchlist is empty
            </motion.p>
          ) : (
            watchlist.map((movie) => (
              <motion.div
                key={movie.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="movie-card"
              >
                <div className="poster-container">
                  <img
                    src={`/images/movies/${movie.imageUrl}`}
                    alt={movie.title}
                    onError={(e) => 
                      (e.currentTarget.src = "/images/movies/placeholder.jpg")
                    }
                  />
                </div>
                <div className="movie-details">
                  <h2>{movie.title}</h2>
                  <div className="meta">
                    <span>{movie.director}</span>
                    <span>•</span>
                    <span>{movie.genre}</span>
                  </div>
                  <p className="actors">{movie.actors}</p>
                  <p className="description">{movie.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="remove-btn"
                    onClick={() => removeFromWatchlist(movie.id)}
                  >
                    Remove
                  </motion.button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

