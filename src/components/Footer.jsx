import React from 'react';
import logo2 from '../assets/images/ataa-logo-white.png';
import { FaRegCalendarAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../assets/Styles/Style.css';
import { useState } from 'react';


function Footer() {

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };
    const [subscribeEmail, setSubscribeEmail] = useState('');
    const [subscribeError, setSubscribeError] = useState('');

    const validateEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };



    return (
        <footer className="footer pt-5">
            <div className="container py-5 mt-5">
                <div className="row gy-4 ">
                    {/* Column 1 */}
                    <div className="col-lg-4 d-flex flex-column align-items-center align-items-lg-start">
                        <img src={logo2} alt="logo" className="mb-5" height={70} width={280} />
                        <p className="mt-0">
                            Righteous indignation and dislike men who <br />
                            are so beguiled and demoralized by the <br />
                            charm of pleasure of the moment so blinded.
                        </p>
                        {/* Carousel */}
                        <div id="eventCarousel" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner p-3 rounded mt-4">
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
                    <div className=" col-lg-4 d-flex flex-column align-items-center align-items-lg-start">
                        <h5 className="fw-bold mb-3 mt-3 text-white">Useful Links</h5>
                        <div className="row ">
                            <div className="col-6 ">
                                <ul className="list-unstyled footer-links lh-base mt-4 text-nowrap">
                                    <li><a href="#departments" onClick={(e) => handleNavClick(e, 'departments')}>All Departments</a></li>
                                    <li><a href="#health" onClick={(e) => handleNavClick(e, 'health')}>Health & Medical</a></li>
                                    <li><a href="#housing" onClick={(e) => handleNavClick(e, 'housing')}>Housing & Land</a></li>
                                    <li><a href="#policing" onClick={(e) => handleNavClick(e, 'policing')}>Policing & Crime</a></li>
                                    <li><a href="#overlay" onClick={(e) => handleNavClick(e, 'overlay')}>Title Overlay</a></li>
                                    <li><a href="#policing" onClick={(e) => handleNavClick(e, 'policing')}>Policing & Crime</a></li>
                                    <li><a href="#overlay" onClick={(e) => handleNavClick(e, 'overlay')}>Title Overlay</a></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul className="list-unstyled footer-links lh-base mt-4 ms-5 ">
                                    <li><a href="" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                                    <li><a href="" onClick={(e) => handleNavClick(e, 'service')}>Services</a></li>
                                    <li><a href="" onClick={(e) => handleNavClick(e, 'team')}>Our Team</a></li>
                                    <li><a href="" onClick={(e) => handleNavClick(e, 'news')}>News</a></li>
                                    <li><a href="" onClick={(e) => handleNavClick(e, 'contact')}>ContactUs</a></li>
                                    <li><a href="" onClick={(e) => handleNavClick(e, 'blog')}>Blogs</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Recent News & Subscribe */}
                    <div className="col-lg-4 d-flex flex-column align-items-center align-items-lg-start ">
                        <h5 className="fw-bold mb-3 mt-2 lh-lg text-white">Recent News</h5>
                        <div className="d-flex mb-3 mt-2 pt-3">
                            <div className="bg-danger text-white text-center px-3 me-3 rounded">
                                <div className="fw-bold fs-5 mt-2">11</div>
                                <div className="small">SEP’22</div>
                            </div>
                            <div>
                                <p className="mb-0 fw-bold text-white">Get The Tickets for Newyear <br /> Celebration</p>
                                <small className="text-muted">By Admin</small>
                            </div>
                        </div>
                        <div className="d-flex mb-4 mt-4">
                            <div className="bg-danger text-white text-center px-3 me-3 rounded">
                                <div className="fw-bold fs-5 mt-2">11</div>
                                <div className="small">SEP’22</div>
                            </div>
                            <div>
                                <p className="mb-0 fw-bold text-white">Outdoor Dining to Extended <br />this Summer</p>
                                <small className="text-muted">By Admin</small>
                            </div>
                        </div>

                        <div className='mt-4'>
                            <p className=''>Subscribe us & Get Updates in Your Inbox</p>
                            <div className="input-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Your email ..."
                                    value={subscribeEmail}
                                    onChange={(e) => {
                                        setSubscribeEmail(e.target.value);
                                        setSubscribeError(""); // clear on change
                                    }}
                                />
                                <button
                                    className="btn btn-danger"
                                    onClick={() => {
                                        if (!validateEmail(subscribeEmail)) {
                                            setSubscribeError("Please enter a valid email address.");
                                        } else {
                                            setSubscribeError("");
                                            alert("Subscribed successfully!"); // or call your API here
                                            setSubscribeEmail('');
                                        }
                                    }}
                                >
                                    Subscribe
                                </button>
                            </div>
                            {subscribeError && <small className="text-danger">{subscribeError}</small>}

                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center py-4 border-top border-secondary">
                <small>
                    © {new Date().getFullYear()} By <span className="text-danger">Whitehall City Govt.</span> All Rights Reserved.
                </small>
            </div>

        </footer>
    );
}

export default Footer;
