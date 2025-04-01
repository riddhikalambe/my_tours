import React from 'react'
import { useNavigate } from "react-router-dom";

const Register = ({setShowModal}) => {

    const navigate = useNavigate();

    const validatePhoneNumber = (phone) => {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phoneInput = e.target.elements.phone.value;
        if (!validatePhoneNumber(phoneInput)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }
        alert("Form submitted successfully!");
    };
    const handleClose = () => {
        setShowModal(false); // Close the modal
        navigate(-1); // Go back to the previous page (or you can specify a specific route like '/login')
    };

    return (
        <div className="modal fade show d-block" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Register Form</h5>
                        <button type="button" className="btn-close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-1">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control" placeholder="Enter your full name" />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Phone</label>
                                <input type="text" name="phone" className="form-control" placeholder="Enter your contact details" />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">DOB</label>
                                <input type="date" name="date" className="form-control" placeholder="Enter your dob" />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Email</label>
                                <input type="email" className="form-control" placeholder="Enter your email" />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" placeholder="Enter your password" />
                            </div>
                            <div className="mb-1">
                                <label className="form-label">Gender</label>
                                <select className="form-select" name="gender">
                                    <option value="">Select your gender</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleClose}>Close</button>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register