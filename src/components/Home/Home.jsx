import React, { useState, useEffect } from "react";
import "./Home.css";
import TravelDealsButton from "../TravelDealsButton/TravelDealsButton";

const Home = () => {
  const [active, setActive] = useState('');
  const fetchData = () => {
    // This function will be called when the component mounts
    console.log('Fetching data on component load...');
    // Perform data fetching or other side effects here
    setActive(1); // Set initial active button
  };

  useEffect(() => {
    fetchData(); // Call the function inside useEffect
  }, []); // Empty dependency array ensures it runs only once on mount

  // const handleRedirect = () => {
  //   window.location.href = '/dashboard'; // Redirects to the /dashboard path
  // };


  const buttons = [
    { id: 1, label: "Vehical - Rentals", icon: "fas fa-motorcycle motorcycle" },
    { id: 2, label: "Vehical - Rentals", icon: "fas fa-car" },
    { id: 3, label: "Campervan Rentals", icon: "fas fa-shuttle-van" },
    // { id: 3, label: "Flight", icon: "fas fa-plane" },
    //  { id: 4, label: "Cruise", icon: "fas fa-ship" },
    { id: 4, label: "Hotels & Home Stays", icon: "fas fa-hotel" },   
    
    { id: 5, label: "Hire Trip Coach", title: "Hire Tourist Guide", icon: "fas fa-user-tie guide-icon" },
    { id: 6, label: "Tourist Map", icon: "fas fa-map-marked-alt" },//Home- Back to Home Full Travel Package
    // { id: 8, label: "Forex Exchange", icon: "fas fa-money-bill-wave" },   
     { id: 7, label: "Full Tour Package", icon: "fas fa-travel-package" }, 
  ];

  const dealsData = [
    {
      id: 1,
      title: "Bali Getaway",
      price: "$499",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "5 nights in a luxury villa with breakfast & island tour.",
      link: "/deals/bali.html",
      expiresInHours: 8
    },
    {
      id: 2,
      title: "Swiss Alps Adventure",
      price: "$899",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      description: "7-day guided hiking trip through the Swiss Alps.",
      link: "/deals/swiss.html",
      expiresInHours: 12
    },
    {
      id: 3,
      title: "Maldives Resort Escape",
      price: "$1,299",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      description: "4 nights in an overwater villa with spa & diving.",
      link: "/deals/maldives.html",
      expiresInHours: 5
    }
  ];

  const totalSeconds = dealsData.map(d => d.expiresInHours * 3600);
  const [timers, setTimers] = useState([...totalSeconds]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimers(prev => prev.map(time => (time > 0 ? time - 1 : 0)));
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}h ${m}m ${s}s`;
  };

  const getProgressColor = (percent) => {
    if (percent > 50) return "#28a745"; // green
    if (percent > 20) return "#ffc107"; // yellow
    return "#dc3545"; // red
  };

  const goToDetails = (url) => {
    window.location.href = url; // redirect to details page
  };

  return (
    <>
      <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </div>
      <div>

        <div className="travel-icon-buttons-container">
          {buttons.map((btn) => (
            <button
              key={btn.id}
              onClick={() => setActive(btn.id)}
              className={`travel-icon-btn ${active === btn.id ? 'active' : ''}`}>
              {/* {btn.icon} */}
              <i className={`${btn.icon} campervan-icon`} />
              {btn.label}
            </button>
          ))}
        </div>
        <div className="booking-form">
          <div className="places">
            <div className="trip-type">
              <label><input type="radio" name="tripType" value="oneway" checked /> One Way</label>
              <label><input type="radio" name="tripType" value="roundtrip" /> Round Trip</label>
            </div>
            <div className="form-group">
              <label for="from">From Location</label>
              <input type="text" id="from" name="from" placeholder="City or Airport" />
            </div>
            <div className="form-group">
              <label for="to">To Location</label>
              <input type="text" id="to" name="to" placeholder="City or Airport" />
            </div>
            <div className="form-group">
              <label for="departure">Departure Date</label>
              <input type="date" id="departure" name="departure" />
            </div>
            <div className="form-group" id="returnDateGroup">
              <label for="return">Return Date</label>
              <input type="date" id="return" name="return" />
            </div>
            <div className="form-group">
              <label for="travellers">Travellers</label>
              <input type="number" id="travellers" name="travellers" min="1" value="1" />
            </div>
            <button className="submit-btn">Search</button>
          </div>
        </div>
        <div>
          <div style={{ textAlign: "center", padding: "25px" }}>
            <TravelDealsButton />
          </div>

          {/* <div id="deals-section" style={{ padding: "50px", background: "#fff" }}>
              <h2>Today's Best Travel Deals</h2>
              <ul>
                <li>🏖️ Bali Getaway – $499</li>
                <li>🏔️ Swiss Alps Adventure – $899</li>
                <li>🏝️ Maldives Resort – $1,299</li>
              </ul>
            </div> */}

          <div id="deals-section" className="best-deals-container">
            <h2>Today's Best Travel Deals</h2>
            <div className="deals-grid">
              {dealsData.map((deal, index) => {
                const percentLeft = (timers[index] / totalSeconds[index]) * 100;
                return (
                  <div
                    className="deal-card"
                    key={deal.id}
                    onClick={() => goToDetails(deal.link)} >
                    <img src={deal.image} alt={deal.title} />
                    <div className="deal-info">
                      <h3>{deal.title}</h3>
                      <p>{deal.description}</p>
                      <span className="deal-price">{deal.price}</span>
                      <div className="deal-timer">
                        ⏳ {timers[index] > 0 ? `${formatTime(timers[index])} left` : "Expired"}
                      </div>
                      <div className="deal-progress">
                        <div
                          className="deal-progress-bar"
                          style={{
                            width: `${percentLeft}%`,
                            backgroundColor: getProgressColor(percentLeft)
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </>
  );
};
export default Home;	