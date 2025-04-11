import { FC } from 'react';
import './Footer.css';

interface FooterLink {
  text: string;
  href: string;
}

const Footer: FC = () => {
  
  const quickLinks: FooterLink[] = [
    { text: 'Home', href: '/' },
    { text: 'Movies', href: '/movies' },
    { text: 'New Releases', href: '/new' },
    { text: 'Trending', href: '/trending' }
  ];

  const genres: FooterLink[] = [
    { text: 'Action', href: '/genre/action' },
    { text: 'Comedy', href: '/genre/comedy' },
    { text: 'Horror', href: '/genre/horror' },
    { text: 'Sci-Fi', href: '/genre/sci-fi' }
  ];

  const legalLinks: FooterLink[] = [
    { text: 'Terms of Service', href: '/terms' },
    { text: 'Privacy Policy', href: '/privacy' },
    { text: 'DMCA', href: '/dmca' },
    { text: 'Support', href: '/support' }
  ];

  return (
    <footer id="cs-footer-308" className="dark-footer">
      <div className="cs-container">
        {/* Brand and Description */}
        <div className="cs-logo-group">
          <h2 className="brand-title">Omelas</h2>
          <p className="cs-text">
            Your premium destination for movie rentals. Stream the latest blockbusters 
            and timeless classics in stunning 4K quality.
          </p>
          <div className="contact-info">
            <a href="mailto:omelas@info.com" className="contact-email">
              <i className="fas fa-envelope"></i> omelas@info.com
            </a>
          </div>
          <div className="social-links">
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Quick Links */}
        <ul className="cs-nav">
          <li className="cs-nav-li">
            <span className="cs-header">Explore</span>
          </li>
          {quickLinks.map((link) => (
            <li key={link.text} className="cs-nav-li">
              <a href={link.href} className="cs-nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Genres */}
        <ul className="cs-nav">
          <li className="cs-nav-li">
            <span className="cs-header">Genres</span>
          </li>
          {genres.map((link) => (
            <li key={link.text} className="cs-nav-li">
              <a href={link.href} className="cs-nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* Legal */}
        <ul className="cs-nav">
          <li className="cs-nav-li">
            <span className="cs-header">Legal</span>
          </li>
          {legalLinks.map((link) => (
            <li key={link.text} className="cs-nav-li">
              <a href={link.href} className="cs-nav-link">
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div className="cs-bottom">
        <span className="cs-copyright">
          © {new Date().getFullYear()} Omelas. All rights reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;