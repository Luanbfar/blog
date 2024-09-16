// LoginPopup.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const LoginPopup = ({ isOpen, onClose }) => {
    const navigate = useNavigate();
    if (!isOpen) return null;

    const navigateToAdmin = () => {
        navigate("/admin");
    }

    return (
        <div className="login-popup-overlay">
            <div className="login-popup">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" name="senha" required/>
                    </div>
                    <button onClick={navigateToAdmin} type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}

LoginPopup.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default LoginPopup;
