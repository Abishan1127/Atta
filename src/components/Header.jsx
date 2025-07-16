import React, { useState, useEffect, useRef } from 'react';
import '../assets/Styles/Style.css';
import { FaPhone, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import logo from '../assets/images/logo1.png';

const SocialIcon = ({ href, icon: Icon }) => (
    <a
        href={href}
        className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle custom-social-icon me-2"
    >
        <Icon />
    </a>
);

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [showStickyNavbar, setShowStickyNavbar] = useState(false);
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScrolled(scrollY > 50);
            setShowStickyNavbar(scrollY > 200);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // disable body scroll when offcanvas open
    useEffect(() => {
        if (showOffcanvas) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [showOffcanvas]);

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        setShowOffcanvas(false);
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    return (
        <div className="container-fluid d-md-flex flex-column p-0 transparent-navbar">
            <header>
                {/* Top header */}
                <div className={`container bg-danger d-none d-lg-flex py-3 text-white justify-content-between top-header-transition ${scrolled ? 'hide' : ''}`}>
                    <div className='d-flex align-items-center justify-content-start'>
                        <span><FaPhone className="ms-5" /> +44-888-12-345</span>
                        <span className="border-start ms-3">
                            <div className='ms-3'>158 Toongabbie Road, Toongabbie NSW 2146</div>
                        </span>
                    </div>
                    <div className="d-flex justify-content-end gap-1 ps-5 me-5 align-items-center ">
                        <SocialIcon href="#" icon={FaFacebookF} />
                        <SocialIcon href="#" icon={FaInstagram} />
                        <SocialIcon href="#" icon={FaYoutube} />
                        <SocialIcon href="#" icon={FaWhatsapp} />
                    </div>
                </div>

                {/* Main navbar */}
                <nav className={`navbar navbar-expand-lg bg-white border-bottom py-3 px-2 px-md-5 container main-navbar-transition ${scrolled ? 'hide' : ''}`}>
                    <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                        <img src={logo} alt="logo" style={{ height: '60px' }} />
                    </a>
                    <button
                        className="navbar-toggler me-3"
                        type="button"
                        onClick={() => setShowOffcanvas(true)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold d-none d-lg-flex" id="navbarMenu">
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-4 me-3">
                            <li className="nav-item"><a className="nav-link" href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#service" onClick={(e) => handleNavClick(e, 'service')}>Service</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a></li>
                            <li className="nav-item"><a className="nav-link" href="#news" onClick={(e) => handleNavClick(e, 'news')}>News</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
                        </ul>
                    </div>
                </nav>

                {/* Sticky navbar */}
                <nav className={`navbar navbar-expand-lg bg-white border-bottom py-3 px-2 px-md-5 mt-4 mt-md-0 container-fluid sticky-navbar-transition ${showStickyNavbar ? 'show' : ''}`}>
                    <div className='container'>
                        <a className="navbar-brand fw-bold d-flex align-items-center mt-3 mt-md-0" href="#">
                            <img src={logo} alt="logo" style={{ height: '60px' }} />
                        </a>
                        <button
                            className="navbar-toggler me-3 mt-3 mt-md-0"
                            type="button"
                            onClick={() => setShowOffcanvas(true)}
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold d-none d-lg-flex">
                            <ul className="navbar-nav mb-2 mb-lg-0 gap-4 me-3">
                                <li className="nav-item"><a className="nav-link" href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#service" onClick={(e) => handleNavClick(e, 'service')}>Service</a></li>
                                <li className="nav-item"><a className="nav-link" href="#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a></li>
                                <li className="nav-item"><a className="nav-link" href="#news" onClick={(e) => handleNavClick(e, 'news')}>News</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

                {/* Offcanvas */}
                {showOffcanvas && (
                    <div className="offcanvas offcanvas-end show" style={{ visibility: 'visible', transform: 'translateX(0%)' }}>
                        <div className="offcanvas-header">
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => setShowOffcanvas(false)}
                            ></button>
                        </div>
                        <div className="offcanvas-body mt-5 pt-5">
                            <ul className="navbar-nav gap-4 align-items-center text-uppercase fw-semibold mt-5">
                                <li className="nav-item"><a className="nav-link" href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#service" onClick={(e) => handleNavClick(e, 'service')}>Service</a></li>
                                <li className="nav-item"><a className="nav-link" href="#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a></li>
                                <li className="nav-item"><a className="nav-link" href="#news" onClick={(e) => handleNavClick(e, 'news')}>News</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
                            </ul>
                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <SocialIcon href="#" icon={FaFacebookF} />
                                <SocialIcon href="#" icon={FaInstagram} />
                                <SocialIcon href="#" icon={FaYoutube} />
                                <SocialIcon href="#" icon={FaWhatsapp} />
                            </div>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
}
