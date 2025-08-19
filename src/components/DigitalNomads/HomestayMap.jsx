import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Papa from "papaparse";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Default marker fix
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const HomestayMap = () => {
  const [homestays, setHomestays] = useState([]);
  const [filteredHomestays, setFilteredHomestays] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("All");

  useEffect(() => {
    Papa.parse(require("../../components/DigitalNomads/digital_nomad_homestays_enriched_sample.csv"), {
      download: true,
      header: true,
      complete: (result) => {
        const data = result.data.filter(
          (h) => h.latitude && h.longitude && !isNaN(h.latitude)
        );
        setHomestays(data);
        setFilteredHomestays(data);

        // extract unique countries
        const uniqueCountries = [
          "All",
          ...new Set(data.map((h) => h.country).filter(Boolean)),
        ];
        setCountries(uniqueCountries);
      },
    });
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);

    if (country === "All") {
      setFilteredHomestays(homestays);
    } else {
      setFilteredHomestays(
        homestays.filter((h) => h.country === country)
      );
    }
  };

  return (
    <div className="map-container">
      {/* Sidebar Filters */}
      <aside className="sidebar">
        <div className="filter-group">
          <label htmlFor="country">Filter by Country</label>
          <select
            id="country"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {countries.map((c, idx) => (
              <option key={idx} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
      </aside>

      {/* Map */}
      <div className="map-section">
        <MapContainer
          center={[20, 0]}
          zoom={2}
          style={{ height: "500px", width: "100%" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://osm.org">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredHomestays.map((h, idx) => (
            <Marker
              key={idx}
              position={[parseFloat(h.latitude), parseFloat(h.longitude)]}
            >
              <Popup>
                <div className="popup-card">
                  <h3>{h.name}</h3>
                  <p>
                    {h.city}, {h.country}
                  </p>

                  {/* Image slider (if multiple images separated by ;) */}
                  {h.images &&
                    h.images.split(";").map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={h.name}
                        className="popup-img"
                        style={{ width: "100%", borderRadius: "8px", marginBottom: "6px" }}
                      />
                    ))}

                  {h.email && <p>📧 {h.email}</p>}
                  {h.phone && <p>📞 {h.phone}</p>}

                  {/* Buttons */}
                  <button
                    className="book-btn"
                    onClick={() => {
                      if (h.website) {
                        window.open(h.website, "_blank");
                      } else if (h.email) {
                        window.location.href = `mailto:${h.email}`;
                      } else if (h.phone) {
                        window.location.href = `tel:${h.phone}`;
                      } else {
                        alert("No booking contact available");
                      }
                    }}
                  >
                    📅 Book Now
                  </button>

                  <button
                    className="details-btn"
                    onClick={() => alert(`View more details for ${h.name}`)}
                  >
                    🔎 View More Details
                  </button>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>

      <style>{`
        .map-container {
          display: flex;
          flex-direction: row;
          gap: 16px;
          margin: 16px 0;
        }
        .sidebar {
          width: 250px;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 10px;
          background: #f9f9f9;
          height: fit-content;
        }
        .filter-group {
          margin-bottom: 12px;
          display: flex;
          flex-direction: column;
        }
        .map-section {
          flex: 1;
        }
        .popup-card {
          text-align: center;
          max-width: 250px;
        }
        .popup-img {
          margin-top: 6px;
          border-radius: 6px;
        }
        .book-btn {
          margin-top: 8px;
          background: #28a745;
          color: white;
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }
        .book-btn:hover {
          background: #218838;
        }
        .details-btn {
          margin-top: 8px;
          background: #007bff;
          color: white;
          padding: 6px 12px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }
        .details-btn:hover {
          background: #0056b3;
        }
        @media (max-width: 768px) {
          .map-container {
            flex-direction: column;
          }
          .sidebar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HomestayMap;
