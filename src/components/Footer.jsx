import React from 'react';
import logo from '../assets/images/logo.png';
import '../Styles/Footer.css';

function Footer() {
    return (
        <footer className="footer text-white py-5">
            <div className="container py-5">
                <div className="row gy-4">
                    {/* Column 1: Logo & About */}
                    <div className="col-lg-4">
                        <img src={logo} alt="logo" className="mb-3" height={50} />
                        <p className="">
                            Righteous indignation and dislike men who are so beguiled and demoralized by the charm of pleasure of the moment so blinded.
                        </p>

                        {/* Event Slider */}
                        <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner bg-dark p-3 rounded">
                                <div className="carousel-item active">
                                    <p className="mb-1"><i className="bi bi-calendar-event"></i> September 11, 2022</p>
                                    <p className="mb-0">New year celebration by the charm pleasure of the moment and trouble are bound to ensue…</p>
                                </div>
                                <div className="carousel-item">
                                    <p className="mb-1"><i className="bi bi-calendar-event"></i> September 12, 2022</p>
                                    <p className="mb-0">Outdoor concert series continues with local jazz bands…</p>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            </button>
                        </div>
                    </div>

                    {/* Column 2: Useful Links */}
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3">Useful Links</h5>
                        <div className="row">
                            <div className="col-6">
                                <ul className="list-unstyled footer-links">
                                    <li><a href="#">All Departments</a></li>
                                    <li><a href="#">Health & Medical</a></li>
                                    <li><a href="#">Housing & Land</a></li>
                                    <li><a href="#">Policing & Crime</a></li>
                                    <li><a href="#">Title Overlay</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled footer-links">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">Our FAQ’s</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Blog Grid</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Recent News & Subscribe */}
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3">Recent News</h5>
                        <div className="d-flex mb-3">
                            <div className="bg-danger text-white text-center px-2 me-3">
                                <div className="fw-bold fs-5">11</div>
                                <div className="small">SEP’22</div>
                            </div>
                            <div>
                                <p className="mb-0 fw-bold">Get The Tickets for Newyear Celebration</p>
                                <small className="text-muted">By Admin</small>
                            </div>
                        </div>
                        <div className="d-flex mb-4">
                            <div className="bg-danger text-white text-center px-2 me-3">
                                <div className="fw-bold fs-5">11</div>
                                <div className="small">SEP’22</div>
                            </div>
                            <div>
                                <p className="mb-0 fw-bold">Outdoor Dining to be Extended this Summer</p>
                                <small className="text-muted">By Admin</small>
                            </div>
                        </div>

                        {/* Subscribe */}
                        <div>
                            <p>Subscribe us & Get Updates in Your Inbox</p>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Your email ..." />
                                <button className="btn btn-danger">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center py-3 mt-4 border-top border-secondary">
                <small>© 2022 By <span className="text-danger">Whitehall City Govt.</span> All Rights Reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
