import React, { useState, useEffect } from "react";
import "./StatusLoader.css"

const StatusLoader = ({ segments = 3, duration = 3000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const startTimer = () => {
    setProgress(0);
    let elapsed = 0;
    const intervalTime = 50;

    const interval = setInterval(() => {
      elapsed += intervalTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);

      if (newProgress >= 100) {
        clearInterval(interval);
        if (activeIndex < segments - 1) {
          setActiveIndex((prev) => prev + 1);
        }
      }
    }, intervalTime);
  };

  useEffect(() => {
    if (activeIndex < segments) {
      startTimer();
    }
  }, [activeIndex]);

  return (
    <div className="flex gap-1 w-full max-w-md">
      {[...Array(segments)].map((_, i) => (
        <div
          key={i}
          className="flex-1 bg-gray-300 rounded-full h-2 overflow-hidden"
        >
          <div
            className="bg-green-500 h-2 rounded-full transition-all ease-linear"
            style={{
              width:
                i < activeIndex
                  ? "100%" // completed
                  : i === activeIndex
                  ? `${progress}%` // active
                  : "0%", // not started
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default StatusLoader;
