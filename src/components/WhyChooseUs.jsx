// import React from 'react';
// import Vector1 from '../assets/choose/Vector1.png'
// import eer from '../assets/choose/eer.png'
// import choose from '../assets/choose/choose.png'
// import vecteezy from '../assets/choose/vecteezy.png'
// import soap from '../assets/choose/soap.png'
// import eafrer from '../assets/choose/eafrer.png'
// import Group from '../assets/choose/Group.png'
// import VectorRight from '../assets/choose/VectorRight.png'
// import Untitled from '../assets/choose/Untitled.png'
// import dog from '../assets/choose/dog.png'
// import Fluffnshine from '../assets/choose/Fluffnshine.png'
// import bg from '../assets/choose/bg.png'
// import edsf from '../assets/choose/edsf.png'
// import aroow from '../assets/choose/aroow.png'
// const WhyChooseUs = () => {
//     return (
//    <section className='pb-10'>
//          <div className='relative flex flex-col md:flex-row justify-between'>
//         {/* choose */}
//         <div className='relative'>
           
//             <div className='w-[500px] h-full relative ml-0 mt-14 z-30'>
//                 <img src={eer} alt="Main Image" />
//                 <img src={choose} className='w-[300px] absolute top-22 left-28'  alt="" />
//                 <img src={vecteezy} className='ml-5 -mt-5' alt="" />
//                 <img src={Untitled} className='absolute -right-40 bottom-32' alt="" />
//             </div>
//             <div className="absolute top-0 left-0 w-56 h-56 z-10">
//                 <img src={Vector1} alt="Background Image" />
//             </div>
//         </div>
    
//         <div className='relative pt-10'>
//           <div className='relative z-30'>
//           <img src={soap} className='mt-18' alt="" />
//             <img src={eafrer} className="absolute -top-20 right-28" alt="" />
//             <img src={Group} className="absolute top-14 right-[108px]" alt="" />
//             <img src={Group} className="absolute top-14 -left-[125px]" alt="" />
            
//           </div>
//             <div className="absolute  bottom-0 -right-0 w-52 h-52 z-10">
//                 <img src={VectorRight} alt="Background Image" />
//             </div>
//         </div>
//     </div>

//     {/* smapoo  */}
//     <div className='relative grid grid-cols-1 md:grid-cols-3'>
//         <div className='mx-auto z-10'>
//             <img src={dog} className='w-full h-full ml-64 mt-14' alt="" />
//         </div>
//         <div className='relative'>
//             <img src={bg} alt="" />
//             <img src={Fluffnshine} className='h-[500px] z-10 absolute top-0 right-24' alt="" />
//             <img src={edsf} className='absolute bottom-0 right-0 z-20' alt="" />
//             <img src={vecteezy} className='absolute bottom-0 -left-54 z-20' alt="" />
//             <img src={aroow} className='absolute top-0  z-20 -right-36' alt="" />
//             <img src={aroow} className='absolute -bottom-24  z-20 -right-60' alt="" />
//         </div>
//         <div className='mr-32 space-y-10 mt-[170px]'>
//             <div className='bg-white shadow p-6 border-2 border-[#B69659] rounded-xl'>
//                 <h1 className='text-2xl md:text-3xl text-[#000000]'>Choose a Natural <br />& Safe Formula</h1>
//             </div>
//             <div className='bg-white mt-20 shadow  p-6 border-2 border-[#B69659] rounded-xl'>
//                 <h1 className='text-2xl md:text-2xl text-[#000000]'>Prioritize Vet-Approved<br />& Breed-Safe Shampoos</h1>
//             </div>
//         </div>
//     </div>
//     <div className='flex justify-center items-center'>
//                 <button className='bg-[#AD5915DB] bg-opacity-86 text-white text-2xl cursor-pointer lg:text-3xl px-6 py-2 rounded-full'>Buy Now</button>
//             </div>
//    </section>
    
//     );
// };

// export default WhyChooseUs;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Vector1 from '../assets/choose/Vector1.png';
import eer from '../assets/choose/eer.png';
import choose from '../assets/choose/choose.png';
import vecteezy from '../assets/choose/vecteezy.png';
import soap from '../assets/choose/soap.png';
import eafrer from '../assets/choose/eafrer.png';
import Group from '../assets/choose/Group.png';
import VectorRight from '../assets/choose/VectorRight.png';
import Untitled from '../assets/choose/Untitled.png';
import dog from '../assets/choose/dog.png';
import Fluffnshine from '../assets/choose/Fluffnshine.png';
import bg from '../assets/choose/bg.png';
import edsf from '../assets/choose/edsf.png';
import aroow from '../assets/choose/aroow.png';

