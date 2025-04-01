import React from 'react';
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setShowLogin }) => {
  const navigate = useNavigate();

  const handleRegisterRedirect = () => {
    navigate('/register'); // Redirect to the registration page
    setShowLogin(false);
  };
  return (
    <div className="modal fade show d-block" tabIndex="-1">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Login Form</h5>
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowLogin(false)}
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-1">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-1">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter your password"
                />
              </div>

              <div className="modal-footer">
                <button type="button" class="btn btn-link" onClick={handleRegisterRedirect}>
                  New User ? Register Now
                </button>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowLogin(false)}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
