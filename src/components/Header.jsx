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
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Header() {
    return (
        <header>
            {/*Top header */}
            <div className='container'>

                <div className="bg-danger text-white py-2">
                    <div className="container d-lg-flex justify-content-lg-between align-items-lg-center py-1">
                        {/* Left Side */}
                        <div>
                            <span className="ms-5"><FaPhone className="me-1" /> +44-888-12-345</span>
                            <span><FaClock className="ms-5" /> Today: 09.00 to 18.45</span>
                        </div>

                        {/* Right Side */}
                        <div className="d-flex gap-5 ">
                            <a href="#" className="text-white text-decoration-none link-underline-hover">About Us</a>
                            <a href="#" className="text-white text-decoration-none link-underline-hover">Faq’s</a>
                            <a href="#" className="text-white text-decoration-none link-underline-hover">Contact</a>
                        </div>
                        <div className='d-flex align-items-center gap-3 pe-5'>
                            <a href="#" className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle"
                                style={{ width: '30px', height: '30px', transition: '0.3s' }}
                                onMouseEnter={e => {
                                    e.currentTarget.classList.replace('bg-secondary', 'bg-white');
                                    e.currentTarget.classList.replace('text-white', 'text-dark');
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.classList.replace('bg-white', 'bg-secondary');
                                    e.currentTarget.classList.replace('text-dark', 'text-white');
                                }}
                            >
                                <FaFacebookF />
                            </a>

                            <a href="#" className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle"
                                style={{ width: '30px', height: '30px', transition: '0.3s' }}
                                onMouseEnter={e => {
                                    e.currentTarget.classList.replace('bg-secondary', 'bg-white');
                                    e.currentTarget.classList.replace('text-white', 'text-dark');
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.classList.replace('bg-white', 'bg-secondary');
                                    e.currentTarget.classList.replace('text-dark', 'text-white');
                                }}
                            >
                                <FaGoogle />
                            </a>

                            <a href="#" className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle"
                                style={{ width: '30px', height: '30px', transition: '0.3s' }}
                                onMouseEnter={e => {
                                    e.currentTarget.classList.replace('bg-secondary', 'bg-white');
                                    e.currentTarget.classList.replace('text-white', 'text-dark');
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.classList.replace('bg-white', 'bg-secondary');
                                    e.currentTarget.classList.replace('text-dark', 'text-white');
                                }}
                            >
                                <FaInstagram />
                            </a>

                            <a href="#" className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle"
                                style={{ width: '30px', height: '30px', transition: '0.3s' }}
                                onMouseEnter={e => {
                                    e.currentTarget.classList.replace('bg-secondary', 'bg-white');
                                    e.currentTarget.classList.replace('text-white', 'text-dark');
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.classList.replace('bg-white', 'bg-secondary');
                                    e.currentTarget.classList.replace('text-dark', 'text-white');
                                }}
                            >
                                <FaTwitter />
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            {/*  Navbar */}
            <div className='container'>
                <nav className="navbar navbar-expand-lg bg-white border-bottom py-4">
                    <div className="container">
                        {/* Logo */}
                        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                            <img src={logo} alt="logo" style={{ height: '40px' }} className="me-2" />
                        </a>

                        {/* Mobile Toggle */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        {/* Nav Links */}
                        <div className="collapse navbar-collapse justify-content-end" id="mainNavbar">
                            <ul className="navbar-nav mb-2 mb-lg-0 gap-4 ">
                                {/* HOME Dropdown */}
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle fw-semibold"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                    >
                                        HOME
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Home 1</a></li>
                                        <li><a className="dropdown-item" href="#">Home 2</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <a className="nav-link fw-semibold text-dark" href="/service">SERVICE</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold text-dark" href="/team">TEAM</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold text-dark" href="/news">NEWS</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold text-dark" href="/testimonial">TESTIMONIAL</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link fw-semibold text-dark me-5" href="/footer">FOOTER</a>
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
