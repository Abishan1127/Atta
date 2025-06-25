import React from 'react';
import CustomButton from './CustomButton';
import hero1 from '../assets/images/hero1.jpg';
import hero2 from '../assets/images/hero2.jpg';
import hero3 from '../assets/images/hero3.jpg';
import '../Styles/Hero.css'; // link custom styles

function Hero() {
    const slides = [hero1, hero2, hero3];

    return (
        <div id="heroCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">
            <div className="carousel-inner">
                {slides.map((image, index) => (
                    <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                        <div
                            className="hero-slide d-flex align-items-center justify-content-center text-center text-white"
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        >
                            <div className="overlay"></div>
                            <div className="hero-content animate-slide-up">
                                <h1 className="display-1 fw-bold ">My City</h1>
                                <h2 className="fs-2 mb-3">My Responsibility</h2>
                                <p className="mb-4 px-3 px-md-0">Righteous indignation and dislike men who are so beguiled & demoralized.</p>
                                <CustomButton label="Read More" bgColor="#dc3545" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Controls */}
            <button
                className="carousel-control-prev custom-arrow "
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
    );
}

export default Hero;
