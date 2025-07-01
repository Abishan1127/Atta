import React, { useState, useEffect } from 'react';
import '../assets/Styles/Style.css';
import bg2 from '../assets/images/bg2.jpg';
import Icon from '../assets/images/icon-1.png'; 

const DownloadSection = () => {
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

    // your file data directly here
    const files = [
        { title: "Tax_Paid_Challan", description: "Download the Challan Details file" },
        { title: "Tender_Schedules", description: "Download Your List at Free of Cost" },
        { title: "Current_Job_Vacancies", description: "We Offer Inner City Career Opportunities" },
        { title: "New_License_Forms", description: "Latest License Applications for Citizens" },
        { title: "Annual_Budget_Report", description: "Detailed City Budget for Fiscal Year" },
        { title: "Waste_Management_Schedule", description: "View the Updated Collection Routes" },
    ];

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container-fluid ps-0 pe-5">
            <div className="row">

                {/* LEFT: slide */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="slide-container position-relative overflow-hidden"
                        style={{ backgroundImage: `url(${bg2})` }}>
                        <div className="slide-overlay"></div>
                        <div className="slide-content position-relative text-white p-5">
                            <i className={`bi ${slides[current].icon} fs-1 mb-3 d-block`}></i>
                            <h6 className="fw-bold">{slides[current].smallText}</h6>
                            <h2 className="fw-bold my-4">{slides[current].bigText}</h2>
                            <button className="btn btn-light fw-bold me-3">READ MORE</button>
                            <button className="btn btn-outline-light fw-bold">
                                <i class="bi bi-chevron-left"></i>
                            </button>
                            <button className="btn btn-outline-light fw-bold ms-3">
                                <i class="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>
                </div>

                {/* RIGHT: download list in card */}
                <div className="col-md-6 ">
                    <div className="card h-90 shadow-sm border-0">
                        <div className="card-body downloads-scroll">
                            {files.map((item, idx) => (
                                <div key={idx} className="d-flex align-items-center justify-content-between bg-light p-3 rounded mb-3 shadow-sm ">
                                    <div className="d-flex align-items-center my-3">
                                        <img src={Icon} alt="pdf" className="me-3" style={{ width: '40px' }} />
                                        <div>
                                            <h4 className=" mb-1">{item.title}</h4>
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
};

export default DownloadSection;
