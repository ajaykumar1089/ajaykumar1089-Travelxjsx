import React from 'react';
import "./DigitalNomads.css";

const DigitalNomads = () => {
    return (
       <div>
        <main>
            <div className="page-container">
                {/* Sidebar Filters */}
                <aside className="sidebar">
                    <div className="filter-group">
                        <label>Destination(Digital Nomad)</label>
                        <input type="text" placeholder="e.g. Berlin" />
                    </div>
                    <button className="search-btn">Search</button>
                    <h3>Filter Tours</h3>
                    <div className="filter-group">
                        <label htmlFor="duration">Duration</label>
                        <select id="duration">
                            <option>Any</option>
                            <option>1–3 Days</option>
                            <option>4–7 Days</option>
                            <option>8–14 Days</option>
                            <option>15+ Days</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <label htmlFor="departure">Departure Month</label>
                        <select id="departure">
                            <option>Any</option>
                            <option>August 2025</option>
                            <option>September 2025</option>
                        </select>
                    </div>
                    <div className="filter-group">
                        <label>Price (USD)</label>
                        <input type="number" placeholder="Min" />
                        <input type="number" placeholder="Max" style={{ marginTop: '8px' }} />
                    </div>
                    <div className="filter-group">
                        <label htmlFor="age">Age Group</label>
                        <select>
                            <option>Any</option>
                            <option>18–30</option>
                            <option>30–50</option>
                            <option>50+</option>
                        </select>
                    </div>
                    <div className="filter-group checkbox-group">
                        <label>Activities</label>
                        <label><input type="checkbox" /> Hiking</label>
                        <label><input type="checkbox" /> Sightseeing</label>
                        <label><input type="checkbox" /> Wine Tasting</label>
                    </div>
                    <div className="filter-group checkbox-group">
                        <label>Accommodation</label>
                        <label><input type="checkbox" /> Budget</label>
                        <label><input type="checkbox" /> Medium</label>
                        <label><input type="checkbox" /> Premium</label>
                    </div>
                </aside>
                {/* Main Content */}
                <div className="main-content">
                    <div className="tour-listing">
                        <a href="DigitalNomadsJobs.html" className="nomad-job-btn">Need Digital Nomad Job? Click Here</a>
                        <a href="DigitalNomadsCountriesVisaDetails.html" className="nomad-job-btn">View Countries Providing Digital Nomad Visa</a>
                    </div>
                    {/* Tour Listings */}
                    <div className="tour-listing">
                        <div className="tour-card">
                            <div className="about-text">
                                <h2>About Digital Nomads</h2>
                                <p>Digital Nomads are remote professionals who travel the world while working online. They choose freedom
                                    over routine and often work from beaches, mountains, cafés, or co-working spaces. All they need is a
                                    stable internet connection and a passion for adventure.</p>
                                <ul className="nomad-benefits">
                                    <li>🌐 Work from anywhere in the world</li>
                                    <li>💻 Flexible jobs, remote teams, and passive income</li>
                                    <li>🏡 Stay in unique homestays or co-living spaces</li>
                                    <li>✈️ Travel while you earn</li>
                                    <li>👥 Join global digital nomad communities</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="tour-listing">
                        <div className="tour-card">
                            <a href="JoinTravellersGroup.html">
                                <img src="https://picsum.photos/id/1015/600/400" alt="Tour 1" />
                                <div className="info">
                                    <h4>Best of Germany Tour</h4>
                                    <div className="meta">12 Days · Max 30 People</div>
                                    <div className="price">From $2,540</div>
                                </div>
                                <section className="map-list-section">
                                    <div className="map-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3738026319794!2d144.95743221570534!3d-37.816382979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c6335123bc1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510919093301" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="tour-list">
                                        <ul>
                                            <li><strong>Europe Highlights</strong><br />Berlin → Dresden → Munich → Frankfurt</li>
                                            <li><strong>Best of Germany</strong><br />Berlin → Hamburg → Cologne → Rothenburg</li>
                                            <li><strong>Bavarian Alps Adventure</strong><br />Munich → Füssen → Garmisch → Berchtesgaden</li>
                                        </ul>
                                    </div>
                                </section>
                            </a><a href="PlanDetails.html" className="text-indigo-600 font-semibold hover:underline">
                                View Plans
                            </a>
                        </div>
                        <div className="tour-card">
                            <a href="JoinTravellersGroup.html">
                                <img src="https://picsum.photos/id/1021/600/400" alt="Tour 2" />
                                <div className="info">
                                    <h4>Bavarian Alps Adventure</h4>
                                    <div className="meta">8 Days · Max 25 People</div>
                                    <div className="price">From $1,870</div>
                                </div>
                                <section className="map-list-section">
                                    <div className="map-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3738026319794!2d144.95743221570534!3d-37.816382979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c6335123bc1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510919093301" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="tour-list">
                                        <ul>
                                            <li><strong>Europe Highlights</strong><br />Berlin → Dresden → Munich → Frankfurt</li>
                                            <li><strong>Best of Germany</strong><br />Berlin → Hamburg → Cologne → Rothenburg</li>
                                            <li><strong>Bavarian Alps Adventure</strong><br />Munich → Füssen → Garmisch → Berchtesgaden</li>
                                        </ul>
                                    </div>
                                </section>
                            </a><a href="PlanDetails.html" className="text-indigo-600 font-semibold hover:underline">
                                View Plans
                            </a>
                        </div>
                        <div className="tour-card">
                            <a href="JoinTravellersGroup.html">
                                <img src="https://picsum.photos/id/1015/600/400" alt="Tour 1" />
                                <div className="info">
                                    <h4>Best of Germany Tour</h4>
                                    <div className="meta">12 Days · Max 30 People</div>
                                    <div className="price">From $2,540</div>
                                </div>
                                <section className="map-list-section">
                                    <div className="map-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3738026319794!2d144.95743221570534!3d-37.816382979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c6335123bc1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510919093301" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="tour-list">
                                        <ul>
                                            <li><strong>Europe Highlights</strong><br />Berlin → Dresden → Munich → Frankfurt</li>
                                            <li><strong>Best of Germany</strong><br />Berlin → Hamburg → Cologne → Rothenburg</li>
                                            <li><strong>Bavarian Alps Adventure</strong><br />Munich → Füssen → Garmisch → Berchtesgaden</li>
                                        </ul>
                                    </div>
                                </section>
                            </a><a href="PlanDetails.html" className="text-indigo-600 font-semibold hover:underline">
                                View Plans
                            </a>
                        </div>
                    </div>
                    <div className="tour-listing">
                        <div className="tour-card">
                            <a href="JoinTravellersGroup.html">
                                <img src="https://picsum.photos/id/1015/600/400" alt="Tour 1" />
                                <div className="info">
                                    <h4>Best of Germany Tour</h4>
                                    <div className="meta">12 Days · Max 30 People</div>
                                    <div className="price">From $2,540</div>
                                </div>
                                <section className="map-list-section">
                                    <div className="map-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3738026319794!2d144.95743221570534!3d-37.816382979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c6335123bc1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510919093301" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="tour-list">
                                        <ul>
                                            <li><strong>Europe Highlights</strong><br />Berlin → Dresden → Munich → Frankfurt</li>
                                            <li><strong>Best of Germany</strong><br />Berlin → Hamburg → Cologne → Rothenburg</li>
                                            <li><strong>Bavarian Alps Adventure</strong><br />Munich → Füssen → Garmisch → Berchtesgaden</li>
                                        </ul>
                                    </div>
                                </section>
                            </a><a href="PlanDetails.html" className="text-indigo-600 font-semibold hover:underline">
                                View Plans
                            </a>
                        </div>
                        <div className="tour-card">
                            <a href="JoinTravellersGroup.html">
                                <img src="https://picsum.photos/id/1021/600/400" alt="Tour 2" />
                                <div className="info">
                                    <h4>Bavarian Alps Adventure</h4>
                                    <div className="meta">8 Days · Max 25 People</div>
                                    <div className="price">From $1,870</div>
                                </div>
                                <section className="map-list-section">
                                    <div className="map-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3738026319794!2d144.95743221570534!3d-37.816382979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c6335123bc1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510919093301" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="tour-list">
                                        <ul>
                                            <li><strong>Europe Highlights</strong><br />Berlin → Dresden → Munich → Frankfurt</li>
                                            <li><strong>Best of Germany</strong><br />Berlin → Hamburg → Cologne → Rothenburg</li>
                                            <li><strong>Bavarian Alps Adventure</strong><br />Munich → Füssen → Garmisch → Berchtesgaden</li>
                                        </ul>
                                    </div>
                                </section>
                            </a><a href="PlanDetails.html" className="text-indigo-600 font-semibold hover:underline">
                                View Plans
                            </a>
                        </div>
                        <div className="tour-card">
                            <a href="JoinTravellersGroup.html">
                                <img src="https://picsum.photos/id/1015/600/400" alt="Tour 1" />
                                <div className="info">
                                    <h4>Best of Germany Tour</h4>
                                    <div className="meta">12 Days · Max 30 People</div>
                                    <div className="price">From $2,540</div>
                                </div>
                                <section className="map-list-section">
                                    <div className="map-container">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3738026319794!2d144.95743221570534!3d-37.816382979751504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772c6335123bc1!2sFederation+Square!5e0!3m2!1sen!2sau!4v1510919093301" allowFullScreen>
                                        </iframe>
                                    </div>
                                    <div className="tour-list">
                                        <ul>
                                            <li><strong>Europe Highlights</strong><br />Berlin → Dresden → Munich → Frankfurt</li>
                                            <li><strong>Best of Germany</strong><br />Berlin → Hamburg → Cologne → Rothenburg</li>
                                            <li><strong>Bavarian Alps Adventure</strong><br />Munich → Füssen → Garmisch → Berchtesgaden</li>
                                        </ul>
                                    </div>
                                </section>
                            </a><a href="PlanDetails.html" className="text-indigo-600 font-semibold hover:underline">
                                View Plans
                            </a>
                        </div>
                    </div>
                </div>
            </div>
     </main>
     </div>
    );
};

export default DigitalNomads;