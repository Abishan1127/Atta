import React, { useState } from 'react';
import '../assets/Styles/Style.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'Traffic & Transport',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = "Name is required.";
        }

        if (!formData.email.trim()) {
            validationErrors.email = "Email is required.";
        } else if (!validateEmail(formData.email)) {
            validationErrors.email = "Invalid email format.";
        }

        if (!formData.message.trim()) {
            validationErrors.message = "Message is required.";
        }

        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            alert("Form submitted successfully!");
            // you can reset form here if needed
            // setFormData({ name: '', email: '', category: 'Traffic & Transport', message: '' });
        }
    };

    return (
        <div className="container my-5">
            <h6 className="text-danger fw-bold mb-2 text-center">
                <span className="me-1">★</span> make connecting <span className="ms-1">★</span>
            </h6>
            <h2 className="fw-bold mb-4 text-center">Suggestions and Complaints</h2>

            <div className="row mb-5">
                <div className="col-md-4 mb-3">
                    <div className="card contact-card h-100 p-3 shadow-sm">
                        <div className="mb-2 ms-3">
                            <i className="bi bi-envelope-fill fs-2 text-danger"></i>
                        </div>
                        <h5 className='ms-3'>Email Us</h5>
                        <p className='ms-3'>Have you got a question or issue? Drop most of a line.</p>
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

                <div className="mb-3">
                    <textarea
                        name="message"
                        className="form-control"
                        rows="4"
                        placeholder="Write your complaints or suggestions..."
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                </div>

                <div className="text-end">
                    <button type="submit" className="btn btn-danger px-4 py-2">SEND</button>
                </div>
            </form>
        </div>
    );
};

export default Contact;
