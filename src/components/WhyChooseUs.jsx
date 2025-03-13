import React from 'react';
import Vector1 from '../assets/choose/Vector1.png'
import eer from '../assets/choose/eer.png'
import choose from '../assets/choose/choose.png'
import vecteezy from '../assets/choose/vecteezy.png'
import soap from '../assets/choose/soap.png'
import eafrer from '../assets/choose/eafrer.png'
import Group from '../assets/choose/Group.png'
import VectorRight from '../assets/choose/VectorRight.png'
import Untitled from '../assets/choose/Untitled.png'
const WhyChooseUs = () => {
    return (
        <div className='relative flex flex-col md:flex-row justify-between'>
        {/* choose */}
        <div className='relative'>
           
            <div className='w-[500px] h-full relative ml-0 mt-14 z-30'>
                <img src={eer} alt="Main Image" />
                <img src={choose} className='w-[300px] absolute top-22 left-28'  alt="" />
                <img src={vecteezy} className='ml-5 -mt-5' alt="" />
                <img src={Untitled} className='absolute -right-40 bottom-32' alt="" />
            </div>
            <div className="absolute top-0 left-0 w-56 h-56 z-10">
                <img src={Vector1} alt="Background Image" />
            </div>
        </div>
    
        <div className='relative pt-10'>
          <div className='relative z-30'>
          <img src={soap} className='mt-18' alt="" />
            <img src={eafrer} className="absolute -top-20 right-28" alt="" />
            <img src={Group} className="absolute top-14 right-[108px]" alt="" />
            <img src={Group} className="absolute top-14 -left-[125px]" alt="" />
            
          </div>
            <div className="absolute  bottom-0 -right-0 w-52 h-52 z-10">
                <img src={VectorRight} alt="Background Image" />
            </div>
        </div>
    </div>
    
    );
};

export default WhyChooseUs;