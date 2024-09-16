// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Post.css'; // Certifique-se de que este arquivo CSS está no mesmo diretório

// eslint-disable-next-line react/prop-types
const Post = ({ image, title, content }) => {
    return (
        <div className="post">
            <img src={image} alt={title} className="post-image" />
            <div className="post-content">
                <h2 className="post-title">{title}</h2>
                <p className="post-text">{content}</p>
            </div>
        </div>
    );
};

export default Post;
