import React from "react";
import "../assets/Styles/Style.css";

const DepartmentCard = ({ image, iconUrl, title, para }) => {
  return (
    <div className="">
      <div className="card department-card rounded border-0 position-relative d-flex align-items-center ">
        <img
          src={image}
          className="card-img department-card-img"
          alt="department background"
        />
        <div className="department-icon-overlay position-absolute start-50 translate-middle d-flex align-items-center justify-content-center rounded-circle">
          <div className=" z-1 position-absolute department-icon-overlays d-flex align-items-center justify-content-center rounded-circle">
            <img
              src={iconUrl}
              alt="icon"
              className="h-100 department-icon-img"
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
        {/* NEW hover overlay */}
        <div className="department-hover-overlay top-0 start-0 end-0 bottom-0  position-absolute  text-center p-4 rounded bg-white">
          <div className="department-hover-icon mb-3 rounded-circle d-flex align-items-center justify-content-center">
            <div className="department-hover-icons rounded-circle d-flex align-items-center justify-content-center">
              <img
                src={iconUrl}
                alt="icon"
                className="department-hover-icon-img "
              />
            </div>
          </div>
          <p className="department-hover-para text-muted mt-5">{para}</p>
          <div
            className=" text-center py-3 bg-danger position-relative rounded text-white"
            style={{ bottom: "-50px" }}
          >
            <h5 className="mb-0  fw-semibold">
              {title.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
            </h5>
            <div className="dividerr mx-auto m-2 bg-white "></div>
            <p>READ MORE</p>
          </div>
        </div>
      </div>
      <div className="department-title text-center py-3 bg-white position-relative rounded  justify-content-center m-auto ">
        <h5 className="mb-0  fw-semibold">
          {title.split("\n").map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </h5>
      </div>
    </div>
  );
};

export default DepartmentCard;
