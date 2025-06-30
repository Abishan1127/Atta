import React from 'react';
import '../assets/Styles/Style.css';
import bg2 from '../assets/images/bg2.jpg';

const DownloadSection = ({ files }) => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                {/* LEFT BIG CARD */}
                <div className="col-md-7">
                    <div
                        className="text-white p-5 rounded position-relative"
                        style={{
                            backgroundImage: `url(${bg2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            minHeight: '500px'
                        }}
                    >
                        <div className="position-absolute top-0 start-0 w-100 h-100 overlay"></div>
                        <div className="position-relative" style={{ zIndex: 2 }}>
                            <div className="mb-3 pt-5">
                                <i className="bi bi-house-fill bg-white text-danger rounded-circle p-2 fs-4"></i>
                            </div>
                            <h6>Thinking of Living in San Antonio City?</h6>
                            <h2 className="fw-bold mb-4">Everyone should Live in Smart City at Least Once</h2>
                            <div>
                                <button className="btn btn-light text-danger fw-bold me-2">READ MORE</button>
                                <button className="btn btn-outline-light"><i className="bi bi-chevron-left"></i></button>
                                <button className="btn btn-outline-light ms-2"><i className="bi bi-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* RIGHT DOWNLOAD CARDS */}
                <div className="col-md-5 download-cards ">
                    <div className="downloads-list overflow-auto" style={{ maxHeight: '350px' }}>
                        {files.map((file, idx) => (
                            <div key={idx} className="card mb-3 shadow-sm  " style={{ minHeight: '103px' }}>
                                <div className="card-body d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-file-earmark-pdf-fill text-danger fs-2 me-3"></i>
                                        <div >
                                            <h6 className="mb-1 fw-bold">{file.name}</h6>
                                            <small className="text-muted">{file.description}</small>
                                        </div>
                                    </div>
                                    <a href={file.link} className="text-decoration-none ">
                                        <i className="bi bi-download fs-4 "></i>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DownloadSection;
