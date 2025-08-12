import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import "./Jointravellersgroup.css"

// Fix for missing marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

const MapWithPolyline = () => {
    // Example route locations
    const locations = [
        { name: 'Paris', position: [48.8566, 2.3522] },
        { name: 'Berlin', position: [52.52, 13.4050] },
        { name: 'Prague', position: [50.0755, 14.4378] },
        { name: 'Vienna', position: [48.2082, 16.3738] },
    ];

    // Extract just the positions for polyline
    const route = locations.map((loc) => loc.position);

    return (

        <>
            <div>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
            </div>
            <div>
                <main>
                    <div className="main-content container">
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
                        <div className="fixed-box">
                            <div className="booking-box">
                                <h2>
                                    <div className="date-range">
                                        <strong><i className="fas fa-calendar-alt" /></strong>
                                        Start: <span id="start-date">2025-08-10</span><br />
                                        End: <span id="end-date">2025-08-20</span>
                                    </div>
                                    <div className="price">
                                        <strong>Total Price:</strong> ₹42,000
                                        <strong>Join with just 20% deposit</strong>
                                    </div>
                                </h2>
                                <button className="green-glow-button">Reserve Spot</button>
                                <div className="price">
                                    <strong>1 Spot Left</strong><br />
                                    Free 7 Days Cancellation
                                </div>
                            </div>
                        </div>
                        <div className="main-content container">
                            <section className="section">
                                <h2>Trip Overview</h2>
                                <div className="info-cards">
                                    <div className="card"><strong>Host:</strong> Maria</div>
                                    <div className="card"><strong>Dates:</strong> 27 Jun&nbsp;2026 → 17 Jul&nbsp;2026</div>
                                    <div className="card"><strong>Duration:</strong> 21 days</div>
                                    <div className="card"><strong>Stops:</strong> 14</div>
                                    <div className="card"><strong>Group Size:</strong> 2–3 mates</div>
                                    <div className="card"><strong>Region:</strong> North America</div>
                                </div>
                            </section>
                            <section className="section">
                                <h2>Trip Leader</h2>
                                <div className="leader">
                                    <img src="https://randomuser.me/api/portraits/women/65.jpg" alt="Maria" />
                                    <div>
                                        <strong>Maria, 36</strong><br />
                                        Languages: English, (maybe German)
                                    </div>
                                </div>
                            </section>
                            <section className="section">
                                <h2>Highlights &amp; Included</h2>
                                <ul>
                                    <li>20 nights: motels, ranches, backcountry campsites.</li>
                                    <li>National Park &amp; camping fees, rental car + insurance + 2nd driver.</li>
                                    <li>Ferry crossings, camping equipment, bear spray &amp; safety instr.</li>
                                    <li>Day trip to Alaska, salmon run, glacier hikes, whale &amp; bear watching.</li>
                                    <li>WhatsApp group, packing list, flight assistance, pre‑planned itinerary.</li>
                                </ul>
                                <p><em>Excluded:</em> meals, drinks, gas, international flights, insurance, personal gear, visa, extra
                                    excursions.</p>
                            </section>
                            <section className="section">
                                <h2>Day‑by‑Day Itinerary</h2>
                                <div className="itinerary-day"><strong>Day&nbsp;1:</strong> Arrival in Vancouver &amp; orientation.</div>
                                <div className="itinerary-day"><strong>Day&nbsp;2–3:</strong> Drive to Jasper National Park – glacier hikes.</div>
                                <div className="itinerary-day"><strong>Day&nbsp;4–5:</strong> Explore Banff &amp; surrounding UNESCO sites.</div>
                                <div className="itinerary-day"><strong>Day&nbsp;6–7:</strong> Fishing, wildlife watching, village tours.</div>
                                <div className="itinerary-day"><strong>Day&nbsp;8:</strong> Day trip to Alaska (Hyder &amp; salmon run).</div>
                                <div className="itinerary-day"><strong>Day&nbsp;9:</strong> Return via Telegraph Cove &amp; Vancouver Island.</div>
                                {/* Add Day 10–21 similarly */}
                            </section>
                            <section className="section">
                                <h2>Trip Style &amp; Tags</h2>
                                <div className="badges">
                                    <span className="badge">Road Trip</span>
                                    <span className="badge">Adventure</span>
                                    <span className="badge">Nature</span>
                                    <span className="badge">Wildlife</span>
                                    <span className="badge">Sports</span>
                                    <span className="badge">Female Only</span>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default MapWithPolyline;
