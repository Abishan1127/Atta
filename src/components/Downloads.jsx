import React, { useState, useEffect } from 'react';
import '../assets/Styles/Style.css';
import Icon from '../assets/images/icon-1.png';

const slides = [
    {
        icon: "bi-house-fill",
        smallText: "Thinking of Living in San Antonio City?",
        bigText: "Everyone should Live in Smart City at Least Once"
    },
    {
        icon: "bi-building",
        smallText: "Thinking of Living in San Antonio City?",
        bigText: "Everyone should Live in Smart City at Least Once"
    },
    {
        icon: "bi-tree-fill",
        smallText: "Thinking of Living in San Antonio City?",
        bigText: "Everyone should Live in Smart City at Least Once"
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
        <div className="download-section">
            <div className="row no-gutters">

                {/* LEFT SIDE */}
                <div className="col-md-6 slide-container">
                    <div className="overlay d-flex align-items-center justify-content-center border border-white">
                        <div className="content-box slide-transition" key={current}>
                            <h4>
                                {/* <i className={`bi ${slides[current].icon}`}></i> */}
                                {slides[current].smallText.split(' ').slice(0,3).join(' ')} <br/>
                                {slides[current].smallText.split(' ').slice(3).join(' ')}
                            </h4>
                            <h2 className="mt-5">
                                {splitBigText(slides[current].bigText)}
                            </h2>
                            <div className="btn-box mt-3">
                                <a href="#" className="btn btn-light p-3 mt-5">Read More</a>
                            </div>
                        </div>
                        <div className="arrow-controls">
                            <button className="btn btn-outline-light p-3 me-2" onClick={prevSlide}>
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button className="btn btn-outline-light p-3" onClick={nextSlide}>
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE */}
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
