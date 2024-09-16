// eslint-disable-next-line no-unused-vars
import React from "react";
import "./About.css"; // Crie este arquivo para estilizar a página About
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <div className="about-page">
        <h1>Sobre Nós</h1>
        <p>
          Bem-vindo à nossa página &quot;Sobre Nós&quot;! Aqui você pode encontrar informações sobre nossa equipe,
          nossa missão e os valores que defendemos. Nosso objetivo é proporcionar o melhor conteúdo e a
          melhor experiência para nossos leitores. 
        </p>
        <p>
          Estamos comprometidos com a qualidade e a transparência em tudo o que fazemos. Se você tiver
          alguma dúvida ou feedback, não hesite em entrar em contato conosco. Agradecemos o seu apoio
          e esperamos que você aproveite o nosso conteúdo!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
