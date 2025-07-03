import React from 'react';
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
    return (
        <>
            {/* Top Header */}
            <div className="bg-transparent position-relative">
                <header>
                    <div className="container bg-danger d-lg-flex py-3 text-white justify-content-between ">
                        {/* Left Side */}
                        <div className='align-items-center justify-content-start'>
                            <span className="ms-5">
                                <FaPhone className="ms-5" /> +44-888-12-345
                            </span>
                            <span className="border-start ms-3">
                                <FaClock className="ms-3" /> Today: 09.00 to 18.45
                            </span>
                        </div>
                        {/* Right Side */}
                        <div className="d-flex justify-content-end gap-1 ps-5 me-5 align-items-center ">

                            <a href="#about" className="header-link me-4">About Us</a>
                            <a href="#faq" className="header-link me-4">FAQ’s</a>
                            <a href="#contact" className="header-link pe-4 border-end">Contact</a>
                            {/* Social Icons */}
                            <SocialIcon href="#" icon={FaFacebookF} />
                            <SocialIcon href="#" icon={FaGoogle} />
                            <SocialIcon href="#" icon={FaInstagram} />
                            <SocialIcon href="#" icon={FaTwitter} />
                        </div>
                    </div>
                    {/* Navbar */}
                    <nav className="navbar navbar-expand-lg bg-white border-bottom py-3 ">
                        <div className="container">
                            {/* Logo */}
                            <a className="navbar-brand fw-bold d-flex align-items-center ms-5 ps-5" href="#">
                                <img src={logo} alt="logo" style={{ height: '60px' }} className="me-2" />
                            </a>
                            {/* Toggle Button */}
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* Desktop Nav */}
                            <div className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold d-none d-lg-block">
                                <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
                                    <li className="nav-item"><a className="nav-link" href="#" data-target="home">Home</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" data-target="service">Service</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" data-target="team">Team</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" data-target="news">News</a></li>
                                    <li className="nav-item"><a className="nav-link" href="#" data-target="testimonial">Testimonial</a></li>
                                    <li className="nav-item"><a className="nav-link me-5" href="#" data-target="contact">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    {/* Mobile Offcanvas Menu */}
                    <div className="offcanvas offcanvas-start text-white" tabIndex="-1" id="mobileMenu" style={{ backgroundColor: '#0c0b16' }}>
                        <div className="offcanvas-header border-bottom">
                            <img src={logo} alt="logo" style={{ height: '40px' }} />
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav text-uppercase fw-semibold">
                                <li className="nav-item"><a className="custom-nav-link" href="#home">Home</a></li>
                                <li className="nav-item"><a className="custom-nav-link" href="#service">Service</a></li>
                                <li className="nav-item"><a className="custom-nav-link" href="#team">Team</a></li>
                                <li className="nav-item"><a className="custom-nav-link" href="#news">News</a></li>
                                <li className="nav-item"><a className="custom-nav-link" href="#testimonial">Testimonial</a></li>
                                <li className="nav-item"><a className="custom-nav-link" href="#contact">Contact</a></li>
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
            </div>
        </>
    );
}

export default Header;

// import React from 'react';
// import '../assets/Styles/Style.css';
// import { FaPhone, FaClock, FaFacebookF, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
// import logo from '../assets/images/logo1.png';

// const SocialIcon = ({ href, icon: Icon }) => (
//     <a
//         href={href}
//         className="d-inline-flex align-items-center justify-content-center bg-secondary text-white rounded-circle custom-social-icon me-2"
//     >
//         <Icon />
//     </a>
// );

// function Header() {
//     return (
//         <>
//         <div className='container position-relative'>
//             {/* Top Header */}
//             <div className="bg-danger text-white py-3 px-4">
//                 <div className="container">
//                     <div className="row align-items-center">
//                         {/* Left */}
//                         <div className="col-md-6 d-flex flex-wrap gap-3 justify-content-center justify-content-md-start">
//                             <span>
//                                 <FaPhone /> +44-888-12-345
//                             </span>
//                             <span className="border-start ps-3">
//                                 <FaClock /> Today: 09.00 to 18.45
//                             </span>
//                         </div>
//                         {/* Right */}
//                         <div className="col-md-6 d-flex flex-wrap justify-content-center justify-content-md-end align-items-center gap-3 mt-2 mt-md-0">
//                             <a href="#about" className="header-link">About Us</a>
//                             <a href="#faq" className="header-link">FAQ’s</a>
//                             <a href="#contact" className="header-link border-end pe-3">Contact</a>
//                             <SocialIcon href="#" icon={FaFacebookF} />
//                             <SocialIcon href="#" icon={FaGoogle} />
//                             <SocialIcon href="#" icon={FaInstagram} />
//                             <SocialIcon href="#" icon={FaTwitter} />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Navbar */}
//             <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom py-3 px-4">
//                 <div className="container">
//                     <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
//                         <img src={logo} alt="logo" style={{ height: '60px' }} className="me-2" />
//                     </a>
//                     <button
//                         className="navbar-toggler"
//                         type="button"
//                         data-bs-toggle="offcanvas"
//                         data-bs-target="#mobileMenu"
//                     >
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse justify-content-end text-uppercase fw-semibold">
//                         <ul className="navbar-nav mb-2 mb-lg-0 gap-4">
//                             <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#service">Service</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#team">Team</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#news">News</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#testimonial">Testimonial</a></li>
//                             <li className="nav-item"><a className="nav-link" href="#contact">Contact Us</a></li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>

//             {/* Mobile Offcanvas */}
//             <div className="offcanvas offcanvas-start text-white" tabIndex="-1" id="mobileMenu" style={{ backgroundColor: '#0c0b16' }}>
//                 <div className="offcanvas-header border-bottom">
//                     <img src={logo} alt="logo" style={{ height: '40px' }} />
//                     <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas"></button>
//                 </div>
//                 <div className="offcanvas-body">
//                     <ul className="navbar-nav text-uppercase fw-semibold">
//                         <li className="nav-item"><a className="custom-nav-link" href="#home">Home</a></li>
//                         <li className="nav-item"><a className="custom-nav-link" href="#service">Service</a></li>
//                         <li className="nav-item"><a className="custom-nav-link" href="#team">Team</a></li>
//                         <li className="nav-item"><a className="custom-nav-link" href="#news">News</a></li>
//                         <li className="nav-item"><a className="custom-nav-link" href="#testimonial">Testimonial</a></li>
//                         <li className="nav-item"><a className="custom-nav-link" href="#contact">Contact</a></li>
//                     </ul>
//                     <div className="mt-5">
//                         <h5 className="fw-bold">Contact Info</h5>
//                         <p>Chicago 12, Melborne City, USA</p>
//                         <p>+88–01682648101</p>
//                         <p>info@example.com</p>
//                         <div className="d-flex">
//                             <SocialIcon href="#" icon={FaFacebookF} />
//                             <SocialIcon href="#" icon={FaGoogle} />
//                             <SocialIcon href="#" icon={FaInstagram} />
//                             <SocialIcon href="#" icon={FaTwitter} />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         </>
//     );
// }

// export default Header;

