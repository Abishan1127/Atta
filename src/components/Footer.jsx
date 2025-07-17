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
                        <img src={logo2} alt="logo" className="" height={70}  />
                        <p className="mt-3">
                            Righteous indignation and like <br />men who 
                            are so beguiled and <br /> demoralized by the
                            charm of<br /> pleasure of the moment so <br />
                             Righteous indignation and like 
                        </p>
                        
                    </div>

                    {/* Column 2: Useful Links */}
                    <div className=" col-lg-4 d-flex flex-column align-items-center align-items-lg-start">
                       
                       <div className='mt-4'>
                            <p className='mt-4'>Subscribe us & Get Updates in Your Inbox</p>
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

                    {/* Column 3: Recent News & Subscribe */}
                    <div className="col-lg-4 d-flex flex-column align-items-center align-items-lg-start ">
                  
                        <div className="d-flex mb-3 mt-2 pt-3">
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

                        
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="text-center py-4 border-top border-secondary">
                <small>
                    © {new Date().getFullYear()} By <span className="text-danger">Australian Tamil Accounting Association.</span> All Rights Reserved.
                </small>
            </div>

        </footer>
    );
}

export default Footer;
