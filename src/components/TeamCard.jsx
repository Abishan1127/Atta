import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaShareAlt } from 'react-icons/fa';

const TeamCard = ({ member }) => {
  return (
    <div className="card h-100 shadow rounded-0 overflow-hidden border-0">
      <div className="position-relative">
        <img src={member.image} alt={member.name} className="card-img-top img-fluid" />
        <div className="card-body bg-white text-center rounded position-relative team-cardbody" >
          <h5 className="card-title fw-bold mb-1">{member.name}</h5>
          <p className="text-danger mb-3">{member.title}</p>
          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-light d-flex align-items-center gap-1 text-muted">
              <FaEnvelope /> Email
            </button>
            <button className="btn btn-light text-muted"><FaPhoneAlt /></button>
            <button className="btn btn-light text-muted"><FaShareAlt /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;

