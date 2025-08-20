import {useEffect,  useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./JoinTravellersGroup.css"

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});


const JoinTravellersGroup = () => {

  // Example route locations
    const locations = [
        { name: 'Paris', position: [48.8566, 2.3522] },
        { name: 'Berlin', position: [52.52, 13.4050] },
        { name: 'Prague', position: [50.0755, 14.4378] },
        { name: 'Vienna', position: [48.2082, 16.3738] },
    ];

    // Extract just the positions for polyline
    const route = locations.map((loc) => loc.position);

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

        <div className="travel-icon-buttons-container">  <div
          className="map-page"
          style={{ display: "flex", flexDirection: "column", width: "100%" }}
        >

          <section className="hero">
            <h1>3 weeks PARIS &amp; VIENNA Epic Road Trip</h1>
            <p>British Columbia &amp; Alberta with UNESCO Jasper and Banff — July&nbsp;2026</p>
            <h2 style={{ textAlign: 'center', marginBottom: '30px', marginTop: '15px' }}>
              Route Map - Source - Live Location(Team Leader)
              - Destination
            </h2>

            <MapContainer center={[50, 10]} zoom={5} style={{ height: '100vh', width: '100%' }}>
              <TileLayer
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* Markers */}
              {locations.map((loc, idx) => (
                <Marker key={idx} position={loc.position}>
                  <Popup>{loc.name}</Popup>
                </Marker>
              ))}

              {/* Polyline */}
              <Polyline positions={route} color="blue" weight={4} />
            </MapContainer>

          </section>
   <div id="deals-section" className="best-deals-container">
            <h2>Today's Best Nomad Destination Deals</h2>
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
        </div>



    </>

  );
};

export default JoinTravellersGroup;