import React from 'react';
import wqewe from '../assets/header/wqewe.png'
import vectorRight from '../assets/header/VectorRight.png'
import fluffnshine from '../assets/header/Fluffnshine.png'
import VectorLeft from '../assets/header/VectorLeft.png'
import Group1 from '../assets/header/Group1.png'
import Group2 from '../assets/header/Group2.png'
const Header = () => {
    return (
        <div className="relative bg-[#EEE6C1] flex items-center justify-between pb-10">
        <div className=''>
            <h2 className='text-[#000000] absolute text-5xl ml-[130px] -mt-[100px]'>Tangled Fur</h2>
            <img src={Group1} className="absolute mt-0 ml-[320px] z-20" alt="" />
            <h2 className='text-[#000000] absolute text-5xl mt-[130px] ml-[150px]'>Rough Fur</h2>
            <div className="absolute bottom-8 left-0 w-56 h-56">
                <img src={VectorLeft} alt="" />
            </div>

        </div>
        <div className='relative z-10'>
            <div className='mt-[80px]'>
            <img src={wqewe}  className="rounded-full w-[600px] h-auto object-center"  alt="" />
            <h2 className='absolute top-[180px] right-[140px] text-[38px] text-white leading-none'>Worried <br /> About</h2>
            <img className="absolute top-[250px] -right-[10px]" src={Group2} alt="" />
            <h1 className='text-center text-6xl -mt-10 text-[#90610F]'>Fluff n Shine </h1>
            </div>
              <div className="absolute top-[50px] -right-[50px]">
                 <h2 className="font-black text-[#000000] text-5xl">Lifeless Fur</h2>
               </div>
            <div className="absolute top-[120px] -right-[190px]">
               <h2 className="text-5xl font-black text-{#000000}">Dull Hair</h2>
              </div>
            
        </div>

        {/* Image Section */}
        <div className="z-10">
            {/* First Image (Bottom Layer) */}
            <div className="absolute top-0 right-0 w-56 h-56 z-0">
                <img src={vectorRight} alt="" />
            </div>

            {/* Second Image (Top Layer) */}
            <div className="absolute top-0 right-4 z-20  mt-[110px]">
                <img src={fluffnshine} className='w-full h-[600px]' alt="" />
            </div>
        </div>
    </div>
            
       

    );
};

export default Header;