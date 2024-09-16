// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Admin.css"; // Estilização personalizada
import Header from "../../components/Header";
import Footer from "../../components/Footer";

// Dados mockados
const initialPosts = [
  {
    id: "1",
    title: "Primeiro Post",
    content: "Conteúdo detalhado do primeiro post.",
  },
  {
    id: "2",
    title: "Segundo Post",
    content: "Conteúdo detalhado do segundo post.",
  },
  {
    id: "3",
    title: "Terceiro Post",
    content: "Conteúdo detalhado do terceiro post.",
  },
];

const AdminPage = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedPost, setSelectedPost] = useState(null);
  const [editorContent, setEditorContent] = useState("");
  const [title, setTitle] = useState("");
  const [isEditorOpen, setIsEditorOpen] = useState(false); // Controle do modal

  const handleEdit = (post) => {
    setSelectedPost(post);
    setEditorContent(post.content);
    setTitle(post.title);
    setIsEditorOpen(true); // Abre o popup
  };

  const handleDelete = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const handleSave = () => {
    if (selectedPost) {
      // Editar post existente
      setPosts(
        posts.map((post) =>
          post.id === selectedPost.id
            ? { ...post, title: title, content: editorContent }
            : post
        )
      );
    } else {
      // Criar novo post
      const newPost = {
        id: (posts.length + 1).toString(),
        title: title,
        content: editorContent,
      };
      setPosts([...posts, newPost]);
    }
    // Limpar os campos
    setSelectedPost(null);
    setEditorContent("");
    setTitle("");
    setIsEditorOpen(false); // Fecha o popup
  };

  const handleCreate = () => {
    setSelectedPost(null);
    setEditorContent("");
    setTitle("");
    setIsEditorOpen(true); // Abre o popup
  };

  const handleCloseEditor = () => {
    setIsEditorOpen(false);
  };

  return (
    <>
      <Header />
      <div className="admin-page">
        <h1>Gerenciar Posts</h1>
        <button className="create-btn" onClick={handleCreate}>
          Criar Novo Post
        </button>
        <div className="posts-list">
          <h2>Posts Existentes</h2>
          {posts.map((post) => (
            <div key={post.id} className="post-item">
              <h3>{post.title}</h3>
              <div>
                <button className="edit-btn" onClick={() => handleEdit(post)}>
                <i className="bi bi-pen"></i>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(post.id)}
                >
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
        {isEditorOpen && (
          <div className="editor-popup">
            <div className="editor-content">
              <h2>{selectedPost ? "Editar Post" : "Criar Novo Post"}</h2>
              <div className="input-field">
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Título do post"
                  className="title-input"
                />
                <div className="image-input">
                  <label htmlFor="imagem">Imagem</label>
                  <input type="file" name="imagem" />
                </div>
              </div>
              <ReactQuill
                value={editorContent}
                onChange={setEditorContent}
                className="editor"
              />
              <button className="save-btn" onClick={handleSave}>
                Salvar
              </button>
              <button className="close-btn" onClick={handleCloseEditor}>
                Fechar
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default AdminPage;
