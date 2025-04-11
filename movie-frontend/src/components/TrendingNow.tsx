import { useState, useRef, useEffect } from 'react';
import './TrendingNow.css';

interface Movie {
  id: number;
  title: string;
  genre: string;
  releaseYear: number;
  imageUrl: string;
  rating?: string;
  duration?: string;
}

const TrendingNow = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const trendingMovies: Movie[] = [
    {
      id: 1,
      title: 'KARMA',
      genre: 'Drama',
      releaseYear: 2023,
      imageUrl: 'karma.jpg',
      rating: 'PG-13',
      duration: '2h 15m'
    },
    {
      id: 2,
      title: 'SQUID GAME',
      genre: 'Thriller',
      releaseYear: 2021,
      imageUrl: 'squid-game.jpg',
      rating: 'TV-MA',
      duration: '1h 10m'
    },
    {
      id: 3,
      title: 'ADOLESCENCE',
      genre: 'Coming-of-Age',
      releaseYear: 2022,
      imageUrl: 'adolescence.jpg',
      rating: 'R',
      duration: '1h 45m'
    },
    {
      id: 4,
      title: 'When Life Gave You Tangerines',
      genre: 'Comedy',
      releaseYear: 2023,
      imageUrl: 'tangerines.jpg',
      rating: 'PG',
      duration: '1h 30m'
    },
    {
      id: 5,
      title: 'Tigger’s Journey',
      genre: 'Adventure',
      releaseYear: 2024,
      imageUrl: 'tigger.jpg',
      rating: 'G',
      duration: '1h 50m'
    },
    {
          id: 6,
          title: 'Inception',
          genre: 'Sci-Fi',
          releaseYear: 2010,
          imageUrl: 'inception.jpg',
          rating: 'PG-13',
          duration: '2h 28m'
        },
        {
          id: 7,
          title: 'The Shawshank Redemption',
          genre: 'Drama',
          releaseYear: 1994,
          imageUrl: 'shawshank.jpg',
          rating: 'R',
          duration: '2h 22m'
        },
        {
          id: 8,
          title: 'Parasite',
          genre: 'Thriller',
          releaseYear: 2019,
          imageUrl: 'parasite.jpg',
          rating: 'R',
          duration: '2h 12m'
        },
        {
          id: 9,
          title: 'Mad Max: Fury Road',
          genre: 'Action',
          releaseYear: 2015,
          imageUrl: 'mad-max-fury-road.jpg',
          rating: 'R',
          duration: '2h'
        },
        {
          id: 10,
          title: 'Spirited Away',
          genre: 'Animation',
          releaseYear: 2001,
          imageUrl: 'spirited-away.jpg',
          rating: 'PG',
          duration: '2h 5m'
        },
        {
          id: 11,
          title: 'Get Out',
          genre: 'Horror',
          releaseYear: 2017,
          imageUrl: 'get-out.jpg',
          rating: 'R',
          duration: '1h 44m'
        }
      
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Initialize scroll state
  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <section className="trending-section">
      <div className="trending-container">
        <h2 className="section-title">Trending Now</h2>
        <div className="scroll-container">
          {showLeftArrow && (
            <button 
              className="scroll-arrow left-arrow" 
              onClick={() => scroll('left')}
              aria-label="Scroll left"
            >
              ‹
            </button>
          )}
          <div 
            className="movie-row" 
            ref={scrollRef} 
            onScroll={handleScroll}
          >
            {trendingMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <img 
                 src={(movie.imageUrl as string).startsWith('http') ? movie.imageUrl : `/images/movies/${movie.imageUrl}`}
                  alt={movie.title} 
                  className="movie-poster"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/default.jpg';
                  }}
                />
                <div className="movie-overlay">
                  <h3 className="movie-title">{movie.title}</h3>
                  <div className="movie-meta">
                    {movie.rating && <span className="match-rate">98% Match</span>}
                    <span className="release-year">{movie.releaseYear}</span>
                    {movie.duration && <span className="duration">{movie.duration}</span>}
                    <span className="quality">HD</span>
                  </div>
                  <div className="movie-tags">
                    <span>{movie.genre}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {showRightArrow && (
            <button 
              className="scroll-arrow right-arrow" 
              onClick={() => scroll('right')}
              aria-label="Scroll right"
            >
              ›
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
