import React from 'react';
import CustomButton from '../components/CustomButton';
import NewsComponent from '../components/News';
import '../assets/Styles/Style.css';
import { FaEnvelope, FaPhoneAlt, FaShareAlt } from 'react-icons/fa';

import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';

import member1 from '../assets/images/member1.jpg';
import member2 from '../assets/images/member2.jpg';
import member3 from '../assets/images/member3.jpg';
import member4 from '../assets/images/member4.jpg';
import member5 from '../assets/images/member5.jpg';

const slides = [hero1, hero2, hero3];
const teamMembers = [
  { name: 'Elvina Julies', title: 'Actuary', image: member1 },
  { name: 'Hermans Gordon', title: 'Director', image: member2 },
  { name: 'Marian Lenoras', title: 'Speaker', image: member3 },
  { name: 'Bertram Irvin', title: 'Speaker', image: member4 },
  { name: 'Nathan Cruz', title: 'Coordinator', image: member5 },
];

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="container-fluid p-0 z-index-1 hero-wrapper" id="home">
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

          {/* Controls */}
          <button
            className="carousel-control-prev custom-arrow"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next custom-arrow"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* Team Section */}
     <div className="team-section py-5 bg-white" id="team">

        <div className="container-fluid text-center">
          <h6 className="text-danger fw-bold mb-2">
            <span className="me-1">★</span> WHITEHALL TEAM <span className="ms-1">★</span>
          </h6>
          <h2 className="fw-bold mb-3">Meet Council Members</h2>
          <div className="divider mx-auto mb-4"></div>

          <div className="row justify-content-center g-4">
            {teamMembers.map((member, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-2">
                <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
                  <img src={member.image} alt={member.name} className="card-img-top img-fluid" />
                  <div className="card-body text-center">
                    <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                    <p className="text-danger mb-3">{member.title}</p>
                    <div className="d-flex justify-content-center gap-2">
                      <button className="btn btn-light d-flex align-items-center gap-1">
                        <FaEnvelope /> Email
                      </button>
                      <button className="btn btn-light">
                        <FaPhoneAlt />
                      </button>
                      <button className="btn btn-light">
                        <FaShareAlt />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="news-section py-5 bg-white" id="news" >
        <NewsComponent/>
      </div>
    </>
  );
}

export default Home;
