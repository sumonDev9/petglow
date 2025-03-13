import React from 'react';
import Group from '../assets/safe/Group3.png'
import Vector from '../assets/safe/Vector.png'
import bg from '../assets/safe/bg.png'
import Fluffnshine from '../assets/safe/Fluffnshine.png'
import yorkshire from '../assets/safe/yorkshire.png'
import Frame from '../assets/safe/Frame.png'
import Frame1 from '../assets/safe/Frame1.png'
import react from '../assets/safe/react.png'
import pata from '../assets/safe/pata.png'
import ph from '../assets/safe/ph.png'
import Untitled1 from '../assets/safe/Untitled1.png'
import sded from '../assets/safe/sded.png'

const Safe = () => {
    return (
        <div 
        className='grid grid-cols-1 lg:grid-cols-3 py-10 bg-gradient-to-r from-[#ddc8a1] to-[#ffffff]' 
    >
        {/* natural */}
        <div className='space-y-7 mx-auto'>
            <div>
            <img src={Group}  alt="Group3" />
            </div>
            <div className='relative bg-white rounded-full'>
                <img src={Vector} alt="Vector" />
                <img src={Frame} className='absolute top-2 right-3' alt="Vector" />
                <img src={react} className='absolute top-[68px]  right-14' alt="" />
            </div>
            <div className='relative bg-white rounded-full'>
                <img src={Vector} alt="Vector" />
                <img src={Frame1} className='absolute top-2 right-13' alt="Vector" />
                <img src={pata} className='absolute top-[58px] right-10' alt="" />
            </div>
            <img src={Group} className='absolute ml-[300px] text-amber-400' alt="Group3" />
        </div>
        {/* smapoo */}
        <div className='relative'>
            <img src={bg} alt="" />
            <img className='absolute top-6 right-24 h-[600px]' src={Fluffnshine} alt="" />
            <img src={yorkshire} className='absolute top-28 -right-44' alt="" />
        </div>
        {/* safe */}
        <div className='space-y-2 mx-auto'>
           <h2 className='text-[#855605] text-7xl text leading-none'>100% <span className='text-7xl'>SAFE</span><br /><span className='text-[#000000] font-sans text-5xl'>FOR YOUR DOC</span></h2> 
           <div className='relative '>
           <img src={Untitled1} className='mx-auto' alt="" />
            <img  src={sded} className='absolute top-[83px] right-[94px]' alt="" />
           </div>
           {/* <img src={Group} className='absolute top-0 right-0' alt="Group" /> */}
           <img src={ph} className='mx-auto' alt="" />
        </div>
    </div>
    );
};

export default Safe;