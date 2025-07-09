import React from 'react';
import '../assets/Styles/Style.css';

const DepartmentCard = ({ image, iconUrl, title }) => {
  return (
    <div className="card department-card border-0 position-relative overflow-hidden">
      <img 
        src={image} 
        className="card-img department-card-img" 
        alt="department background"
      />

      <div className="department-icon-overlay position-absolute top-50 start-50 translate-middle">
        <img src={iconUrl} alt="icon" className="department-icon-img" />
      </div>

      <div className="department-title position-absolute bottom-0 text-center p-3 bg-white w-100">
        <h5 className="mb-0 fw-semibold">{title}</h5>
      </div>
    </div>
  );
};

export default DepartmentCard;
