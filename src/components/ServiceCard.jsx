import React from "react";
import { Card } from "react-bootstrap";
import '../assets/Styles/Style.css';

const ServiceCard = ({ 
  title = "Garbage & Recycling", 
  category = "REQUEST", 
  icon = "/path-to-icon.svg", 
  image = "/path-to-image.jpg" 
}) => {
  return (
    <Card className="service-card shadow-sm rounded border-0">
      <Card.Body className="text-center" style={{bottom:"50px"}} >
        <small className="service-category">{category}</small>
        <h5 className="service-title mt-2 mb-3">{title}</h5>
        <div className="service-icon-wrapper mx-auto mb-3" >
          <i className={`bi ${icon}`} ></i>

        </div>
      </Card.Body>
      <div className="service-image-container">
        <img src={image} alt={title} className="service-image" />
      </div>
      <div className="service-plus text-center ">
        <span className="">+</span>
      </div>
    </Card>
  );
};

export default ServiceCard;
