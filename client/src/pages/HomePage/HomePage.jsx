// eslint-disable-next-line no-unused-vars
import React from "react";
import "./HomePage.css";
import FeaturedPost from "../../components/FeaturedPost";
import OtherPosts from "../../components/OtherPosts";
import RecentPosts from "../../components/RecentPosts";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="homepage">
        <div className="top-section">
          <FeaturedPost />
          <OtherPosts />
        </div>
        <RecentPosts />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
