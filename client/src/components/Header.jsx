// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import LoginPopup from './Login';
import "./Header.css";

const Header = () => {
    const [isLoginOpen, setLoginOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar o menu
    const navigate = useNavigate(); // Crie uma instância do useNavigate

    const handleLoginClick = () => {
        setLoginOpen(true);
    };

    const handleClosePopup = () => {
        setLoginOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigateToHome = () => {
        navigate('/'); // Navega para a página inicial
        setMenuOpen(false); // Opcional: Fecha o menu ao clicar em um item
    };

    const navigateToAbout = () => {
        navigate('/about');
        setMenuOpen(false);
    }

    const navigateToContact = () => {
        navigate('/contato');
        setMenuOpen(false);
    }

    return (
        <div className="header">
            <div className="logo" onClick={navigateToHome} style={{ cursor: 'pointer' }}>Blog</div>
            <button className="menu-button" onClick={toggleMenu}>
                ☰ {/* Ícone de menu */}
            </button>
            <nav className={menuOpen ? 'open' : ''}>
                <ul>
                    <li onClick={navigateToHome} style={{ cursor: 'pointer' }}>Início</li>
                    <li onClick={navigateToAbout} style={{ cursor: 'pointer' }}>Sobre nós</li>
                    <li onClick={navigateToContact}>Contato</li>
                    <li>
                        <button className='login-button' onClick={handleLoginClick}>Entrar</button>
                    </li>
                </ul>
            </nav>
            <LoginPopup isOpen={isLoginOpen} onClose={handleClosePopup} />
        </div>
    );
}

export default Header;
