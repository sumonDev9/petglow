// import React from 'react';
// import moisturizes from '../assets/benefit/moisturizes.png'
// import detangles from '../assets/benefit/detangles.png'
// import Enhances from '../assets/benefit/EnhancesHair.png'
// import cleanses from '../assets/benefit/cleanses.png'
// import Group1 from '../assets/benefit/Group1.png'
// import Group3 from '../assets/benefit/Group3.png'
// import Group2 from '../assets/benefit/Group2.png'
// import path from '../assets/benefit/path.png'

// const Benefits = () => {
//     return (
//       <section className='mt-8'>
//         <div className="text-center">
//                 <h2
//                     className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#EEE6C1]"
//                     style={{
//                         textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//                         WebkitTextStroke: '1px #90610F'
//                     }}
//                 >
//                     BENEFITS
//                 </h2>
//                 <p className='border-t-4 border-[#90610F] -mt-6 mb-4'></p>
//             </div>
//         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 bg-gradient-to-r from-[#90610F] to-[#B69659] py-10 px-6'>
//           {/* Skin Health */}
//           <div className='relative'>
//               <img src={Group1} className='absolute -top-8 -left-10' alt="" />
//                <img src={moisturizes} className='mx-auto bg-white rounded-full  p-2' alt="" />
//                <h2 className='text-center text-white text-[28px] mt-2'>Skin Health</h2>
//                <img src={Group2} className='absolute -right-28 -top-5' alt="" />
//             </div>
//             {/* Detangles */}
//             <div className='relative -mt-3'>
//             <img src={detangles} className='mx-auto bg-white rounded-full  p-2' alt="" />
//             <h2 className='text-center text-white text-[28px] mt-2'>Detangles</h2>
//             <img src={Group2} className='absolute -right-28 top-6' alt="" />
//             </div>
//             {/* Moisturizes */}
//             <div className='relative'>
//             <img src={Group3} className='absolute top-0 -left-10' alt="" />
//             <img src={moisturizes} className='mx-auto bg-white rounded-full  p-2' alt="" />
//             <h2 className='text-center text-white text-[28px] mt-2'>Moisturizes</h2>
//             <img src={Group2} className='absolute -right-28 -top-5' alt="" />
//             </div>
//           {/* cleanses */}
//           <div className='relative -mt-3'>
//             <img src={cleanses} className='mx-auto bg-white rounded-full  p-2' alt="" />
//             <h2 className='text-center text-white text-[28px] mt-2 leading-none '>Cleanses and Conditions</h2>
//             <img src={Group3} className='absolute -left-5 bottom-0' alt="" />
//             <img src={Group2} className='absolute -right-28 top-6' alt="" />
//             </div>
//           {/*  Enhances */}
//           <div className='relative'>
//           <img src={path} className='absolute -right-5 -top-10' alt="" />
//             <img src={Enhances} className='mx-auto bg-white rounded-full  p-2' alt="" />
//             <h2 className='text-center text-white text-[28px] mt-2'>Enhances Hair</h2>
//             <img src={path} className='absolute right-0 -bottom-10' alt="" />
//             </div>
//         </div>
//     </section>
//     );
// };

// export default Benefits;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import moisturizes from '../assets/benefit/moisturizes.png';
import detangles from '../assets/benefit/detangles.png';
import Enhances from '../assets/benefit/EnhancesHair.png';
import cleanses from '../assets/benefit/cleanses.png';
import Group1 from '../assets/benefit/Group1.png';
import Group3 from '../assets/benefit/Group3.png';
import Group2 from '../assets/benefit/Group2.png';
import path from '../assets/benefit/path.png';

const Benefits = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className='mt-8'>
      <div className="text-center" data-aos="fade-down">
        <h2
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#EEE6C1]"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            WebkitTextStroke: '1px #90610F'
          }}
        >
          BENEFITS
        </h2>
        <p className='border-t-4 border-[#90610F] -mt-4 lg:-mt-6 mb-4'></p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 bg-gradient-to-r from-[#90610F] to-[#B69659] py-10 px-6'>

        {/* Skin Health */}
        <div className='relative' data-aos="fade-up">
          <img src={Group1} className='absolute -top-8 -left-10' alt="Decoration" />
          <img src={moisturizes} className='mx-auto bg-white rounded-full p-2' alt="Skin Health" />
          <h2 className='text-center text-white text-[28px] mt-2'>Skin Health</h2>
          <img src={Group2} className='absolute hidden lg:-right-28 lg:-top-5' alt="Decoration" />
        </div>

        {/* Detangles */}
        <div className='relative -mt-3' data-aos="fade-up" data-aos-delay="200">
          <img src={detangles} className='mx-auto bg-white rounded-full p-2' alt="Detangles" />
          <h2 className='text-center text-white text-[28px] mt-2'>Detangles</h2>
          <img src={Group2} className='absolute hidden lg:-right-28 lg:top-6' alt="Decoration" />
        </div>

        {/* Moisturizes */}
        <div className='relative' data-aos="fade-up" data-aos-delay="400">
          <img src={Group3} className='absolute top-0 -left-10' alt="Decoration" />
          <img src={moisturizes} className='mx-auto bg-white rounded-full p-2' alt="Moisturizes" />
          <h2 className='text-center text-white text-[28px] mt-2'>Moisturizes</h2>
          <img src={Group2} className='absolute hidden lg:-right-28 lg:-top-5' alt="Decoration" />
        </div>

        {/* Cleanses and Conditions */}
        <div className='relative -mt-3' data-aos="fade-up" data-aos-delay="600">
          <img src={cleanses} className='mx-auto bg-white rounded-full p-2' alt="Cleanses and Conditions" />
          <h2 className='text-center text-white text-[28px] mt-2 leading-none'>Cleanses and Conditions</h2>
          <img src={Group3} className='absolute -left-5 bottom-0' alt="Decoration" />
          <img src={Group2} className='absolute hidden lg:-right-28 lg:top-6' alt="Decoration" />
        </div>

        {/* Enhances Hair */}
        <div className='relative' data-aos="fade-up" data-aos-delay="800">
          <img src={path} className='absolute -right-5 -top-10' alt="Decoration" />
          <img src={Enhances} className='mx-auto bg-white rounded-full p-2' alt="Enhances Hair" />
          <h2 className='text-center text-white text-[28px] mt-2'>Enhances Hair</h2>
          <img src={path} className='absolute hidden lg:right-0 lg:-bottom-10' alt="Decoration" />
        </div>

      </div>
    </section>
  );
};

export default Benefits;