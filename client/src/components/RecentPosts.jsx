// eslint-disable-next-line no-unused-vars
import React from "react";
import "./RecentPosts.css";

const RecentPosts = () => {
  const posts = [
    {
      title: "Dominando Elementos de UI: Um Guia Prático para Designers",
      author: "Jennifer Taylor",
      time: "3 min de leitura",
      imageUrl: "https://placehold.co/300x200",
      description:
        "Mergulhe no mundo das interfaces de usuário com nossos guias especializados, últimas tendências e dicas práticas.",
    },
    {
      title:
        "Criando Experiências Sem Costura: A Arte do Design de UI Intuitivo",
      author: "Jennifer Taylor",
      time: "5 min de leitura",
      imageUrl: "https://placehold.co/300x200",
      description:
        "Explore os princípios e técnicas que orientam o design de UI centrado no usuário, garantindo uma experiência intuitiva e sem costura.",
    },
    {
      title: "Além da Estética: O Poder do Design Emocional de UX",
      author: "Ryan A.",
      time: "2 min de leitura",
      imageUrl: "https://placehold.co/300x200",
      description:
        "Mergulhe no reino do design emocional e descubra como incorporar empatia e psicologia pode criar interfaces mais envolventes.",
    },
  ];

  return (
    <div className="recent-posts">
      <h3>Posts recentes</h3>
      <div className="posts-container">
        {posts.map((post, index) => (
          <div key={index} className="post-card">
            <img src={post.imageUrl} alt="Post" className="post-image" />
            <div className="post-content">
              <h4 className="post-title">{post.title}</h4>
              <p className="post-description">{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentPosts;
