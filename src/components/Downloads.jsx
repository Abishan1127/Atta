import React, { useState, useEffect } from 'react';
import '../assets/Styles/Style.css';
import bg2 from '../assets/images/bg2.jpg';
import Icon from '../assets/images/icon-1.png';
import Bgimage from '../assets/images/download-bg.jpg';

const slides = [
    {
        icon: "bi-house-fill",
        smallText: "Thinking of Living in San Antonio City?",
        bigText: "Everyone should Live in Smart City at Least Once"
    },
    {
        icon: "bi-building",
        smallText: "Discover the Modern Architecture",
        bigText: "Experience Beautiful Skylines and Landmarks"
    },
    {
        icon: "bi-tree-fill",
        smallText: "Reconnect with Nature",
        bigText: "Enjoy Parks and Green Spaces in the City"
    }
];

const files = [
    { title: "Tax_Paid_Challan", description: "Download the Challan Details file" },
    { title: "Tender_Schedules", description: "Download Your List at Free of Cost" },
    { title: "Current_Job_Vacancies", description: "We Offer Inner City Career Opportunities" },
    { title: "New_License_Forms", description: "Latest License Applications for Citizens" },
    { title: "Annual_Budget_Report", description: "Detailed City Budget for Fiscal Year" },
    { title: "Waste_Management_Schedule", description: "View the Updated Collection Routes" },
];

export default function DownloadSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => setCurrent((current + 1) % slides.length);
    const prevSlide = () => setCurrent((current - 1 + slides.length) % slides.length);

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
        <div className="container-fluid ps-0" style={{ backgroundImage: `url(${Bgimage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="row">

                {/* LEFT: Slide Section */}
                <div className="col-md-6" style={{ backgroundImage: `url(${bg2})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '500px' }}>
                    <div className="m-3 border border-white p-4" style={{ background: 'rgba(255,255,255,0.1)' }}>
                        <div className="content-box">
                            <h4 className="text-white">
                                <i className={`bi ${slides[current].icon} me-2`}></i>
                                {slides[current].smallText.split(' ').slice(0, 3).join(' ')} <br />
                                {slides[current].smallText.split(' ').slice(3).join(' ')}
                            </h4>
                            <h2 className="fw-bold text-white mb-4">
                                {splitBigText(slides[current].bigText)}
                            </h2>
                            <div className="btn-box mb-3">
                                <a href="#" className="btn btn-light p-3">Read More</a>
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-outline-light p-3 me-2" onClick={prevSlide}>
                                    <i className="bi bi-chevron-left"></i>
                                </button>
                                <button className="btn btn-outline-light p-3" onClick={nextSlide}>
                                    <i className="bi bi-chevron-right"></i>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                {/* RIGHT: Download Card Section */}
                <div className="col-md-6 p-5">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body downloads-scroll">
                            {files.map((item, idx) => (
                                <div key={idx} className="d-flex align-items-center justify-content-between bg-light p-3 rounded mb-3 shadow-sm">
                                    <div className="d-flex align-items-center my-3">
                                        <img src={Icon} alt="pdf" className="me-3" style={{ width: '40px' }} />
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
    );
}
