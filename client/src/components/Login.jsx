// LoginPopup.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';

const LoginPopup = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="login-popup-overlay">
            <div className="login-popup">
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="senha" id="senha" name="senha" />
                    </div>
                    <button type="submit">Login</button>
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
