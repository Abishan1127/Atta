import React from 'react';
import {
    FaPhone,
    FaClock,
    FaFacebookF,
    FaGoogle,
    FaInstagram,
    FaTwitter
} from 'react-icons/fa';
import logo from '../assets/images/logo.png';

const SocialIcon = ({ href, icon: Icon }) => (
    <a
        href={href}
        className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle custom-social-icon me-2"
    >
        <Icon />
    </a>
);

function Header() {
    return (
        <>
            {/* Top Header */}
            <header >
                   <div className="container bg-danger d-lg-flex justify-content-lg-between align-items-lg-center py-3 text-white">
                    {/* Left Side */}
                    <div>
                        <span className="ms-5">
                            <FaPhone className="me-1" /> +44-888-12-345
                        </span>
                        <span>
                            <FaClock className="ms-5" /> Today: 09.00 to 18.45
                        </span>
                    </div>

                    {/* Right Side */}
                    <div className="d-flex gap-5 ps-5">
                        <a href="#" className="text-white text-decoration-none">About Us</a>
                        <a href="#" className="text-white text-decoration-none">Faq’s</a>
                        <a href="#" className="text-white text-decoration-none">Contact</a>
                    </div>

                    {/* Social Icons */}
                    <div className="d-flex align-items-center gap-3 pe-5">
                        <SocialIcon href="#" icon={FaFacebookF} />
                        <SocialIcon href="#" icon={FaGoogle} />
                        <SocialIcon href="#" icon={FaInstagram} />
                        <SocialIcon href="#" icon={FaTwitter} />
                    </div>
                </div>
            

            {/* Navbar */}
            <nav className="navbar navbar-expand-lg bg-white border-bottom py-4">
                <div className="container">
                    {/* Logo */}
                    <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                        <img src={logo} alt="logo" style={{ height: '60px' }} className="me-2" />
                    </a>

                    {/* Toggle Button for Mobile */}
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Desktop Nav */}
                    <div className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold d-none d-lg-block">
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
                            <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="/service">Service</a></li>
                            <li className="nav-item"><a className="nav-link" href="/team">Team</a></li>
                            <li className="nav-item"><a className="nav-link" href="/news">News</a></li>
                            <li className="nav-item"><a className="nav-link" href="/testimonial">Testimonial</a></li>
                            <li className="nav-item"><a className="nav-link me-5" href="/footer">Footer</a></li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile Offcanvas Menu */}
            <div className="offcanvas offcanvas-start text-white" tabIndex="-1" id="mobileMenu" style={{ backgroundColor: '#0c0b16' }}>
                <div className="offcanvas-header border-bottom">
                    <img src={logo} alt="logo" style={{ height: '40px' }} />
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas-"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav text-uppercase fw-semibold">
                        <li className="nav-item">
                            <a className="custom-nav-link" href="/">Home</a>
                        </li>

                        <li className="nav-item"><a className="custom-nav-link" href="/service">Service</a></li>
                        <li className="nav-item"><a className="custom-nav-link" href="/team">Team</a></li>
                        <li className="nav-item"><a className="custom-nav-link" href="/news">News</a></li>
                        <li className="nav-item"><a className="custom-nav-link" href="/testimonial">Testimonial</a></li>
                        <li className="nav-item"><a className="custom-nav-link" href="/footer">Footer</a></li>
                    </ul>

                    {/* Contact Info */}
                    <div className="mt-5">
                        <h5 className="fw-bold">Contact Info</h5>
                        <p>Chicago 12, Melborne City, USA</p>
                        <p>+88–01682648101</p>
                        <p>info@example.com</p>
                        <div className="d-flex">
                            <SocialIcon href="#" icon={FaFacebookF} />
                            <SocialIcon href="#" icon={FaGoogle} />
                            <SocialIcon href="#" icon={FaInstagram} />
                            <SocialIcon href="#" icon={FaTwitter} />
                        </div>
                    </div>
                </div>
            </div>
            </header>
        </>
    );
}

export default Header;
