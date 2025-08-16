// StatusViewer.jsx
import React, { useState, useEffect, useRef } from "react";

const StatusViewer = ({ statuses, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);
  const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'

  useEffect(() => {
    startTimer();
    const startTimer = () => {
      setProgress(0);
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            handleNext();
            return 0;
          }
          return prev + 2;
        });
      }, 100); // 5 seconds total
    };
    return () => clearInterval(intervalRef.current);
  }, [currentIndex]);




  const handleNext = () => {
    if (currentIndex < statuses.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <div style={styles.overlay}>
      {/* Progress Bars */}
      <div style={styles.progressContainer}>
        {statuses.map((_, idx) => (
          <div key={idx} style={styles.progressBarWrapper}>
            <div
              style={{
                ...styles.progressBar,
                width:
                  idx < currentIndex
                    ? "100%"
                    : idx === currentIndex
                      ? `${progress}%`
                      : "0%",
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Media Content */}
      <div style={styles.content}>
        {statuses[currentIndex].type === "image" ? (
          <img
            src={statuses[currentIndex].url}
            alt="status"
            style={styles.media}
          />
        ) : (
          <video
            src={statuses[currentIndex].url}
            style={styles.media}
            autoPlay
            muted
          />
        )}
      </div>

      {/* Navigation Areas */}
      <div style={styles.navLeft} onClick={handlePrev}></div>
      <div style={styles.navRight} onClick={handleNext}></div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "#000",
    display: "flex",
    flexDirection: "column",
    zIndex: 1000,
  },
  progressContainer: {
    display: "flex",
    gap: "4px",
    padding: "10px",
  },
  progressBarWrapper: {
    flex: 1,
    height: "3px",
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: "2px",
  },
  progressBar: {
    height: "100%",
    backgroundColor: "#fff",
    transition: "width 0.1s linear",
  },
  content: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  media: {
    maxHeight: "90%",
    maxWidth: "90%",
    borderRadius: "10px",
  },
  navLeft: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "50%",
    height: "100%",
    cursor: "pointer",
  },
  navRight: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    cursor: "pointer",
  },
};

export default StatusViewer;