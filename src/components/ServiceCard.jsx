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
      <Card.Body className="text-center service-card-body" >
        <small className="service-category text-danger fw-bold text-uppercase">{category}</small>
        <h5 className="mt-3 fw-bold">{title}</h5>
        <div className="service-icon-wrapper mx-auto position-relative rounded-circle d-flex align-items-center justify-content-center ">
          <div className="service-icon-wrappers bg-white rounded-circle d-flex align-items-center justify-content-center position-relative z-2">
          <i className={`bi ${icon}`} ></i>
          </div>
        </div>
      </Card.Body>
      <div className="service-image-container ">
        <img src={image} alt={title} className="service-image "/>
        <div className="service-plus text-center position-relative rounded mx-auto position-relative  d-flex align-items-center justify-content-center " > </div>
        <span className="plus-icon text-center mx-auto position-relative rounded-circle d-flex align-items-center justify-content-center ">+</span>
     
        
      </div>
      
    </Card>
  );
};

export default ServiceCard;

