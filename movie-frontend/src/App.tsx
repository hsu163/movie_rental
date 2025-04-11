import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/NavbarComponent";
import HomePage from "./components/HomePage";
import MovieListPage from "./components/MovieListPage";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import WatchlistPage from "./components/WatchlistPage";
import Footer from "./components/Footer";
import TrendingNow from "./components/TrendingNow";
import FAQ from "./components/FAQ";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <NavbarComponent />
      
                   
                  
        <main className="main-content">
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <HomePage />
                  
                  <FAQ />
                </>
              } 
            />
            <Route path="/movies" element={<MovieListPage />} />
            <Route path="/watchlist" element={<WatchlistPage />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </main>
        <TrendingNow />
        <Footer />
      </div>
    </Router>
  );
}

export default App;