// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./ContactPage.css";

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para enviar os dados do formulário
        console.log("Form data submitted:", formData);
        // Limpar o formulário após o envio
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    return (
        <>
            <Header />
            <div className="contact-page">
                <h1>Contato</h1>
                <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            value={formData.message} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                    <button type="submit" className="submit-btn">Enviar</button>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default ContactPage;
