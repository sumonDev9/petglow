// import React, { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import wqewe from '../assets/header/wqewe.png';
// import vectorRight from '../assets/header/VectorRight.png';
// import fluffnshine from '../assets/header/Fluffnshine.png';
// import VectorLeft from '../assets/header/VectorLeft.png';
// import Group1 from '../assets/header/Group1.png';
// import Group2 from '../assets/header/Group2.png';

// const Header = () => {
//     useEffect(() => {
//         AOS.init({ duration: 1000, once: true });
//     }, []);

//     return (
//         <div className="relative min-h-screen bg-[#EEE6C1] flex flex-col md:flex-row items-center justify-between md:pb-32 lg:pb-10 px-0">
//             {/* Left Section */}
//             <div className=''>
//                 <h2 className='text-[#000000] absolute mt-10 md:text-3xl lg:text-5xl md:ml-[50px] lg:ml-[50px] lg:-mt-[100px]' data-aos="fade-right">
//                     Tangled Fur
//                 </h2>
//                 <img src={Group1} className="hidden lg:block absolute mt-0 ml-[320px] z-20" alt="" data-aos="fade-up" />

//                 <h2 className='text-[#000000] absolute md:text-3xl lg:text-5xl md:pt-[100px] md:ml-20 lg:mt-[100px] lg:ml-[100px]' data-aos="fade-right" data-aos-delay="300">
//                 Rough Fur
//                 </h2>
//                 <div className=" absolute bottom-3 left-0 lg:bottom-8 w-20 h-20 md:w-36 md:h-36 lg:w-56 lg:h-56" data-aos="fade-left">
//                     <img src={VectorLeft} alt="" />
//                 </div>
//             </div>

//             {/* Center Section */}
//             <div className='relative z-10'>
//                 <div className='-mt-28 md:mt-[60px] lg:mt-[80px]' data-aos="zoom-in">
//                     <img src={wqewe} className="rounded-full w-[250px] md:w-[300px] lg:w-[600px] h-auto object-center" alt="" />
//                     <h2 className='absolute top-14 right-14 md:top-18 md:right-12 lg:top-[180px] lg:right-[140px] md:text-2xl lg:text-[38px] text-white leading-none' data-aos="fade-left">
//                     Worried <br /> About
//                     </h2>
//                     <img className="hidden lg:block absolute top-[250px] -right-[28px]" src={Group2} alt="" data-aos="fade-up-left" />
//                     <h1 className='text-center text-lg md:text-3xl lg:text-6xl -mt-5 md:-mt-5 lg:-mt-10 text-[#90610F]' data-aos="fade-up" data-aos-delay="300">Fluff n Shine</h1>
//                 </div>

//                 <div className=" absolute top-45 bottom-0 md:top-5 md:-right-10 lg:top-[50px] lg:-right-[50px]" data-aos="fade-left" data-aos-delay="500">
//                     <h2 className="text-[#000000] text-xl md:text-3xl lg:text-5xl">Lifeless Fur</h2>
//                 </div>

//                 <div className=" absolute md:top-20 md:-right-18 lg:top-[120px] lg:-right-[190px]" data-aos="fade-left" data-aos-delay="700">
//                     <h2 className="text-xl md:text-3xl lg:text-5xl  text-[#000000]">Dull Hair</h2>
//                 </div>
//             </div>

//             {/* Right Section */}
//             <div className="z-10">
//                 <div className="absolute top-0 right-0 w-20 h-20 md:w-36 md:h-36 lg:w-56 lg:h-56 z-0" data-aos="fade-left">
//                     <img src={vectorRight} alt="" />
//                 </div>

//                 <div className="absolute bottom-0 right-2 z-20 mt-12 lg:mt-[110px]" data-aos="fade-up" data-aos-delay="400">
//                     <img src={fluffnshine} className='w-full h-[250px] md:h-[450px] lg:h-[600px]' alt="" />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Header;

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
        <div className="relative min-h-[73vh] bg-[#EEE6C1] flex flex-col md:flex-row items-center justify-between md:pb-32 lg:pb-10 px-0">
            {/* Left Section */}
            <div className=''>
                <h2 className='text-[#000000] absolute mt-10 md:text-3xl lg:text-5xl md:ml-[50px] lg:ml-[50px] lg:-mt-[100px]' data-aos="fade-right">
                    Tangled Fur
                </h2>
                <img src={Group1} className="hidden lg:block absolute mt-0 ml-[320px] z-20" alt="" data-aos="fade-up" />

                <h2 className='text-[#000000] absolute md:text-3xl lg:text-5xl md:pt-[100px] md:ml-20 lg:mt-[100px] lg:ml-[170px]' data-aos="fade-right" data-aos-delay="300">
                Rough Fur
                </h2>
                <div className=" absolute bottom-3 left-0 lg:bottom-8 w-20 h-20 md:w-36 md:h-36 lg:w-56 lg:h-56" data-aos="fade-left">
                    <img src={VectorLeft} alt="" />
                </div>
            </div>

            {/* Center Section */}
            <div className='relative z-10'>
                <div className='-mt-28 md:mt-[60px] lg:mt-[80px]' data-aos="zoom-in">
                    <img src={wqewe} className="rounded-full w-[250px] md:w-[300px] lg:w-[600px] h-auto object-center" alt="" />
                    <h2 className='absolute top-14 right-14 md:top-18 md:right-12 lg:top-[180px] lg:right-[140px] md:text-2xl lg:text-[38px] text-white leading-none' data-aos="fade-left">
                    Worried <br /> About
                    </h2>
                    <img className="hidden lg:block absolute top-[250px] -right-[28px]" src={Group2} alt="" data-aos="fade-up-left" />
                    <h1 className='text-center text-lg md:text-3xl lg:text-6xl -mt-5 md:-mt-5 lg:-mt-10 text-[#90610F]' data-aos="fade-up" data-aos-delay="300">Fluff n Shine</h1>
                </div>

                <div className=" absolute top-45 bottom-0 md:top-5 md:-right-10 lg:top-[50px] lg:-right-[50px]" data-aos="fade-left" data-aos-delay="500">
                    <h2 className="text-[#000000] text-xl md:text-3xl lg:text-5xl">Lifeless Fur</h2>
                </div>

                <div className=" absolute md:top-20 md:-right-18 lg:top-[120px] lg:-right-[190px]" data-aos="fade-left" data-aos-delay="700">
                    <h2 className="text-xl md:text-3xl lg:text-5xl  text-[#000000]">Dull Hair</h2>
                </div>
            </div>

            {/* Right Section */}
            <div className="z-10">
                <div className="absolute top-0 right-0 w-20 h-20 md:w-36 md:h-36 lg:w-56 lg:h-56 z-0" data-aos="fade-left">
                    <img src={vectorRight} alt="" />
                </div>

                <div className="absolute bottom-0 right-2 z-20 mt-12 lg:mt-[110px]" data-aos="fade-up" data-aos-delay="400">
                    <img src={fluffnshine} className='w-full h-[250px] md:h-[450px] lg:h-[600px]' alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;
