import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";

function Homepage() {
  const featuresRef = useRef(null);
  const [showFeatures, setShowFeatures] = useState(false);
  const navigate = useNavigate(); // Correct usage

  const scrollToFeatures = () => {
  if (!showFeatures) setShowFeatures(true);
  setTimeout(() => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
  }, 100); 
};
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !showFeatures) {
        setShowFeatures(true);
        featuresRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showFeatures]);

  return (
    <div className="homepage-design">
      <div className="homepage-title">
        <h1 className="title">🚀 Welcome to Meme Generator & AI Roaster</h1>
        <h3>Let users generate memes, get roasted with light-hearted AI jokes,<br></br> and enjoy quick mini games — the ultimate timepass playground! 🎉🧠🎮</h3>

        <div className="buttons">
          <button className="start-button" onClick={() => navigate('/getstart')}>✨ Get Started</button>
          <button className="feature-button" onClick={scrollToFeatures}>
            🔧 Features
          </button>
        </div>
      </div>

      {showFeatures && (
        <div ref={featuresRef} className="features-section">
          <h2 className="features-heading">Features</h2>

          <div className="feature-box bounce">
            <h3>🎭 Meme Generator</h3>
            <ul>
              <li>Fetch meme templates from Imgflip API</li>
              <li>Add top/bottom custom text</li>
              <li>Download or share memes</li>
            </ul>
          </div>

          <div className="feature-box fade">
            <h3>🤖 AI Roaster Bot</h3>
            <ul>
              <li>Input your name/interests</li>
              <li>Funny, sarcastic roast using AI</li>
              <li>Avatars + emoji reactions</li>
            </ul>
          </div>

          <div className="feature-box slide">
            <h3>🎮 Mini Games</h3>
            <ul>
              <li>Tic Tac Toe (with AI)</li>
              <li>Rock Paper Scissors</li>
              <li>Typing Speed Test</li>
            </ul>
          </div>

          <div className="feature-box scale">
            <h3>🌟 Bonus</h3>
            <ul>
              <li>"Rate My WebApp" — Get your AI vibe score 😎 </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;