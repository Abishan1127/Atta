import React from 'react';
import '../assets/Styles/Style.css';

const DepartmentCard = ({ image, iconUrl, title, para }) => {
  return (
    <div className="card department-card rounded border-0 position-relative d-flex align-items-center ">
      <img
        src={image}
        className="card-img department-card-img"
        alt="department background"
      />

      <div className="department-icon-overlay position-absolute start-50 translate-middle" >
        <img src={iconUrl} alt="icon" className="h-100 department-icon-img" style={{ objectFit: "contain" }} />
      </div>



      <div className="department-title text-center py-3 bg-white position-relative rounded" >
        <h5 className="mb-0  fw-semibold">{title.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}</h5>
      </div>


      {/* NEW hover overlay */}
      <div className="department-hover-overlay position-absolute bottom-0 text-center p-4">
        <div className="department-hover-icon mb-3 ">
          <img src={iconUrl} alt="icon" className="department-hover-icon-img " />
        </div>
        <p className="department-hover-para text-muted mt-5">{para}</p>
        <div className=" text-center py-3 bg-danger position-relative rounded text-white" style={{ bottom: "-50px" }}>
        <h5 className="mb-0  fw-semibold">{title.split('\n').map((line, index) => (
          <div key={index}>{line}</div>
        ))}</h5>
         <div className="dividerr mx-auto m-2 "></div>
         <p>READ MORE</p>
      </div>
        
       
      </div>

    </div>
  );
};

export default DepartmentCard;
