import React, { useState } from 'react';
import '../assets/Styles/Style.css';
import Formbg from '../assets/images/formbg.png'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "name":
        error = /^[A-Za-z\s]+$/.test(value)
          ? ""
          : "Only alphabets allowed.";
        break;

      case "email":
        error = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? ""
          : "Invalid email format.";
        break;

      case "message":
        error = value.trim() ? "" : "Message cannot be empty.";
        break;

      case "category":
        error = value ? "" : "Please select a category.";
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Live validation on change
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        validationErrors[key] = error;
      }
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({
        name: '',
        email: '',
        category: '',
        message: ''
      });
    }
  };

    return (
        <>
            {/* Contact Info Cards */}
            <div className="container my-5">
                <h6 className="text-danger fw-bold mb-2 text-center">
                    <span className="me-1">★</span> Make Connecting <span className="ms-1">★</span>
                </h6>
                <h2 className="fw-bold mb-4 text-center">Suggestions and Complaints</h2>
                <div className="divider mx-auto mb-4"></div>

                <div className="row  mt-5">
                    <div className="col-md-4 mb-3">
                        <div className="card contact-card h-100 p-3 shadow-sm">
                            <div className="mb-2 ms-3">
                                <i className="bi bi-envelope-fill fs-2 text-danger"></i>
                            </div>
                            <h5 className='ms-3'>Email Us</h5>
                            <p className='ms-3'>Have you got a question or issue? Drop us a line.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card contact-card h-100 p-3 shadow-sm">
                            <div className="mb-2 ms-3">
                                <i className="bi bi-telephone-fill fs-2 text-danger"></i>
                            </div>
                            <h5 className='ms-3'>Phone</h5>
                            <p className='ms-3'>You can call us on weekdays between 8am to 5pm.</p>
                        </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <div className="card contact-card h-100 p-3 shadow-sm">
                            <div className="mb-2 ms-3">
                                <i className="bi bi-share-fill fs-2 text-danger"></i>
                            </div>
                            <h5 className='ms-3'>Social Media</h5>
                            <p className='ms-3'>Looking for the latest news, events & places to visit.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Formsss  */}
            <div className='position-relative pb-5 ' style={{ top: '150px' }}>
                <div className="container p-4" 
                style={{ backgroundImage: `url(${Formbg})` }}>


                    <form onSubmit={handleSubmit}>
                        <div className="row g-3 mb-3">
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    placeholder="Your Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                {errors.name && <small className="text-danger">{errors.name}</small>}
                            </div>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email Address*"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <small className="text-danger">{errors.email}</small>}
                            </div>
                            <div className="col-md-4">
                                <select
                                    name="category"
                                    className="form-select"
                                    value={formData.category}
                                    onChange={handleChange}
                                >
                                    <option>Traffic & Transport</option>
                                    <option>Public Safety</option>
                                    <option>Sanitation</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-3 position-relative">
                            <textarea
                                name="message"
                                className="form-control"
                                rows="4"
                                placeholder="Write your complaints or suggestions..."
                                value={formData.message}
                                onChange={handleChange}
                                style={{ paddingRight: '100px' }} // ensures text doesn’t hide under button
                            ></textarea>
                            {errors.message && <small className="text-danger">{errors.message}</small>}

                            <button
                                type="submit"
                                className="btn btn-danger px-3 py-2 position-absolute "
                                style={{ bottom: '10px', right: '10px',height: '80px'}}
                            >
                                SEND
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
