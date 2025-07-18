import React, { useState, useEffect, useRef } from 'react';
import { Modal } from 'react-bootstrap';
import CustomButton from '../components/CustomButton';
import Contact from '../components/Contact';
import TeamCard from '../components/TeamCard';
import NewsCard from '../components/NewsCard';
import '../assets/Styles/Style.css';
import { FaPlus, FaMinus, FaCheckCircle, FaChevronLeft, FaChevronRight, FaDove } from 'react-icons/fa';
import { slides, teamMembers, downloadSlides, files, accordionData, newsData, iconImage, services, departmentsData, aboutData } from '../constants/data';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "../components/ServiceCard";
import DepartmentCard from '../components/DepartmentCard';
import Invert from '../assets/images/inverted.png'

const responsive = {
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
};

function Home() {
  const [current, setCurrent] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [activeSection, setActiveSection] = useState('Natural Areas');
  const scrollContainerRef = useRef(null);
  const thumbRef = useRef(null);

  // Downloads auto slide
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
    return words.length > 4
      ? <>{words.slice(0, 4).join(' ')} <br /> {words.slice(4).join(' ')}</>
      : text;
  };
  const [aboutIndex, setAboutIndex] = useState(0);
  const [exitingIndex, setExitingIndex] = useState(null);

  const nextAbout = () => {
    setExitingIndex(aboutIndex);
    setAboutIndex((prev) => (prev + 1) % aboutData.length);
  };

  const prevAbout = () => {
    setExitingIndex(aboutIndex);
    setAboutIndex((prev) => (prev - 1 + aboutData.length) % aboutData.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextAbout();
    }, 6000);
    return () => clearInterval(interval);
  }, [aboutIndex]);



  // Scrollbar for downloads
  const scrollDownloads = (amount) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ top: amount, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    const updateThumbPosition = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const percentScrolled = scrollHeight ? scrollTop / scrollHeight : 0;
      const trackHeight = container.clientHeight - thumbRef.current.offsetHeight;
      thumbRef.current.style.top = `${percentScrolled * trackHeight}px`;
    };
    container.addEventListener('scroll', updateThumbPosition);
    return () => container.removeEventListener('scroll', updateThumbPosition);
  }, []);




  return (
    <>
      <div className="container-fluid p-0">

        {/* Hero section */}
        <div className="p-0 z-index-1 hero-wrapper position-relative hero-section " id="home">
          <div id="heroCarousel" className="carousel slide carousel-fade " data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner ">
              {slides.map((slide, idx) => (
                <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                  <div
                    className="hero-slide d-flex align-items-center justify-content-center text-center text-white position-relative bg-center overflow-hidden"
                    style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
                    {/* Bootstrap 5 overlay to reduce image opacity */}
                    <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"></div>

                    {/* Text content above the overlay */}
                    <div className="hero-content animate-slide-up position-relative">
                      <h1 className="display-1 fw-bold">{slide.title}</h1>
                      <h2 className="fs-2 mb-3">{slide.subtitle}</h2>
                      <p className="mb-4 px-3 px-md-0">{slide.description}</p>
                      <CustomButton label="Read More" bgColor="#dc3545" />
                    </div>
                  </div>

                </div>
              ))}
            </div>

            <button className="carousel-control-prev custom-arrow d-none d-sm-block" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon "></span>
            </button>
            <button className="carousel-control-next custom-arrow d-none d-sm-block" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
       <section className="about-section py-5 about-part" id="about">
  <div className="container py-5">
    <div className="row">
      {/* Left: Fixed Background Image + Quote */}
      <div className="col-md-6 about-left d-flex align-items-center justify-content-end mb-5">
        <div className="about-circle text-white rounded-circle d-flex flex-column justify-content-center align-items-center text-center me-5 mb-5 bg-danger">
          <div className="text-start ms-4">
            <img src={Invert} alt="" className="img-fluid mb-2" />
            <p className="mb-1 small">
              My City’s Residents Showed Commitment & Courage in this Crucial Situation.
            </p>
            <p className="fw-bold mb-0">Jordon Cooper</p>
            <small>City Mayor</small>
          </div>
        </div>
      </div>

      {/* Right: Animated Text Content */}
      <div className="col-md-6 position-relative overflow-hidden about-right mt-5">
        <p className="text-danger small fw-bold ms-5">★ About Us ★</p>
        <div className="ms-3">
          <div className="divider ms-5 mb-4"></div>
        </div>

        <div className="about-slider-wrapper position-relative ms-5">
          {aboutData.map((item, i) => {
            const isActive = i === aboutIndex;
            const isExiting = i === exitingIndex;

            return (
              <div
                key={item.id}
                className={`about-slide-content ${isActive ? 'active' : isExiting ? 'exiting' : ''}`}
              >
                <h3 className="fw-bold">{item.heading}</h3>
                <h6 className="fw-semibold mt-4">{item.subheading}</h6>
                <p className="text-muted mt-4">{item.description}</p>
                <ul className="list-unstyled">
                  {item.points.map((point, j) => (
                    <li key={j} className="d-flex align-items-start gap-2 mb-2">
                      <FaDove className="text-secondary mt-1 about-icon" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Arrows */}
        <div className="position-absolute bottom-0 start-0 pt-3 px-3 ms-5 d-flex gap-2 about-arrow">
          <button className="btn btn-outline-dark" onClick={prevAbout}>
            <FaChevronLeft />
          </button>
          <button className="btn btn-outline-dark" onClick={nextAbout}>
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Services section */}
        <div className="service-section py-5 bg-transparent position-relative z-1 overlay " id="service" >
          <div className="service-section text-white">
            <div className="col-md-12 row no-gutters">
              <div className="col-md-6 slide-container rounded">
                <div className="overlay z-1 d-flex align-items-center justify-content-center border border-white rounded my-3 position-absolute ">
                  <div className="content-box my-5">
                    <h4 className='mt-5'><i className="bi bi-house me-2"></i> Services & Activities</h4>
                    <h2 className="mt-2 display-4">Township <br />of San Antonio</h2>
                    <p className="mt-3">Denounce with righteous indignations <br /> and dislike men who are so beguiled all <br /> demoralized charms.</p>
                    <div className="btn-box mt-3">
                      <a href="#" className="btn btn-light p-3 mt-3 text-danger mb-5">READ MORE</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7 pt-5 mt-md-5 position-relative overlap-carousel">
                <Carousel
                  responsive={responsive}
                  autoPlay autoPlaySpeed={3000} infinite
                  containerClass="carousel-container" itemClass="px-2" arrows={false}
                >
                  {services.map((service, idx) => (
                    <ServiceCard key={idx} {...service} />
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>

        {/* Departments section with left & right background images */}
        <div className="department-section position-relative py-0 " id="departments">

          {/* Left background image */}
          <div className="department-bg-left d-none d-md-block position-absolute top-0 start-0 bottom-0"></div>

          {/* Right background image */}
          <div className="department-bg-right d-none d-md-block position-absolute top-0 end-0 bottom-0"></div>

          {/* Center container */}
          <div className="container text-center position-relative department-center-content">
            <h6 className="text-danger fw-bold mb-2">
              <span className="me-1">★</span> Departments<span className="ms-1">★</span>
            </h6>
            <h2 className="fw-bold mb-3 pt-2">Explore Our Departments</h2>
            <div className="divider mx-auto mb-4"></div>

            {/* Large screen carousel */}
            <div className="d-none d-md-block ">
              <Carousel
                responsive={{
                  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
                  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
                }}
                autoPlay
                autoPlaySpeed={3000}
                infinite
                arrows={false}
                showDots={false}
                containerClass="carousel-container"
                itemClass="px-2"
              >
                {departmentsData.map((dept, idx) => (
                  <DepartmentCard key={idx} {...dept} />
                ))}
              </Carousel>
              <div className="department-carousel-bars d-flex justify-content-center mt-3">
                {[0, 1, 2].map((idx) => (
                  <div
                    key={idx}
                    className={`bar ${Math.floor(current / 1) === idx ? 'active' : ''} me-2`}
                    onClick={() => setCurrent(idx * 1)}
                  ></div>
                ))}
              </div>
            </div>

            {/* Small screen carousel */}
            <div id="departmentCarousel" className="carousel slide d-md-none" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="carousel-inner">
                {departmentsData.map((dept, idx) => (
                  <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                    <DepartmentCard {...dept} />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#departmentCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#departmentCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
              </button>
            </div>
          </div>
        </div>
        {/* Team section*/}
        <div className="team-section py-5 bg-white mt-5" id="team">
          <div className="container-fluid text-center">
            <h6 className="text-danger fw-bold mb-2">
              <span className="me-1">★</span> WHITEHALL TEAM <span className="ms-1">★</span>
            </h6>
            <h2 className="fw-bold mb-3 pt-2">Meet Council Members</h2>
            <div className="divider mx-auto mb-4"></div>
            <div className="row justify-content-center g-4 pt-3">
              {teamMembers.map((m, i) => (
                <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-2">
                  <TeamCard member={m} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Downloads section*/}
        <div className="downloads-section py-5 bg-transparent" id="downloads">
          <div className="download-section">
            <div className="col-md-12 row no-gutters">
              <div className="col-md-6 slide-container">
                <div className="overlay d-flex align-items-end justify-content-center border border-white rounded m-4 position-absolute">
                  <div className="content-box slide-transition" key={current}>
                    <h4><i className="bi bi-house me-2"></i>{downloadSlides[current].smallText}</h4>
                    <h2 className="mt-5">{splitBigText(downloadSlides[current].bigText)}</h2>
                    <div className="btn-box mt-3">
                      <a href="#" className="btn btn-light p-3 mt-5 text-danger">READ MORE</a>
                    </div>
                  </div>
                  <div className="arrow-controls">
                    <button className="btn btn-outline-light p-3 me-2" onClick={prevSlide}><i className="bi bi-chevron-left"></i></button>
                    <button className="btn btn-outline-light p-3" onClick={nextSlide}><i className="bi bi-chevron-right"></i></button>
                  </div>
                </div>
              </div>
              <div className="col-md-6 px-3 pt-5 mt-0 mt-md-5 position-relative">
                <div className="card h-100 border-0 bg-transparent justify-content-between col-11">
                  <div className="card-body downloads-scroll p-0" ref={scrollContainerRef}>
                    {files.map((item, idx) => (
                      <div key={idx} className={`download-item d-flex align-items-center justify-content-between ${idx === files.length - 1 ? 'mb-0' : ''}`}>
                        <div className="d-flex align-items-center my-3">
                          <img src={iconImage} alt="pdf" className="download-icon me-3" />
                          <div><h4 className="mb-1">{item.title}</h4><small className="text-small">{item.description}</small></div>
                        </div>
                        <i className="bi bi-arrow-down-circle text-secondary fs-1 me-5"></i>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="scrollbar-container-custom position-absolute top-0 end-0 d-flex flex-column align-items-center me-3">
                  <button className="btn btn-outline-dark fs-5 mt-1 mt-md-0" onClick={() => scrollDownloads(-150)}><i className="bi bi-arrow-up"></i></button>
                  <div className="scrollbar-track-custom my-1 position-relative" style={{ width: '6px', background: '#eee' }}>
                    <div ref={thumbRef} className="scrollbar-thumb-custom bg-danger w-100"></div>
                  </div>
                  <button className="btn btn-outline-dark fs-5 my-download-btn" onClick={() => scrollDownloads(150)}>
                    <i className="bi bi-arrow-down"></i>
                  </button>

                </div>
              </div>
            </div>
          </div>
        </div>
        {/* News Accordion section*/}
        <div className="container my-4 text-center" id="blog">
          <h6 className="section-subtitle"><span className="star">★</span> NEWS & BLOG <span className="star">★</span></h6>
          <h2 className="section-title">Inspiration for Your Next Trip</h2>
          <div className="divider mx-auto mb-4"></div>
          <div className="row">
            <div className="col-md-8 position-relative video-thumbnail-container p-0">
              <img src="https://fastwpdemo.com/newwp/whitehall-new/wp-content/uploads/2022/09/video-1.jpg" alt="Video" className="video-thumbnail" onClick={() => setShowModal(true)} />
              <div className="play-overlay" onClick={() => setShowModal(true)}>
                <i className="bi bi-play-circle display-1 my-bold-icon"></i>
                <span className="wave"></span>
              </div>

            </div>
            <div className="col-md-4 text-start accordion-custom px-4 shadow">
              {accordionData.map((sec) => (
                <div key={sec.title} className="accordion-section">
                  <div className="accordion-header" onClick={() => setActiveSection(sec.title)}>
                    <span className="accordion-title m-2">{sec.title}</span>
                    {activeSection === sec.title ? <FaMinus className="accordion-icon active" /> : <FaPlus className="accordion-icon" />}
                  </div>
                  {activeSection === sec.title && (
                    <div className="accordion-body m-1">
                      <div className="accordion-subtitle">Must Visited Parks & Natural Areas;</div>
                      <div className="accordion-list m-2 my-3">
                        {sec.content.map((item) => (
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
          <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
            <Modal.Body className="p-0">
              <div className="video-responsive position-relative">
                <iframe src="https://www.youtube.com/embed/-qfEOE4vtxE?autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="YouTube video"></iframe>
              </div>
            </Modal.Body>
          </Modal>
        </div>
        {/* News section*/}
        <div className="container py-5 text-center" id="news">
          <h6 className="text-danger fw-bold mb-2"><span className="me-1">★</span> NEWS & BLOG <span className="ms-1">★</span></h6>
          <h2 className="fw-bold mb-4 pt-2">Latest From Our Newsroom</h2>
          <div className="divider mx-auto mb-4"></div>
          <div className="row justify-content-center">
            {newsData.map((item, idx) => (
              <div key={idx} className="col-12 col-md-6 col-lg-4 mb-4">
                <NewsCard item={item} />
              </div>
            ))}
          </div>
        </div>
        {/* Contact section*/}
        <div className="news-section pt-5 bg-white mt-3" id="contact"><Contact /></div>
      </div>
    </>
  );
}

export default Home;
