import React from 'react';
import { FaUser, FaComment } from 'react-icons/fa';
import news1 from '../assets/images/news1.jpg';
import news2 from '../assets/images/news2.jpg';
import news3 from '../assets/images/news3.jpg';

const newsData = [
  {
    image: news1,
    date: '11',
    month: 'SEP’22',
    title: 'Get The Tickets for Newyear Celebration',
    comments: 25,
  },
  {
    image: news2,
    date: '11',
    month: 'SEP’22',
    title: 'Outdoor Dining to be Extended this Summer',
    comments: 1,
  },
  {
    image: news3,
    date: '11',
    month: 'SEP’22',
    title: 'Supporting Local Businesses to Bounce Back',
    comments: 1,
  },
];

const NewsComponent = () => {
  return (
    <div className="container py-5 text-center" id="news">
      <h6 className="text-danger fw-bold mb-2">
        <span className="me-1">★</span> NEWS & BLOG <span className="ms-1">★</span>
      </h6>
      <h2 className="fw-bold mb-4">Latest From Our Newsroom</h2>

      <div className="row justify-content-center">
        {newsData.map((item, index) => (
          <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="position-relative overflow-hidden rounded-4 shadow-sm news-card">
              {/* Background image */}
              <img src={item.image} alt="news" className="news-img img-fluid w-100" />


              {/* Top-right badge */}
              <span className="badge bg-danger position-absolute top-0 end-0 m-2  py-1 rounded-2 z-2">
                ★ Announcement
              </span>

              {/* Bottom overlay content */}
              <div className="news-overlay position-absolute bottom-0 start-0 end-0 text-white p-3 z-2">
                <div className="d-flex align-items-center mb-2">
                  <div className="bg-danger text-white text-center px-2 py-1 rounded me-2">
                    <div className="fw-bold">{item.date}</div>
                    <div style={{ fontSize: '0.7rem' }}>{item.month}</div>
                  </div>
                  <h6 className="mb-0 fw-bold">{item.title}</h6>
                </div>
                <div className="border-bottom border-danger w-25 mb-2"></div>
                <div className="d-flex text-white-50 gap-3 small">
                  <div><FaUser className="me-1" /> admin</div>
                  <div><FaComment className="me-1" /> {item.comments} Comments</div>
                </div>
              </div>

              {/* Gradient background */}
              <div className="position-absolute bottom-0 start-0 end-0 bg-opacity-50" style={{ height: '50%' }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsComponent;
