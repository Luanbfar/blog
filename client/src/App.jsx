// src/App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage/HomePage";
import PostDetail from "./components/PostDetail";
import About from "./pages/About/About";
import AdminPage from "./pages/Admin/Admin";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
    </Router>
);
}

export default App;
