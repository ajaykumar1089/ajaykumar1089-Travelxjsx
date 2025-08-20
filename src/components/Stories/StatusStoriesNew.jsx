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
import "./StatusStoriesNew.css"
import StatusCircle from "./StatusCircle";

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

const StatusSroriesNew = () => {

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
            price: row.price || "$50/nightff" + row.image,
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
      window.scrollTo(0, document.body.scrollHeight);
      detailsRef.current.scrollIntoView({ behavior: "smooth" });

    }
  };

  const filteredHomestays =
    selectedCountry === "All"
      ? homestays
      : homestays.filter((stay) => stay.country === selectedCountry);

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
          style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <div className="filter-bar">
            <StatusCircle />
          </div>
          <div className="main-content container">
            <div className="container">

              <h1>Inspiring Travel Stories</h1>
              <div className="story">
                <img src={require('../../assets/beachtrip.webp')} alt="Beach Trip" />
                <div className="story-content">
                  <h2>Finding Peace in Bali</h2>
                  <p>After months of burnout, I took a solo trip to Bali. From morning yoga sessions to evening sunsets by the
                    beach, I rediscovered myself one sunrise at a time. A journey that changed everything.</p>
                </div>
              </div>
              <div className="story">
                <img src={require('../../assets/mountainadventure.webp')} alt="Mountain Adventure" />
                <div className="story-content">
                  <h2>Climbing the Andes</h2>
                  <p>Trekking through the Andes was both a challenge and a revelation. The thin air, snow-capped views, and
                    moments of solitude gave me a new perspective on endurance and beauty.</p>
                </div>
              </div>
              <div className="story">
                <img src={require('../../assets/europeancity.webp')} alt="European City" />
                <div className="story-content">
                  <h2>Wandering in Prague</h2>
                  <p>Wandering aimlessly through the cobbled streets of Prague, I stumbled upon hidden jazz clubs, fairytale
                    architecture, and the kindness of strangers. Every turn felt like a scene from a movie.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        </div>
      </div>
    </>
  );
};

export default StatusSroriesNew;