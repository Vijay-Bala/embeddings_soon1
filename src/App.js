import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import Timer from "./components/Countdown/Timer";
import './App.css'
import Testimonial from "./components/Testimonial";
import Testimonial2 from "./components/Testimonial2";

function TypingAnimation({ text }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const intervalId = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 200); // You can adjust the speed by changing the interval duration

      return () => clearInterval(intervalId);
    }
  }, [text, currentIndex]);

  return <h1 style={{background: 'linear-gradient(blue, black)',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',}}>{displayedText}</h1>;
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Delay of 3 seconds

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);

  return (
    <div className="App" style={{ height: 'auto', overflow: 'auto', marginTop: '-7vh' }}>
      <div className="container">
        {!isLoading && (
          <>
            <TypingAnimation text="EMBEDDINGS' 24" />
            <TypingAnimation text="Coming Soon ..." />
          </>
        )}
        <Timer />
        <Testimonial />
        <Testimonial2 />
        <Preloader />
      </div>
    </div>
  );
}

export default App;
