import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Safe from '../components/Safe';
import ClientSay from '../components/ClientSay';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Features></Features>
           <Benefits></Benefits>
           <Safe></Safe>
           <ClientSay></ClientSay>
        </div>
    );
};

export default Home;