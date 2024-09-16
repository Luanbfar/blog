// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomePage.css';
import FeaturedPost from '../../components/FeaturedPost';
import OtherPosts from '../../components/OtherPosts';
import RecentPosts from '../../components/RecentPosts';

const HomePage = () => {
    return (
        <div className="homepage">
            <div className="top-section">
                <FeaturedPost />
                <OtherPosts />
            </div>
            <RecentPosts />
        </div>
    );
}

export default HomePage;
