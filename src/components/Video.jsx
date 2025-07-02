import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FaPlayCircle, FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';
import '../assets/Styles/Style.css';

const VideoAccordion = () => {
    const [showModal, setShowModal] = useState(false);
    const [activeSection, setActiveSection] = useState('Natural Areas');

    const accordionData = [
        {
            title: "Natural Areas",
            content: [
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false },
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false }
            ]
        },
        {
            title: "Towns & Cities",
            content: [
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false },
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false }
            ]
        },
        {
            title: "Arts & Culture Areas",
            content: [
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false },
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false }
            ]
        },
        {
            title: "Beach Areas",
            content: [
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false },
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false }
            ]
        }
    ];

    return (
        <div className="container my-4 text-center" id="VideoAccordion">
            <h6 className="section-subtitle">
                <span className="star">★</span> NEWS & BLOG <span className="star">★</span>
            </h6>
            <h2 className="section-title">Latest From Our Newsroom</h2>
            <div className="divider mx-auto mb-4"></div>

            <div className="row">
                {/* Left Video Section */}
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

                {/* Right Accordion Section */}
                <div className="col-md-4 text-start accordion-custom">
                    {accordionData.map((section) => (
                        <div key={section.title} className="accordion-section">
                            <div
                                className="accordion-header"
                                onClick={() => setActiveSection(section.title)}
                            >
                                <span className="accordion-title m-2">{section.title}</span>
                                {activeSection === section.title ? (
                                    <FaMinus className="accordion-icon active" />
                                ) : (
                                    <FaPlus className="accordion-icon" />
                                )}
                            </div>
                            {activeSection === section.title && section.content.length > 0 && (
                                <div className="accordion-body m-1 ">
                                    <div className="accordion-subtitle">
                                        Must Visited Parks & Natural Areas;
                                    </div>
                                    <div className="accordion-list m-2 my-3">
                                        {section.content.map((item) => (
                                            <div key={item.name} className="accordion-item">
                                                <FaCheckCircle className={`check-icon ${item.active ? 'active' : ''}`} />
                                                <span className={`item-text ${item.active ? 'active' : ''}`}>
                                                    {item.name}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal with YouTube Video */}
            <Modal
                show={showModal}
                onHide={() => setShowModal(false)}
                size="lg"
                centered
            >
                <Modal.Body className="p-0">
                    <div className="video-responsive">
                        <iframe
                            src="https://www.youtube.com/embed/-qfEOE4vtxE?autoplay=1"
                            frameBorder="0"
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            title="YouTube video"
                        ></iframe>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default VideoAccordion;
