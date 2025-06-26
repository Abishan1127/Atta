import React from 'react';
import logo2 from '../assets/images/logo2.png';
import { FaRegCalendarAlt } from 'react-icons/fa';
import '../assets/Styles/Style.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer pt-5">
            <div className="container py-5">
                <div className="row gy-4">
                    {/* Column 1: Logo & About */}
                    <div className="col-lg-4">
                        <img src={logo2} alt="logo" className="mb-3" height={80} width={300} />
                        <p className="mt-3">
                            Righteous indignation and dislike men who <br /> are so beguiled and demoralized by the <br /> charm of pleasure of the moment so blinded.
                        </p>

                        {/* Event Slider */}
                        <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner p-3 rounded mt-5">
                                <div className="carousel-item active">
                                    <p className="mb-1 d-flex align-items-center gap-2">
                                        <FaRegCalendarAlt /> September 11, 2022
                                    </p>
                                    <p className="mb-5 lh-lg">
                                        New year celebration by the charm pleasure of the moment and trouble are bound to pleasure of the moment
                                    </p>
                                </div>
                                <div className="carousel-item">
                                    <p className="mb-1 d-flex align-items-center gap-2">
                                        <FaRegCalendarAlt /> September 12, 2022
                                    </p>
                                    <p className="mb-5 lh-lg">
                                        Outdoor concert series continues with local jazz pleasure of the moment and trouble are pleasure of the
                                    </p>
                                </div>
                            </div>

                            {/* Bottom-left arrow controls */}
                            <div className="d-flex gap-0 position-absolute bottom-0 start-0 ms-3 mb-3">
                                <button className="btn btn-sm rounded-circle" type="button" data-bs-target="#eventCarousel" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" style={{ filter: 'invert(0)' }}></span>
                                </button>
                                <button className="btn btn-sm rounded-circle" type="button" data-bs-target="#eventCarousel" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" style={{ filter: 'invert(0)' }}></span>
                                </button>
                            </div>
                        </div>


                    </div>

                    {/* Column 2: Useful Links */}
                    <div className="col-lg-4 ">
                        <h5 className="fw-bold mb-3 mt-3 text-white">Useful Links</h5>
                        <div className="row">
                            <div className="col-6">
                                <ul className="list-unstyled footer-links lh-lg mt-5 ">
                                    <li><a href="#">All Departments</a></li>
                                    <li><a href="#">Health & Medical</a></li>
                                    <li><a href="#">Housing & Land</a></li>
                                    <li><a href="#">Policing & Crime</a></li>
                                    <li><a href="#">Title Overlay</a></li>
                                    <li><a href="#">Policing & Crime</a></li>
                                    <li><a href="#">Title Overlay</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled footer-links lh-lg mt-5">
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Our FAQ’s</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Blog Grid</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Recent News & Subscribe */}
                    <div className="col-lg-4">
                        <h5 className="fw-bold mb-3 mt-2 lh-lg text-white">Recent News</h5>
                        <div className="d-flex mb-3">
                            <div className="bg-danger text-white text-center px-2 me-3 rounded">
                                <div className="fw-bold fs-5 mt-2">11</div>
                                <div className="small">SEP’22</div>
                            </div>
                            <div>
                                <p className="mb-0 fw-bold text-white">Get The Tickets for Newyear <br /> Celebration</p>
                                <small className="text-muted">By Admin</small>
                            </div>
                        </div>
                        <div className="d-flex mb-4 mt-5">
                            <div className="bg-danger text-white text-center px-2 me-3 rounded">
                                <div className="fw-bold fs-5 mt-2">11</div>
                                <div className="small">SEP’22</div>
                            </div>
                            <div>
                                <p className="mb-0 fw-bold text-white">  Outdoor Dining to be Extended <br />this Summer</p>
                                <small className="text-muted">By Admin</small>
                            </div>
                        </div>

                        {/* Subscribe */}
                        <div className='mt-5'>
                            <p className=''>Subscribe us & Get Updates in Your Inbox</p>
                            <div className="input-group">
                                <input type="email" className="form-control" placeholder="Your email ..." />
                                <button className="btn btn-danger">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Text */}
            <div className="text-center py-4 border-top border-secondary">
                <small>© 2022 By <span className="text-danger">Whitehall City Govt.</span> All Rights Reserved.</small>
            </div>
        </footer>
    );
}

export default Footer;
