//latest working
import { useEffect, useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import Papa from "papaparse";
import "leaflet/dist/leaflet.css";
import "leaflet-ant-path";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./DigitalNomads.css"


//import "rc-slider/assets/index.css";

// Distance calculator (Haversine formula)
const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return (R * c).toFixed(1);
};

// Animated Route
const AnimatedRoute = ({ from, to }) => {
  const map = useMap();
  useEffect(() => {
    if (!from || !to) return;
    const antPath = new L.polyline.antPath([from, to], {
      paused: false,
      reverse: false,
      delay: 400,
      dashArray: [10, 20],
      weight: 4,
      color: "#00FF00",
      pulseColor: "#FFFFFF",
    });
    antPath.addTo(map);
    return () => {
      map.removeLayer(antPath);
    };
  }, [from, to, map]);
  return null;
};

const HomestayMap = () => {

    //  const [checkIn, setCheckIn] = useState(null);
      // const [checkOut, setCheckOut] = useState(null);
      // const [priceRange, setPriceRange] = useState([50, 300]);
      // const [guests, setGuests] = useState(2);
    
      // const handleSearch = () => {
      //   console.log({
      //     checkIn,
      //     checkOut,
      //     priceRange,
      //     guests,
      //   });
      //   // You can call an API here
      // };

  const [homestays, setHomestays] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [selectedStay, setSelectedStay] = useState(null);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [userLocation, setUserLocation] = useState(null);
  const detailsRef = useRef(null);

  // Load CSV
  useEffect(() => {
    Papa.parse(require("../../components/DigitalNomads/digital_nomad_homestays_enriched_sample.csv"), {
      download: true,
      header: true,
      complete: (result) => {
        const cleaned = result.data
          .map((row) => ({
            ...row,
            latitude: parseFloat(row.latitude),
            longitude: parseFloat(row.longitude),
            price: row.price || "$50/nightff"+row.image,
            images: row.image ? row.image.split(";") : [],
          }))
          .filter((row) => !isNaN(row.latitude) && !isNaN(row.longitude));

        setHomestays(cleaned);

        const uniqueCountries = [
          "All",
          ...Array.from(new Set(cleaned.map((row) => row.country))).sort(),
        ];
        setCountries(uniqueCountries);
      },
    });
  }, []);

  // Get user GPS location
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setUserLocation([pos.coords.latitude, pos.coords.longitude]);
        },
        (err) => {
          console.error("Geolocation error:", err);
          // fallback if denied
          setUserLocation([28.6139, 77.209]); // New Delhi
        }
      );
    } else {
      setUserLocation([28.6139, 77.209]); // fallback
    }
  }, []);

  const handleViewDetails = (stay) => {
    setSelectedStay(stay);
    if (detailsRef.current) {
      detailsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredHomestays =
    selectedCountry === "All"
      ? homestays
      : homestays.filter((stay) => stay.country === selectedCountry);

  return (
    <div
      className="map-page"
      style={{ display: "flex", flexDirection: "column", width: "100%" }}
    >
    <div className="filter-bar">
      {/* Country Filter */}
      <div style={{ padding: "10px", background: "#f0f0f0" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>
          Filter by Country:
        </label>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          style={{
            padding: "6px",
            borderRadius: "6px",
            border: "1px solid #ccc",
          }}
        >
          {countries.map((country, idx) => (
            <option key={idx} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>
          <div className="filter-group">
            <label htmlFor="checkin">Check-in</label>
            <input type="date" id="checkin" name="checkin" />
          </div>
          <div className="filter-group">
            <label htmlFor="checkout">Check-out</label>
            <input type="date" id="checkout" name="checkout" />
          </div>
          <div className="filter-group">
            <label htmlFor="persons">Persons</label>
            <select id="persons" name="persons">
              <option value={1}>1 Person</option>
              <option value={2}>2 Persons</option>
              <option value={3}>3 Persons</option>
              <option value="4+">4+ Persons</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Price Range</label>
            <div className="price-range">
              <input type="number" placeholder="Min $" min={0} />
              <input type="number" placeholder="Max $" min={0} />
            </div>
          </div>
          <button className="filter-btn">Search</button>
        </div>
      

      {/* Map */}
      <MapContainer
        center={userLocation || [20, 0]}
        zoom={userLocation ? 5 : 2}
        style={{ height: "60vh", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {/* Show user marker */}
        {userLocation && (
          <Marker
            position={userLocation}
            icon={L.icon({
              iconUrl:
                "https://cdn-icons-png.flaticon.com/512/64/64113.png", // person icon
              iconSize: [32, 32],
            })}
          >
            <Popup>You are here 📍</Popup>
          </Marker>
        )}

        {filteredHomestays.map((stay, idx) => {
          let distance = "Detecting...";
          if (userLocation) {
            distance = getDistance(
              userLocation[0],
              userLocation[1],
              stay.latitude,
              stay.longitude
            );
          }
          return (
            <Marker
              key={idx}
              position={[stay.latitude, stay.longitude]}
              icon={L.icon({
                iconUrl:
                  "https://cdn-icons-png.flaticon.com/512/684/684908.png",
                iconSize: [32, 32],
              })}
              eventHandlers={{
                click: () =>
                  setSelectedRoute({
                    from: userLocation,
                    to: [stay.latitude, stay.longitude],
                  }),
              }}
            >
              <Popup maxWidth={300}>
                <h3>{stay.name}</h3>
                <Carousel
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop
                  autoPlay
                  interval={3000}
                >
                  {stay.images.length > 0 ? (
                    stay.images.map((img, i) => (
                        
                      <div key={i}>{img}
                        <img 
                          src={img}
                          alt={`stay-${i}`}
                          style={{
                            width: "100%",
                            height: "180px",
                            objectFit: "cover",
                            borderRadius: "8px",
                          }}
                        ></img>
                      </div>
                    ))
                  ) : (
                    // <img
                    //   src="../assets/Destination1.png"
                    //   alt={stay.images}
                    // />
                    <img src={require('../../assets/beachtrip.webp')} alt="Beach Trip" />
                  )}
                </Carousel>
                <p>
                  {stay.city}, {stay.country}
                </p>
                <p>
                  <strong>Price:</strong> {stay.price}
                </p>
                <p>
                  <strong>Distance from you:</strong> {distance} km
                </p>
                <button
                  style={{
                    background: "green",
                    color: "white",
                    padding: "8px 14px",
                    border: "none",
                    borderRadius: "6px",
                    marginTop: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleViewDetails(stay)}
                >
                  View More Details
                </button>
              </Popup>
            </Marker>
          );
        })}

        {selectedRoute && userLocation && (
          <AnimatedRoute from={selectedRoute.from} to={selectedRoute.to} />
        )}
      </MapContainer>

      {/* Details Section */}
      {selectedStay && (
        <div
          ref={detailsRef}
          style={{
            padding: "20px",
            background: "#f9f9f9",
            marginTop: "10px",
          }}>
          <h2>{selectedStay.name}</h2>
          <Carousel showThumbs infiniteLoop autoPlay interval={4000}>
            {selectedStay.images.length > 0 ? (
              selectedStay.images.map((img, i) => (
                <div key={i}>
                  <img
                    src={img}
                    alt={`stay-${i}`}
                    style={{
                      width: "100%",
                      height: "400px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                  />
                </div>
              ))
            ) : (
            //   <img
            //     src="https://via.placeholder.com/800x400"
            //     alt="placeholderdd"
            //   />
            <img src={require('../../assets/beachtrip.webp')} alt="Beach Trip" />
            )}
          </Carousel>
          <p>
            <strong>City:</strong> {selectedStay.city}, {selectedStay.country}
          </p>
          <p>
            <strong>Price:</strong> {selectedStay.price}
          </p>
          <p>
            <strong>Facilities:</strong> {selectedStay.facilities}
          </p>
          <p>
            <strong>Contact:</strong> {selectedStay.email || "N/A"} |{" "}
            {selectedStay.contact || "N/A"}
          </p>
        </div>
      )}
    </div>
  );
};

export default HomestayMap;
