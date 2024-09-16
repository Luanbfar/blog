// eslint-disable-next-line no-unused-vars
import React from "react";
import "./OtherPosts.css";

const OtherPosts = () => {
  const posts = [
    {
      title: "Revolucionando Indústrias através da Implementação de SaaS",
      imageUrl: "https://placehold.co/600x400?text=Post+1",
    },
    {
      title: "Sinergizando SaaS e Design UX para Elevar Experiências Digitais",
      imageUrl: "https://placehold.co/600x400?text=Post+2",
    },
    {
      title: "Navegando pelas Águas do SaaS com UI e UX Intuitivos",
      imageUrl: "https://placehold.co/600x400?text=Post+3",
    },
    {
      title: "Esculpindo o Sucesso do SaaS - A Arte do Design UI e UX",
      imageUrl: "https://placehold.co/600x400?text=Post+4",
    },
    {
      title: "Transformando Plataformas SaaS - Uma Odisseia no Design UI/UX",
      imageUrl: "https://placehold.co/600x400?text=Post+5",
    },
  ];

  return (
    <div className="other-posts">
      <h3>Outros Posts recomendados</h3>
      <ul>
        {posts.map((post, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src={post.imageUrl}
              alt={`Image for ${post.title}`}
              style={{ width: "100px", height: "auto", marginRight: "10px" }}
            />
            {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OtherPosts;
