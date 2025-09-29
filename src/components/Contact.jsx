import React, { useState } from "react";
import "../assets/Styles/Style.css";
import Formbg from "../assets/Images/formbg.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    // Generic required check
    if (!value.trim()) {
      if (name === "category") {
        error = "Please select a category.";
      } else {
        error = "This field is required.";
      }
      return error;
    }

    switch (name) {
      case "name":
        error = /^[A-Za-z\s]+$/.test(value) ? "" : "Only alphabets allowed.";
        break;

      case "email":
        error = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
          ? ""
          : "Invalid email format.";
        break;

      case "message":
        error = value.length >= 10 ? "" : "Minimum 10 characters required.";
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
        name: "",
        email: "",
        category: "",
        message: "",
      });
    }
  };

  return (
    <>
      <div className="container mt-5">
        <h6 className="text-danger fw-bold mb-2 text-center">
          <span className="me-1">★</span> Make Connecting{" "}
          <span className="ms-1">★</span>
        </h6>
        <h2 className="fw-bold mb-4 text-center">Suggestions and Complaints</h2>
        <div className="divider mx-auto mb-4"></div>

        <div className="row mt-5">
          <div className="col-md-4 mb-3 mb-lg-0">
            <div className="card border-0 shadow-lg contact-card h-100 p-3 hover-card">
              <div className="card-body">
                <div className="icon mb-2 ms-3">
                  <i className="bi bi-envelope-fill fs-2 text-danger"></i>
                </div>
                <h5 className="ms-3">Email Us</h5>
                <p className="ms-3">
                  Have you got a question or issue? Drop us a line.
                </p>
                <div className="extra-contact ms-3">
                  <a
                    href="mailto:info@example.com"
                    className="mt-2 mb-0 text-danger border-bottom border-danger d-inline-block text-decoration-none"
                  >
                    info@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-lg-0">
            <div className="card border-0 shadow-lg contact-card h-100 p-3 hover-card">
              <div className="card-body">
                <div className="icon mb-2 ms-3">
                  <i className="bi bi-telephone-fill fs-2 text-danger"></i>
                </div>
                <h5 className="ms-3">Phone</h5>
                <p className="ms-3">
                  You can call us on weekdays between 8am to 5pm.
                </p>
                <div className="extra-contact ms-3">
                  <a
                    href="tel:+15551234567"
                    className="mt-2 mb-0 text-danger border-bottom border-danger d-inline-block text-decoration-none"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3 mb-lg-0">
            <div className="card border-0 shadow-lg contact-card h-100 p-3 hover-card">
              <div className="card-body">
                <div className="icon mb-2 ms-3">
                  <i className="bi bi-share-fill fs-2 text-danger"></i>
                </div>
                <h5 className="ms-3">Social Media</h5>
                <p className="ms-3">
                  Looking for the latest news, events & places
                </p>
                <div className="extra-contact ms-3">
                  <a
                    href="https://twitter.com/SmartCityOfficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 mb-0 text-danger border-bottom border-danger d-inline-block text-decoration-none"
                  >
                    @SmartCityOfficial
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Formsss  */}
        <div className="position-relative shadow-lg " style={{ top: "70px" }}>
          <div
            className=" p-5"
            style={{
              backgroundImage: `url(${Formbg})`,
              backgroundSize: "cover",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div className="row g-3 mb-3">
                <div className="col-md-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && (
                    <small className="text-danger">{errors.name}</small>
                  )}
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="col-md-4">
                  <select
                    name="category"
                    className="form-select"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    <option value="Traffic & Transport">
                      Traffic & Transport
                    </option>
                    <option value="Public Safety">Public Safety</option>
                    <option value="Sanitation">Sanitation</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.category && (
                    <small className="text-danger">{errors.category}</small>
                  )}
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
                  style={{ paddingRight: "100px" }}
                ></textarea>
                {errors.message && (
                  <small className="text-danger">{errors.message}</small>
                )}

                <button
                  type="submit"
                  className="btn btn-danger px-3 py-2 position-absolute "
                  style={{ top: "15px", right: "10px", height: "80px" }}
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
