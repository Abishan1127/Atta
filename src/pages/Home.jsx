import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import CustomButton from '../components/CustomButton';
import Contact from '../components/Contact';
import TeamCard from '../components/TeamCard';
import NewsCard from '../components/NewsCard';
import '../assets/Styles/Style.css';
import { FaPlayCircle, FaPlus, FaMinus, FaCheckCircle, FaUser, FaComment } from 'react-icons/fa';
import { slides, teamMembers, downloadSlides, files, accordionData, newsData, iconImage } from '../constants/data';

function Home() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState('Natural Areas');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % downloadSlides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((current + 1) % downloadSlides.length);
  const prevSlide = () => setCurrent((current - 1 + downloadSlides.length) % downloadSlides.length);

  const splitBigText = (text) => {
    const words = text.split(' ');
    if (words.length > 4) {
      return (
        <>
          {words.slice(0, 4).join(' ')} <br /> {words.slice(4).join(' ')}
        </>
      );
    }
    return text;
  };

  return (
    <>
    <div className='container-fluid p-0'
    >
      {/* Hero Section */}
      <div className="p-0 z-index-1 hero-wrapper position-relative" >
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
          <div className="carousel-inner">
            {slides.map((image, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                <div
                  className="hero-slide d-flex align-items-center justify-content-center text-center text-white"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="overlay"></div>
                  <div className="hero-content animate-slide-up">
                    <h1 className="display-1 fw-bold">My City</h1>
                    <h2 className="fs-2 mb-3">My Responsibility</h2>
                    <p className="mb-4 px-3 px-md-0">
                      Righteous indignation and dislike men who are so beguiled & demoralized.
                    </p>
                    <CustomButton label="Read More" bgColor="#dc3545" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-control-prev custom-arrow" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next custom-arrow" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section py-5 bg-white mt-5" id="team">
        <div className="container-fluid text-center">
          <h6 className="text-danger fw-bold mb-2">
            <span className="me-1">★</span> WHITEHALL TEAM <span className="ms-1">★</span>
          </h6>
          <h2 className="fw-bold mb-3 pt-2">Meet Council Members</h2>
          <div className="divider mx-auto mb-4"></div>
          <div className="row justify-content-center g-4 pt-3">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-2">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Download Section */}
      <div className="downloads-section py-5 bg-white" id="downloads">
        <div className="download-section">
          <div className="col-md-12 row no-gutters">
            <div className="col-md-6 slide-container">
              <div className="overlay d-flex align-items-center justify-content-center border border-white">
                <div className="content-box slide-transition" key={current}>
                  <h4>
                    {downloadSlides[current].smallText.split(' ').slice(0, 3).join(' ')} <br />
                    {downloadSlides[current].smallText.split(' ').slice(3).join(' ')}
                  </h4>
                  <h2 className="mt-5">{splitBigText(downloadSlides[current].bigText)}</h2>
                  <div className="btn-box mt-3">
                    <a href="#" className="btn btn-light p-3 mt-5">Read More</a>
                  </div>
                </div>
                <div className="arrow-controls">
                  <button className="btn btn-outline-light p-3 me-2" onClick={prevSlide}><i className="bi bi-chevron-left"></i></button>
                  <button className="btn btn-outline-light p-3" onClick={nextSlide}><i className="bi bi-chevron-right"></i></button>
                </div>
              </div>
            </div>
            <div className="col-md-6 px-5 pt-5 mt-5">
              <div className="card h-100 border-0">
                <div className="card-body downloads-scroll">
                  {files.map((item, idx) => (
                    <div key={idx} className="d-flex align-items-center justify-content-between bg-light p-3 rounded mb-3 shadow-sm">
                      <div className="d-flex align-items-center my-3">
                        <img src={iconImage} alt="pdf" className="me-3" style={{ width: '40px' }} />
                        <div>
                          <h4 className="mb-1">{item.title}</h4>
                          <small className="text-small">{item.description}</small>
                        </div>
                      </div>
                      <i className="bi bi-arrow-down-circle text-secondary fs-1"></i>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Inline Video Accordion */}
      <div className="container my-4 text-center" id="VideoAccordion">
        <h6 className="section-subtitle"><span className="star">★</span> NEWS & BLOG <span className="star">★</span></h6>
        <h2 className="section-title">Inspiration for Your Next Trip</h2>
        <div className="divider mx-auto mb-4"></div>
        <div className="row">
          <div className="col-md-8 position-relative video-thumbnail-container">
            <img
              src="https://fastwpdemo.com/newwp/whitehall-new/wp-content/uploads/2022/09/video-1.jpg"
              alt="Video Thumbnail"
              className="video-thumbnail"
              onClick={() => setShowModal(true)}
            />
            <div className="play-overlay" onClick={() => setShowModal(true)}>
              <FaPlayCircle size={80} />
            </div>
          </div>
          <div className="col-md-4 text-start accordion-custom">
            {accordionData.map((section) => (
              <div key={section.title} className="accordion-section">
                <div className="accordion-header" onClick={() => setActiveSection(section.title)}>
                  <span className="accordion-title m-2">{section.title}</span>
                  {activeSection === section.title ? <FaMinus className="accordion-icon active" /> : <FaPlus className="accordion-icon" />}
                </div>
                {activeSection === section.title && section.content.length > 0 && (
                  <div className="accordion-body m-1 ">
                    <div className="accordion-subtitle">Must Visited Parks & Natural Areas;</div>
                    <div className="accordion-list m-2 my-3">
                      {section.content.map((item) => (
                        <div key={item.name} className="accordion-item">
                          <FaCheckCircle className={`check-icon ${item.active ? 'active' : ''}`} />
                          <span className={`item-text ${item.active ? 'active' : ''}`}>{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
          <Modal.Body className="p-0">
            <div className="video-responsive">
              <iframe src="https://www.youtube.com/embed/-qfEOE4vtxE?autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="YouTube video"></iframe>
            </div>
          </Modal.Body>
        </Modal>
      </div>

      {/* News */}
      <div className="container py-5 text-center" id="news">
        <h6 className="text-danger fw-bold mb-2">
          <span className="me-1">★</span> NEWS & BLOG <span className="ms-1">★</span>
        </h6>
        <h2 className="fw-bold mb-4 pt-2">Latest From Our Newsroom</h2>
        <div className="divider mx-auto mb-4"></div>

        <div className="row justify-content-center">
          {newsData.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
              <NewsCard item={item} />
            </div>
          ))}
        </div>
      </div>
        {/* Contact Section */}
      <div className="news-section pt-5 bg-white" id="contact"><Contact /></div>
      </div>
    </>
  );
}

export default Home;
