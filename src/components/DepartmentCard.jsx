import React from 'react';
import '../assets/Styles/Style.css';

const DepartmentCard = ({ image, iconUrl, title }) => {
  return (
    <div className="card department-card border-0 position-relative d-flex align-items-center ">
      <img
        src={image}
        className="card-img department-card-img"
        alt="department background"
      />

      <div className="department-icon-overlay position-absolute top-50 start-50 translate-middle">
        <img src={iconUrl} alt="icon" className="department-icon-img" />
      </div>

      <div className="department-title position-absolute text-center p-3 bg-white " style={{bottom:"-40px"}}>
        <h5 className="mb-0 mx-4 fw-semibold">{title.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}</h5>
      </div>

      {/* NEW hover overlay */}
      <div className="department-hover-overlay position-absolute bottom-0 w-100 text-center p-3">
        <h5 className="mb-2 fw-semibold">{title.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}</h5>
        <div className="hover-line mx-auto my-2"></div>
        <p className="hover-read mb-0">READ MORE</p>
      </div>
    </div>
  );
};

export default DepartmentCard;
