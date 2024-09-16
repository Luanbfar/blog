// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">Blog</div>
            <nav>
                <ul>
                    <li>Início</li>
                    <li>Sobre nós</li>
                    <li>Contato</li>
                    <li><button className="demo-button">Entrar</button></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
