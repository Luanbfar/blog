// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import "./PostDetail.css"; // Crie este arquivo para estilizar a página de detalhes
import Header from "./Header";
import Footer from "./Footer";

// Dados mockados
const posts = [
  {
    id: "1",
    image: "https://via.placeholder.com/800x400?text=Post+Image+1",
    title: "Primeiro Post",
    content: `

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam convallis neque orci, sed ultricies urna interdum ac. Praesent id iaculis turpis. Quisque convallis faucibus dictum. In ac dolor eu dui ullamcorper aliquam nec non quam. Aliquam non bibendum elit, sit amet vestibulum ex. Etiam gravida iaculis tincidunt. Nam in tristique purus. Nullam placerat enim at ipsum fringilla, in eleifend tellus convallis. Proin lorem velit, efficitur vel tellus ut, aliquam facilisis tellus. Aliquam turpis leo, egestas bibendum elementum et, consequat faucibus nunc.

Donec aliquam laoreet nulla, vitae efficitur odio ultrices ullamcorper. Maecenas ut tincidunt tortor, vitae pellentesque leo. Etiam diam neque, gravida vitae tempor quis, ultricies vel quam. Aliquam erat volutpat. Donec facilisis vehicula ante, sed gravida purus molestie nec. Suspendisse in facilisis ante, vitae consectetur neque. Mauris nec tortor semper, posuere mauris non, scelerisque elit.

Ut ac urna est. Ut semper enim eget turpis porta, nec volutpat nulla consectetur. Vestibulum rutrum sapien nec dolor dignissim, vitae placerat justo euismod. Fusce tortor risus, porta vehicula lectus eget, gravida rhoncus tortor. Quisque molestie arcu vulputate est tempor pellentesque. Phasellus sed dapibus odio. Etiam non congue nisl. Pellentesque id orci lorem. Donec elementum tincidunt tempor. Aliquam sodales placerat molestie. Vestibulum vitae aliquam enim. Nunc blandit vulputate ipsum, ut dignissim odio pulvinar sit amet.

Integer gravida porttitor ante vitae egestas. Sed a lorem est. Praesent vel dignissim quam. Sed nec nibh nec velit vehicula ornare lobortis quis tellus. Ut arcu odio, lacinia at risus sed, lobortis sollicitudin magna. Quisque congue ultrices libero, a iaculis dolor interdum sit amet. Pellentesque sit amet ante a ligula convallis ornare. Mauris vitae lorem ut orci pellentesque fermentum. Aliquam lacinia metus in auctor mattis. Nullam eu est sed diam faucibus interdum. In hac habitasse platea dictumst. In ornare est quis libero iaculis, elementum tempor nisl euismod. Morbi vel varius ex, id egestas lacus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce tempus sem eu odio suscipit, ut congue felis facilisis.

Fusce dapibus tincidunt fermentum. Nulla cursus odio elit, non pretium diam euismod at. In posuere mi sed turpis sollicitudin, ac tempor arcu varius. Vivamus aliquet ultrices lacus, ac ornare nunc vulputate eget. Sed a posuere lorem, id accumsan nulla. Donec semper tincidunt enim. Morbi vulputate, felis ac congue lobortis, sapien orci posuere lacus, quis eleifend dolor nunc eget augue. In ullamcorper condimentum fermentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In ornare enim libero. Curabitur eget tempus justo, in mattis lorem. Mauris bibendum accumsan augue, in ultrices ligula condimentum at. Sed iaculis leo sit amet sapien mattis interdum. Nulla placerat nulla eros, ut scelerisque massa accumsan ut. Sed vitae velit mattis, maximus est sit amet, tincidunt ex. Nulla consequat pulvinar eros, id varius erat facilisis id. `,
  },
  {
    id: "2",
    image: "https://via.placeholder.com/800x400?text=Post+Image+2",
    title: "Segundo Post",
    content: "Conteúdo detalhado do segundo post.",
  },
  {
    id: "3",
    image: "https://via.placeholder.com/800x400?text=Post+Image+3",
    title: "Terceiro Post",
    content: "Conteúdo detalhado do terceiro post.",
  },
];

const PostDetail = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>Post não encontrado</div>;
  }

  return (
    <>
      <Header />
      <div className="post-detail">
        <img src={post.image} alt={post.title} className="post-detail-image" />
        <h1 className="post-detail-title">{post.title}</h1>
        <p className="post-detail-content">{post.content}</p>
      </div>
      <Footer />
    </>
  );
};

export default PostDetail;
