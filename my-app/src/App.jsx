import React, { useState, useRef } from "react";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import "./App.css";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img5.png",
];

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleAudio = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio("/audio/voice.mp3");
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    if (isPlaying) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="app">
      {/* 🔝 Navigation Bar */}
      <nav className="navbar">
        <div className="logo">ORG404 Housing</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#details">Details</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* 💬 Hero Content */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <h1>Clean apartment in a central location</h1>
          <p>1 bed, 1 TV, and 1 bathroom. What else could you want?</p>
          <a href="#details" className="cta-button">View Details</a>
        </div>
      </section>

      {/* 🖼️ Carousel Section with Navigation Arrows */}
      <h2>ATTENTION: This site is powered by the special voice assistant to help visually impaired people.</h2>
      <section className="carousel-section">
        <div className="carousel-image-wrapper">
          <img
            key={currentImage}
            src={images[currentImage]}
            alt="House"
            className="carousel-image"
          />
          
          {/* 🎧 Audio Button */}
          <button
            className={`audio-button ${isPlaying ? "playing" : ""}`}
            onClick={toggleAudio}
          >
            {isPlaying ? <FaVolumeMute /> : <FaVolumeUp />}
          </button>

          {/* ◀️ Left Arrow */}
          <button className="arrow left" onClick={prevImage}>
            ◁
          </button>

          {/* ▶️ Right Arrow */}
          <button className="arrow right" onClick={nextImage}>
            ▷
          </button>
        </div>
      </section>

      {/* 📋 Property Details */}
      <section id="details" className="details">
        <div className="details-content">
          <h3>Property Highlights</h3>
          <ul>
            <li>1 Ultra-deluxe premium bed</li>
            <li>1 bathroom with nice closet</li>
            <li>1 kitchen and teapot</li>
            <li>1 TV and a sofa</li>
          </ul>
          <p className="price-tag">$849,000</p>
          <button className="contact-button" id="contact">Contact Agent</button>
        </div>
      </section>

      {/* 🔻 Footer */}
      <footer>
        <p>© 2025 ORG404. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
