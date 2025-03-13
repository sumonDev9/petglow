import React from 'react';
import Header from '../components/Header';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import Safe from '../components/Safe';
import ClientSay from '../components/ClientSay';
import WhyChooseUs from '../components/WhyChooseUs';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Features></Features>
           <Benefits></Benefits>
           <Safe></Safe>
           <WhyChooseUs></WhyChooseUs>
           <ClientSay></ClientSay> 
        </div>
    );
};

export default Home;