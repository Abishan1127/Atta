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
        <small className="service-category">{category}</small>
        <h5 className="service-title mt-3 ">{title}</h5>
        <div className="service-icon-wrapper mx-auto position-relative ">
          <i className={`bi ${icon}`} ></i>

        </div>
      </Card.Body>
      <div className="service-image-container">
        <img src={image} alt={title} className="service-image "/>
      </div>
      
    </Card>
  );
};

export default ServiceCard;

{/* <div className="service-plus text-center position-relative " >
        <span className="">+</span>
      </div> */}