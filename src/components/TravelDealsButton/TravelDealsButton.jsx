import React, { useEffect, useState } from "react";
import './TravelDealsButton.css';

const TravelDealsButton = () => {
const [isAnimating, setIsAnimating] = useState(true);

  const scrollToDeals = () => {
    const dealsSection = document.getElementById("deals-section");
    if (dealsSection) {
      dealsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsAnimating(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
   <button className={`travel-deals-btn ${isAnimating ? 'pulse-button' : ''}`} onClick={scrollToDeals}>
      Explore Today's Best Travel Deals
      <i className={`fas fa-chevron-down arrow-icon ${isAnimating ? 'bounce-pulse' : ''}`}></i>
    </button>
  );
};
export default TravelDealsButton;
