import React, { useState, useRef } from 'react';
import { FaPlayCircle, FaPauseCircle, FaPlus, FaMinus, FaCheckCircle } from 'react-icons/fa';
import '../assets/Styles/Style.css';

const VideoAccordion = () => {
    const [playing, setPlaying] = useState(false);
    const [activeSection, setActiveSection] = useState('Natural Areas');
    const videoRef = useRef(null);

    const togglePlay = () => {
        if (playing) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setPlaying(!playing);
    };

    const accordionData = [
        {
            title: "Natural Areas",
            content: [
                { name: "Medina River", active: false },
                { name: "Denman Estate Park", active: true },
                { name: "Acequia Park", active: false },
                { name: "Bracken Bat Flight", active: false }, { name: "Medina River", active: false },
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
        <div className="container my-4 justify-content-center text-center" id="VideoAccordion">
            <h6 className="text-danger fw-bold mb-2">
                <span className="me-1">★</span> NEWS & BLOG <span className="ms-1">★</span>
            </h6>
            <h2 className="fw-bold mb-4">Latest From Our Newsroom</h2>
            <div className="divider mx-auto mb-4"></div>
            <div className="row">
                {/* Left Video Section */}
                <div className="col-md-8 position-relative video-container">
                    <video
                        ref={videoRef}
                        width="100%"
                        height="auto"
                        poster="https://fastwpdemo.com/newwp/whitehall-new/wp-content/uploads/2022/09/video-1.jpg"
                    >
                        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                        Your browser does not support HTML5 video.
                    </video>
                    <div className="play-overlay" onClick={togglePlay}>
                        {playing ? <FaPauseCircle size={80} /> : <FaPlayCircle size={80} />}
                    </div>
                </div>

                {/* Right Accordion Section */}
                <div className="col-md-4 text-start"
                style={{ fontSize: "20px" }}>
                    {accordionData.map((section) => (
                        <div key={section.title}>
                            <div
                                className="d-flex justify-content-between align-items-center py-4 border-bottom"
                                style={{ cursor: "pointer" }}
                                onClick={() => setActiveSection(section.title)}
                            >
                                <span className="fw-bold">{section.title}</span>
                                {activeSection === section.title ? (
                                    <FaMinus color="#d31c1c" />
                                ) : (
                                    <FaPlus />
                                )}
                            </div>
                            {activeSection === section.title && section.content.length > 0 && (
                                <div className="py-2">
                                    <div className="fw-bold mb-2" >
                                        Must Visited Parks & Natural Areas;
                                    </div>
                                    <div style={{ maxHeight: "160px", overflowY: "auto" }}>
                                        {section.content.map((item) => (
                                            <div key={item.name} className="d-flex align-items-center mb-2">
                                                <FaCheckCircle color={item.active ? "#d31c1c" : "#ccc"} className="me-2" />
                                                <span style={{ color: item.active ? "#444" : "#777" }}>
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
        </div>
    );
};

export default VideoAccordion;
