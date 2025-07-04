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

    useEffect(() => {
        const offcanvas = document.getElementById('mobileMenu');
        const togglerIcon = document.querySelector('.navbar-toggler-icon');

        const handleShow = () => {
            togglerIcon.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x' viewBox='0 0 16 16'%3E%3Cpath d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/%3E%3C/svg%3E")`;
        };

        const handleHide = () => {
            togglerIcon.style.backgroundImage = "";
        };

        if (offcanvas) {
            offcanvas.addEventListener('show.bs.offcanvas', handleShow);
            offcanvas.addEventListener('hide.bs.offcanvas', handleHide);
        }

        return () => {
            if (offcanvas) {
                offcanvas.removeEventListener('show.bs.offcanvas', handleShow);
                offcanvas.removeEventListener('hide.bs.offcanvas', handleHide);
            }
        };
    }, []);


    return (
        <>
            <div className="container-fluid d-md-flex flex-column p-0 transparent-navbar">
                <header>
                    {/* Top Header for large devices */}
                    <div className={`container bg-danger d-none d-lg-flex py-3 text-white justify-content-between transition-top-header ${showTopHeader ? '' : 'hidden'}`}>
                        <div className='align-items-center justify-content-start'>
                            <span >
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

                    {/* Main Navbar */}
                    <nav className={`navbar navbar-expand-lg bg-white border-bottom py-3 ps-md-5 pe-5 ${showTopHeader ? 'container' : 'container-fluid px-5  '}`}>
                        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                            <img src={logo} alt="logo" style={{ height: '60px' }} />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold d-none d-lg-flex" id="navbarMenu">
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
                    {/* Offcanvas for mobile */}
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileMenu">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                        </div>

                        <div className="offcanvas-body mt-4 pt-4">
                            {/* Main nav links */}
                            <ul className="navbar-nav gap-4 align-items-center text-uppercase fw-semibold">
                                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#service">Service</a></li>
                                <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
                                <li className="nav-item"><a className="nav-link" href="#news">News</a></li>
                                <li className="nav-item"><a className="nav-link" href="#testimonial">Testimonial</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
                            </ul>

                            {/* Additional links with top border */}
                            <div className="mobile-links mt-5 pt-5">
                                <a href="#about" className="header-link mx-2 ">About Us</a>
                                <a href="#faq" className="header-link mx-2">FAQ’s</a>
                                <a href="#contact" className="header-link mx-2">Contact</a>
                            </div>

                            {/* Social icons below */}
                            <div className="d-flex justify-content-center gap-3 mt-4">
                                <SocialIcon href="#" icon={FaFacebookF} />
                                <SocialIcon href="#" icon={FaGoogle} />
                                <SocialIcon href="#" icon={FaInstagram} />
                                <SocialIcon href="#" icon={FaTwitter} />
                            </div>
                        </div>
                    </div>



                </header>
            </div>
        </>
    );
}

export default Header;
