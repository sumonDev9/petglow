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
import dog from '../assets/choose/dog.png'
import Fluffnshine from '../assets/choose/Fluffnshine.png'
import bg from '../assets/choose/bg.png'
import edsf from '../assets/choose/edsf.png'
import aroow from '../assets/choose/aroow.png'
const WhyChooseUs = () => {
    return (
   <section className='pb-10'>
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

    {/* smapoo  */}
    <div className='relative grid grid-cols-1 md:grid-cols-3'>
        <div className='mx-auto z-10'>
            <img src={dog} className='w-full h-full ml-64 mt-14' alt="" />
        </div>
        <div className='relative'>
            <img src={bg} alt="" />
            <img src={Fluffnshine} className='h-[500px] z-10 absolute top-0 right-24' alt="" />
            <img src={edsf} className='absolute bottom-0 right-0 z-20' alt="" />
            <img src={vecteezy} className='absolute bottom-0 -left-54 z-20' alt="" />
            <img src={aroow} className='absolute top-0  z-20 -right-36' alt="" />
            <img src={aroow} className='absolute -bottom-24  z-20 -right-60' alt="" />
        </div>
        <div className='mr-32 space-y-10 mt-[170px]'>
            <div className='bg-white shadow p-6 border-2 border-[#B69659] rounded-xl'>
                <h1 className='text-2xl md:text-3xl text-[#000000]'>Choose a Natural <br />& Safe Formula</h1>
            </div>
            <div className='bg-white mt-20 shadow  p-6 border-2 border-[#B69659] rounded-xl'>
                <h1 className='text-2xl md:text-2xl text-[#000000]'>Prioritize Vet-Approved<br />& Breed-Safe Shampoos</h1>
            </div>
        </div>
    </div>
    <div className='flex justify-center items-center'>
                <button className='bg-[#AD5915DB] bg-opacity-86 text-white text-2xl cursor-pointer lg:text-3xl px-6 py-2 rounded-full'>Buy Now</button>
            </div>
   </section>
    
    );
};

export default WhyChooseUs;