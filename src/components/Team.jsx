import React from 'react';
import '../assets/Styles/Style.css';
import { FaEnvelope, FaPhoneAlt, FaShareAlt } from 'react-icons/fa';

import member1 from '../assets/images/member1.jpg';
import member2 from '../assets/images/member2.jpg';
import member3 from '../assets/images/member3.jpg';
import member4 from '../assets/images/member4.jpg';
import member5 from '../assets/images/member5.jpg';

const teamMembers = [
  { name: 'Elvina Julies', title: 'Actuary', image: member1 },
  { name: 'Hermans Gordon', title: 'Director', image: member2 },
  { name: 'Marian Lenoras', title: 'Speaker', image: member3 },
  { name: 'Bertram Irvin', title: 'Speaker', image: member4 },
  { name: 'Nathan Cruz', title: 'Coordinator', image: member5 },
];

const Team = () => {
  return (
    <div className="team-section py-5 bg-white">
      <div className="container-fluid text-center">
        <h6 className="text-danger fw-bold mb-2">
          <span className="me-1">★</span> WHITEHALL TEAM <span className="ms-1">★</span>
        </h6>
        <h2 className="fw-bold mb-3">Meet Council Members</h2>
        <div className="divider mx-auto mb-4"></div>

        <div className="row justify-content-center g-4">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="col-12 col-sm-6 col-md-4 col-lg-2">
              <div className="card h-100 shadow-sm rounded-4 overflow-hidden">
                <img src={member.image} alt={member.name} className="card-img-top img-fluid" />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold mb-1">{member.name}</h5>
                  <p className="text-danger mb-3">{member.title}</p>
                  <div className="d-flex justify-content-center gap-2">
                    <button className="btn btn-light d-flex align-items-center gap-1">
                      <FaEnvelope /> Email
                    </button>
                    <button className="btn btn-light">
                      <FaPhoneAlt />
                    </button>
                    <button className="btn btn-light">
                      <FaShareAlt />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
