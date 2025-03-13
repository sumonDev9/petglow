import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import wqewe from '../assets/header/wqewe.png';
import vectorRight from '../assets/header/VectorRight.png';
import fluffnshine from '../assets/header/Fluffnshine.png';
import VectorLeft from '../assets/header/VectorLeft.png';
import Group1 from '../assets/header/Group1.png';
import Group2 from '../assets/header/Group2.png';

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <div className="relative bg-[#EEE6C1] flex flex-col md:flex-row items-center justify-between pb-10">
            {/* Left Section */}
            <div>
                <h2 className='text-[#000000] absolute text-5xl ml-[130px] -mt-[100px]' data-aos="fade-right">Tangled Fur</h2>
                <img src={Group1} className="absolute mt-0 ml-[320px] z-20" alt="" data-aos="fade-up" />
                <h2 className='text-[#000000] absolute text-5xl mt-[130px] ml-[150px]' data-aos="fade-right" data-aos-delay="300">Rough Fur</h2>
                <div className="absolute bottom-8 left-0 w-56 h-56" data-aos="fade-left">
                    <img src={VectorLeft} alt="" />
                </div>
            </div>

            {/* Center Section */}
            <div className='relative z-10'>
                <div className='mt-[80px]' data-aos="zoom-in">
                    <img src={wqewe} className="rounded-full w-[600px] h-auto object-center" alt="" />
                    <h2 className='absolute top-[180px] right-[140px] text-[38px] text-white leading-none' data-aos="fade-left">Worried <br /> About</h2>
                    <img className="absolute top-[250px] -right-[10px]" src={Group2} alt="" data-aos="fade-up-left" />
                    <h1 className='text-center text-6xl -mt-10 text-[#90610F]' data-aos="fade-up" data-aos-delay="300">Fluff n Shine</h1>
                </div>

                <div className="absolute top-[50px] -right-[50px]" data-aos="fade-left" data-aos-delay="500">
                    <h2 className="font-black text-[#000000] text-5xl">Lifeless Fur</h2>
                </div>

                <div className="absolute top-[120px] -right-[190px]" data-aos="fade-left" data-aos-delay="700">
                    <h2 className="text-5xl font-black text-[#000000]">Dull Hair</h2>
                </div>
            </div>

            {/* Right Section */}
            <div className="z-10">
                <div className="absolute top-0 right-0 w-56 h-56 z-0" data-aos="fade-left">
                    <img src={vectorRight} alt="" />
                </div>

                <div className="absolute top-0 right-4 z-20 mt-[110px]" data-aos="fade-up" data-aos-delay="400">
                    <img src={fluffnshine} className='w-full h-[600px]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
