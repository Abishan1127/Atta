import React, { useState, useEffect } from 'react';
import '../assets/Styles/Style.css';
import { FaPhone, FaClock, FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../assets/images/logo1.png';

const SocialIcon = ({ href, icon: Icon }) => (
    <a
        href={href}
        className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle custom-social-icon me-2"
    >
        <Icon />
    </a>
);

function Header() {
    const [showTopHeader, setShowTopHeader] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setShowTopHeader(false);
            } else {
                setShowTopHeader(true);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="container-fluid d-md-flex flex-column p-0 transparent-navbar">
                <header>
                    {/* Top Header */}
                    <div className={`container bg-danger d-lg-flex py-3 text-white justify-content-between transition-top-header ${showTopHeader ? '' : 'hidden'}`}>
                        <div className='align-items-center justify-content-start'>
                            <span className="ms-5">
                                <FaPhone className="ms-5" /> +44-888-12-345
                            </span>
                            <span className="border-start ms-3">
                                <FaClock className="ms-3" /> Today: 09.00 to 18.45
                            </span>
                        </div>
                        <div className="d-flex justify-content-end gap-1 ps-5 me-5 align-items-center ">
                            <a href="#about" className="header-link me-4">About Us</a>
                            <a href="#faq" className="header-link me-4">FAQ’s</a>
                            <a href="#contact" className="header-link pe-4 border-end">Contact</a>
                            <SocialIcon href="#" icon={FaFacebookF} />
                            <SocialIcon href="#" icon={FaGoogle} />
                            <SocialIcon href="#" icon={FaInstagram} />
                            <SocialIcon href="#" icon={FaTwitter} />
                        </div>
                    </div>

                    {/* Your existing navbar and offcanvas here */}
                    <nav className={`navbar navbar-expand-lg bg-white border-bottom py-3 px-5 ${showTopHeader ? 'container' : 'container-fluid px-5'}`}>
                        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                            <img src={logo} alt="logo" style={{ height: '60px' }} className="ms-5" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold" id="navbarMenu">
                            <ul className="navbar-nav mb-2 mb-lg-0 gap-4 me-3">
                                <li className="nav-item"><a className="nav-link" href="#" data-target="home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#" data-target="service">Service</a></li>
                                <li className="nav-item"><a className="nav-link" href="#" data-target="team">Team</a></li>
                                <li className="nav-item"><a className="nav-link" href="#" data-target="news">News</a></li>
                                <li className="nav-item"><a className="nav-link" href="#" data-target="testimonial">Testimonial</a></li>
                                <li className="nav-item"><a className="nav-link" href="#" data-target="contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </nav>

                    {/* offcanvas stays same */}
                </header>
            </div>
        </>
    );
}

export default Header;
