import React, { useState, useEffect } from 'react';
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

function Header() {
    const [showTopHeader, setShowTopHeader] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopHeader(window.scrollY <= 50);
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

    const closeOffcanvas = () => {
        const offcanvasElement = document.getElementById('mobileMenu');
        if (!offcanvasElement) return;

        let OffcanvasClass = null;
        if (window.bootstrap && window.bootstrap.Offcanvas) {
            OffcanvasClass = window.bootstrap.Offcanvas;
        } else if (typeof bootstrap !== "undefined" && bootstrap.Offcanvas) {
            OffcanvasClass = bootstrap.Offcanvas;
        }

        if (!OffcanvasClass) {
            console.error("Bootstrap Offcanvas not found on window or global scope");
            return;
        }

        let bsOffcanvas = OffcanvasClass.getInstance(offcanvasElement);
        if (!bsOffcanvas) {
            bsOffcanvas = new OffcanvasClass(offcanvasElement);
        }
        bsOffcanvas.hide();
    };

    const handleNavClick = (e, sectionId) => {
        e.preventDefault(); 
        closeOffcanvas();

        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="container-fluid d-md-flex flex-column p-0 transparent-navbar ">
            <header>
                <div className={`container bg-danger d-none d-lg-flex py-3 text-white justify-content-between transition-top-header ${showTopHeader ? '' : 'hidden'}`}>
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

                <nav className={`navbar navbar-expand-lg bg-white border-bottom py-3 px-2 px-md-5 ${showTopHeader ? 'container' : 'container-fluid'}`}>
                    <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
                        <img src={logo} alt="logo" style={{ height: '60px' }} />
                    </a>
                    <button className="navbar-toggler me-3" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
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

                <div className="offcanvas offcanvas-end" tabIndex="-1" id="mobileMenu">
                    <div className="offcanvas-header">
                        <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body mt-5 pt-5 ">
                        <ul className="navbar-nav gap-4 align-items-center text-uppercase fw-semibold mt-5">
                            <li className="nav-item"><a className="nav-link" href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a></li>
                            <li className="nav-item"><a className="nav-link" href="#service" onClick={(e) => handleNavClick(e, 'service')}>Service</a></li>
                            <li className="nav-item"><a className="nav-link" href="#team" onClick={(e) => handleNavClick(e, 'team')}>Team</a></li>
                            <li className="nav-item"><a className="nav-link" href="#news" onClick={(e) => handleNavClick(e, 'news')}>News</a></li>
                            <li className="nav-item"><a className="nav-link" href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact Us</a></li>
                        </ul>

                        <div className="d-flex justify-content-center gap-3 mt-4 ">
                            <SocialIcon href="#" icon={FaFacebookF} />
                            <SocialIcon href="#" icon={FaInstagram} />
                            <SocialIcon href="#" icon={FaYoutube} />
                            <SocialIcon href="#" icon={FaWhatsapp} />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
