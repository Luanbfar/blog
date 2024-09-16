// src/App.js
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
