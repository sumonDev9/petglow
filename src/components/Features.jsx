import React, { useEffect } from 'react';
import Fluffnshine from '../assets/feture/Fluffnshine.png';
import aloeVera from '../assets/feture/aloeVera.png';
import soap from '../assets/feture/soap.png';
import benefitArrow from '../assets/feture/letArrow.png';
import round from '../assets/feture/round.png'
import vetor from '../assets/feture/Vector.png'
import Arrow from '../assets/feture/Arow.png'
import Aos from 'aos';
const Features = () => {
    useEffect(() => {
        Aos.init({ duration: 1300 });
    }, []);
    return (
        <div className="relative bg-white">

            {/* Section title */}
            <h2 data-aos="fade-up"  className="text-center text-2xl md:text-3xl lg:text-4xl font-bold -pt-10 text-[#8A6D2F] mb-6 md:mb-10">
                <p>Four-in-one</p>
                <p>Is the solution</p>
            </h2>
            <div className='flex'>
                <div className='top-0 left-0'>
                    <img src={soap} className='-ml-28' alt="" />
                    <h1 className='absolute top-60 left-14 lg:text-6xl text-[#90610F]'>Why Choose Fluff n <br />Shine Dog Shampoo?</h1>
                </div>
                <div>
                
                    <img src={round} className="w-[700px] h-full" data-aos="zoom-in" alt="" />
                    
                    <div className='absolute top-40 ml-[350px]'>
                        <img src={Fluffnshine} className='w-full h-[550px]' data-aos="fade-up" alt="" />
                    </div>
                    <div className='absolute top-[400px] ml-[430px]' data-aos="fade-left">
                        <img src={aloeVera} className='w-[300px] h-full' alt="" />
                    </div>

                    <div className='absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] top-40 right-32 bg-white shadow' data-aos="fade-up" >
                        <p className='text-[#000000] text-3xl text-center'>Moisturizing <br /> Formula</p>
                    </div>
                    <img src={benefitArrow} className='absolute top-[103px] right-14'  data-aos="fade-left" alt="" />
                    <div className='absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] right-20  bottom-5 bg-white shadow'  data-aos="fade-left">
                        <p className='text-[#000000] text-3xl text-center'>DetangLing & <br /> Shine-Boosting</p>
                    </div>
                    <img src={Arrow} className='absolute right-0 top-72 bottom-0' data-aos="fade-left" alt="" />

                    <div className='absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] top-[420px] left-[330px] bg-white shadow' data-aos="fade-right">
                        <p className='text-[#000000] text-3xl text-center'>Tear-Free <br /> Formula</p>
                    </div>
                    <img src={benefitArrow} className='absolute top-[250px] right-[420px]' data-aos="fade-right"  alt="" />


                    <div className='absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] bottom-32 left-64 bg-white shadow' data-aos="fade-up" >
                        <p className='text-[#000000] text-3xl text-center'>Deep Cleansing <br />& Conditioning</p>
                    </div>
                    <img src={benefitArrow} className='absolute bottom-0 right-[420px]'  data-aos="fade-right" alt="" />

                </div>
                <div>
                    <div className="absolute top-0 right-0 w-56 h-56 z-0">
                        <img src={vetor} alt="" />
                    </div>
                 
                </div>
            </div>
            <div className='flex justify-center items-center' data-aos="zoom-in">
                <button className='bg-[#AD5915DB] bg-opacity-86 text-white lg:text-4xl px-6 py-2 rounded-full'>Buy Now</button>
            </div>

        </div>
    );
};

export default Features;