const WhyChooseUs = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className='pb-10'>
            <div className='relative flex flex-col md:flex-row justify-between'>
                {/* Choose Section */}
                <div className='relative' data-aos='fade-right'>
                    <div className='w-[300px] lg:w-[500px] h-full relative ml-0  md:mt-14 z-30'>
                        <img src={eer} alt='Main Image' />
                        <img src={choose} className='w-[180px] lg:w-[300px] absolute top-12 left-18 md:top-12  md:left-18 lg:top-22 lg:left-28' alt='' />
                        <img src={vecteezy} className='hidden md:block ml-5 -mt-5' alt='' />
                        <img src={Untitled} className='absolute hidden md:block -right-40 bottom-32' alt='' />
                    </div>
                    <div className='absolute top-0 left-0  w-20 h-20 md:w-36 md:h-36 lg:w-56 z-10'>
                        <img src={Vector1} alt='Background Image' />
                    </div>
                </div>

                {/* Soap Section */}
                <div className='relative md:pt-10' data-aos='fade-left'>
                    <div className='relative z-30'>
                        <img src={soap} className='md:w-[400px] w-full mt-18' alt='' />
                        <img src={eafrer} className='absolute  -top-5 right-0 md:-top-20 md:right-5 lg:-top-20 lg:right-28' alt='' />
                        <img src={Group} className='absolute w-[120px] md:w-[130px] top-[80px] -right-2 md:top-6 md:right-3 lg:top-7 lg:right-[101px]' alt='' />
                        <img src={Group} className='absolute w-[120px] md:w-[130px] top-[75px] -left-3 md:top-6 md:-left-9 lg:top-7 lg:-left-[125px]' alt='' />
                    </div>
                    <div className='absolute bottom-0 lg:bottom-28 -right-0  w-24 h-24 md:w-36 md:h-36 lg:w-56 z-10'>
                        <img src={VectorRight} alt='Background Image' />
                    </div>
                </div>
            </div>

            {/* Shampoo Section */}
            <div className='relative grid grid-cols-1 md:grid-cols-3'>
                <div className=' mx-auto hidden md:block' data-aos='zoom-in'>
                    <img src={dog} className='w-full h-full z-10  md:ml-40 md:mt-18 lg:ml-64 lg:mt-14' alt='' />
                </div>
                <div className='relative' data-aos='fade-up'>
                    <img src={bg} alt='' />
                    <img src={Fluffnshine} className='top-0 right-24 h-[350px] lg:h-[500px] z-20 absolute md:top-0 md:right-10 lg:top-0 lg:right-24' alt='' />
                    <img src={edsf} className='absolute hidden bottom-0 right-0 z-20' alt='' />
                    <img src={vecteezy} className='absolute hidden lg:block bottom-0 -left-54 z-20' alt='' />
                    <img src={aroow} className='hidden md:block absolute md:-top-12 md:-right-32 lg:-top-22 z-20 lg:-right-48' alt='' />
                    <img src={aroow} className='hidden md:block absolute md:-bottom-10 md:-right-32  lg:-bottom-5 z-20 lg:-right-48' alt='' />
                </div>

                <div className='md:mr-5 lg:mr-32 space-y-10 md:mt-[100px] lg:mt-[170px]'>
                    <div className='hidden md:block bg-white shadow p-2 lg:p-6 border-2 border-[#B69659] rounded-xl' data-aos='flip-left'>
                        <h1 className='text-xs md:text-lg lg:text-3xl text-[#000000]'>Choose a Natural <br />& Safe Formula</h1>
                    </div>
                    <div className='hidden md:block bg-white mt-20 shadow p-2 lg:p-6 border-2 border-[#B69659] rounded-xl' data-aos='flip-right'>
                        <h1 className='text-lg lg:text-3xl text-[#000000]'>Prioritize Vet-Approved<br />& Breed-Safe Shampoos</h1>
                    </div>
                </div>
            </div>

            {/* Buy Now Button */}
            <div className='flex justify-center items-center relative' data-aos='fade-up'>
                <button className='bg-[#AD5915DB] bg-opacity-86 text-white text-2xl cursor-pointer lg:text-3xl px-6 py-2 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-[#8A4511]'>
                    Buy Now
                </button>
            </div>
        </section>
    );
};

export default WhyChooseUs;
