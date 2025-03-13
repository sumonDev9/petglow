import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Safe from '../components/Safe';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Features></Features>
           <Benefits></Benefits>
           <Safe></Safe>
        </div>
    );
};

export default Home;