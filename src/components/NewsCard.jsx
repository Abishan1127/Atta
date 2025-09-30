import React from "react";
import { FaUser, FaComment } from "react-icons/fa";

const NewsCard = ({ item }) => {
  return (
    <div className="card bg-dark text-white rounded shadow-sm mt-5 border-0 image-container position-relative overflow-hidden">
      <img src={item.image} alt="news" className="card-img img-fluid rounded" />

      <div className="card-body overlay-gradient z-1 position-absolute bottom-0 start-0 end-0 p-4 h-100 d-flex flex-column justify-content-end overflow-visible">
        <span className="overlay-badge bg-danger text-white fw-bold rounded-2 position-absolute p-2">
          ★ Announcement
        </span>
        <div className="d-flex align-items-center mb-3">
          <div className="bg-danger text-white text-center px-3 py-2 rounded-2">
            <div className="fw-bold h4 mb-0">{item.date}</div>
            <small>{item.month}</small>
          </div>
        </div>
        <h5 className="card-title fw-bold text-start">{item.title}</h5>
        <div className="border-bottom border-danger w-25 my-3 border-4"></div>
        <div className="d-flex gap-4 text-white-50">
          <div>
            <FaUser className="me-1" /> admin
          </div>
          <div>
            <FaComment className="me-1" /> {item.comments} Comments
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
