import React, { useEffect } from 'react';
import Fluffnshine from '../assets/feture/Fluffnshine.png';
import aloeVera from '../assets/feture/aloeVera.png';
import soap from '../assets/feture/soap.png';
import benefitArrow from '../assets/feture/letArrow.png';
import round from '../assets/feture/round.png'
import vetor from '../assets/feture/Vector.png'
import Arrow from '../assets/feture/Arow.png'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Features = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);
    return (
        <div className="relative bg-white overflow-hidden">
            {/* heading */}
            <div className="text-center mb-10" data-aos="fade-up">
                <h2
                    className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#EEE6C1]"
                    style={{
                        textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                        WebkitTextStroke: '1px #90610F'
                    }}
                >
                    <p>Four-in-one</p>
                    <p>Is the solution</p>
                </h2>
            </div>

            <div className='flex'>
               {/* left side */}
                <div className='hidden md:block top-10 left-0'>
                    <img src={soap} className='md:-mt-10 top-0 md:-ml-40 lg:-ml-28' alt="" />
                    <h1 className='absolute md:top-48 md:left-4 lg:top-60 lg:left-14 md:text-3xl lg:text-6xl text-[#90610F] z-20'>Why Choose Fluff n <br />Shine Dog Shampoo?</h1>
                </div>

                {/* right */}
                <div className=''>
                {/* round */}
                    <img src={round} className=" md:-ml-[150px] md:w-[550px] lg:ml-[0px] lg:w-[700px] h-full z-30" data-aos="zoom-in" alt="" />
                    
                    <div className='absolute top-20 ml-30 md:top-28 md:ml-[30px] lg:top-52 lg:ml-[350px]'>
                        <img src={Fluffnshine} className='w-full object-center h-[350px] lg:h-[550px]' data-aos="fade-up" alt="" />
                    </div>
                    <div className='absolute top-[220px] ml-40 md:top-[250px] md:ml-18 lg:top-[450px] lg:ml-[430px]' data-aos="fade-left">
                        <img src={aloeVera} className='w-[200px] lg:w-[300px] h-full' alt="" />
                    </div>
                   {/* content */}
                    <div className='absolute border-2 border-[#AD5915DB] p-2 md:p-4 lg:px-8 lg:py-5 rounded-[16px] top-32 right-2 md:top-20 md:right-14 lg:top-40 lg:right-32 bg-white shadow' data-aos="fade-up" >
                        <p className='text-[#000000] font-medium text-xs md:text-xl lg:text-3xl text-center'>Moisturizing <br /> Formula</p>
                    </div>
                    <img src={benefitArrow} className='hidden md:block absolute md:top-2 md:-right-24 lg:top-[103px] lg:right-14'  data-aos="fade-left" alt="" />
                    {/* DetangLing */}
                    <div className='absolute border-2 border-[#AD5915DB] p-2 md:p-4 lg:px-8 lg:py-5 rounded-[16px] right-1 bottom-48 md:right-14 lg:bottom-14 lg:right-20  md:bottom-5 bg-white shadow'  data-aos="fade-left">
                        <p className='text-[#000000] font-medium  text-xs md:text-xl lg:text-3xl  text-center'>DetangLing & <br /> Shine-Boosting</p>
                    </div>
                    <img src={Arrow} className='hidden md:block absolute md:top-0 md:-right-[150px] lg:right-0 lg:top-72 lg:bottom-0' data-aos="fade-left" alt="" />

                    <div className='absolute border-2 border-[#AD5915DB] p-2 md:p-4 lg:px-8 lg:py-5 rounded-[16px] top-[180px] left-4 md:top-[300px] md:left-[100px] lg:top-[420px] lg:left-[330px] bg-white shadow' data-aos="fade-right">
                        <p className='text-[#000000] text-xs md:text-xl lg:text-3xl text-center'>Tear-Free <br /> Formula</p>
                    </div>
                    <img src={benefitArrow} className='hidden md:-rotate-10 lg:rotate-0 md:block absolute md:top-20 md:right-[180px] lg:top-[250px] lg:right-[420px]' data-aos="fade-right"  alt="" />


                    <div className='absolute border-2 border-[#AD5915DB] p-2 md:p-4 lg:px-8 lg:py-5 rounded-[16px] left-2 bottom-36 md:bottom-14 md:left-14 lg:bottom-32 lg:left-64 bg-white shadow' data-aos="fade-up" >
                        <p className='text-[#000000] text-xs md:text-xl lg:text-3xl  text-center'>Deep Cleansing <br />& Conditioning</p>
                    </div>
                    <img src={benefitArrow} className='hidden md:block absolute md:-bottom-10 md:left-3 lg:bottom-0 lg:left-[350px] md:-rotate-25 lg:rotate-0 '  data-aos="fade-right" alt="" />

                </div>
                <div>
                    <div className="absolute top-0 right-0 w-20 h-20 md:w-36 md:h-36 lg:w-56 lg:h-56 z-0">
                        <img src={vetor} alt="" />
                    </div>
                 
                </div>
            </div>
            <div className='flex justify-center items-center relative mb-8' data-aos='fade-up'>
                <button className='bg-[#AD5915DB] bg-opacity-86 text-white text-2xl cursor-pointer lg:text-3xl px-6 py-2 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-[#8A4511]'>
                    Buy Now
                </button>
            </div>

        </div>
    );
};

export default Features;

// -------------------------------------******************************

// amar github
// import React, { useEffect } from 'react';

// import Fluffnshine from '../assets/feture/Fluffnshine.png';
// import aloeVera from '../assets/feture/aloeVera.png';
// import soap from '../assets/feture/soap.png';
// import benefitArrow from '../assets/feture/letArrow.png';
// import round from '../assets/feture/round.png'
// import vetor from '../assets/feture/Vector.png'
// import Arrow from '../assets/feture/Arow.png'
// import Aos from 'aos';
// import 'aos/dist/aos.css';
// const Features = () => {
//     useEffect(() => {
//         Aos.init({ duration: 1000 });
//     }, []);
//     return (
//         <div className="relative bg-white">
//             <div className="text-center" data-aos="fade-up">
//                 <h2
//                     className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#EEE6C1]"
//                     style={{
//                         textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//                         WebkitTextStroke: '1px #90610F'
//                     }}
//                 >
//                     <p>Four-in-one</p>
//                     <p>Is the solution</p>
//                 </h2>
//             </div>
//             {/* right side vetor */}
//             <div>
//                 <div className="absolute top-0 right-0 w-56 h-56 z-0">
//                     <img src={vetor} alt="" />
//                 </div>
//             </div>
//             <div className='flex'>
//                 {/* left */}
//                 <div className='top-0 left-0'>
//                     <img src={soap} className='-ml-28' alt="" />
//                     <h1 className='absolute top-60 left-14 lg:text-6xl text-[#90610F] z-20'>Why Choose Fluff n <br />Shine Dog Shampoo?</h1>
//                 </div>
//                 {/* right */}
//                 <div>
//                 <img src={round} className="w-[700px] h-full z-30" data-aos="zoom-in" alt="" />
//                     <div className='absolute top-40 ml-[350px]'>
//                         <img src={Fluffnshine} className='w-full h-[550px]' data-aos="fade-up" alt="" />
//                     </div>
//                     <div className='absolute top-[400px] ml-[430px]' data-aos="fade-left">
//                         <img src={aloeVera} className='w-[300px] h-full' alt="" />
//                     </div>

//                     <div className='absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] top-40 right-32 bg-white shadow' data-aos="fade-up" >
//                         <p className='text-[#000000] text-3xl text-center'>Moisturizing <br /> Formula</p>
//                     </div>
//                     <img src={benefitArrow} className='absolute top-[103px] right-14'  data-aos="fade-left" alt="" />
//                     <div className='absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] right-20  bottom-5 bg-white shadow'  data-aos="fade-left">
//                         <p className='text-[#000000] text-3xl text-center'>DetangLing & <br /> Shine-Boosting</p>
//                     </div>
//                     <img src={Arrow} className='absolute right-0 top-72 bottom-0' data-aos="fade-left" alt="" />

//                     <div className='absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] top-[420px] left-[330px] bg-white shadow' data-aos="fade-right">
//                         <p className='text-[#000000] text-3xl text-center'>Tear-Free <br /> Formula</p>
//                     </div>
//                     <img src={benefitArrow} className='absolute top-[250px] right-[420px]' data-aos="fade-right"  alt="" />


//                     <div className='absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] bottom-32 left-64 bg-white shadow' data-aos="fade-up" >
//                         <p className='text-[#000000] text-3xl text-center'>Deep Cleansing <br />& Conditioning</p>
//                     </div>
//                     <img src={benefitArrow} className='absolute bottom-0 right-[420px]'  data-aos="fade-right" alt="" />

//                 </div>

          
//             </div>
//             <div className='flex justify-center items-center' data-aos='fade-up'>
//                 <button className='bg-[#AD5915DB] bg-opacity-86 text-white text-2xl cursor-pointer lg:text-3xl px-6 py-2 rounded-full transition-transform duration-300 hover:scale-110 hover:bg-[#8A4511]'>
//                     Buy Now
//                 </button>
//             </div>

//         </div>
//     );
// };

// export default Features;


// import React from 'react';
// import vetor from '../assets/feture/Vector.png'
// import round from '../assets/feture/round.png'
// import Fluffnshine from '../assets/feture/Fluffnshine.png'
// import aloeVera from '../assets/feture/aloeVera.png';
// import benefitArrow from '../assets/feture/letArrow.png';
// import Arrow from '../assets/feture/Arow.png'
// import soap from '../assets/feture/soap.png';
// const Features = () => {
//     return (
//         <div className='relative overflow-hidden border border-green-500 bg-white'>
//                 {/* right side vetor image */}
//                 <div className="absolute top-0 right-0 w-20 h-20 md:w-36 md:h-36 lg:w-56 z-0">
//                   <img src={vetor} alt="" />
//                 </div>
//             {/* heading title */}
//             <div className="text-center" data-aos="fade-up">
//                 <h2
//                     className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#EEE6C1]"
//                     style={{
//                         textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//                         WebkitTextStroke: '1px #90610F'
//                     }}
//                 >
//                     <p>Four-in-one</p>
//                     <p>Is the solution</p>
//                 </h2>
//             </div>
//       <div className='flex'>
              
//       <div className='top-0 left-0'>
//                   <img src={soap} className='-ml-28' alt="" />
//                      <h1 className='absolute top-60 left-14 lg:text-6xl text-[#90610F] z-20'>Why Choose Fluff n <br />Shine Dog Shampoo?</h1>
//                  </div>
//             {/* main content */}
//             <div className=' flex justify-center items-center mt-10'>
//                 {/* round */}
//                 <div className=''>
//                     <img src={round} className="md:w-[550px] lg:w-[700px] h-full z-30" data-aos="zoom-in" alt="" />
//                 </div>
//                 {/* Fluffnshine */}
//                 <div className='absolute -top-3 md:top-3 md:right-60 lg:top-12 lg:right-[450px]'>
//                         <img src={Fluffnshine} className='w-full object-center h-[280px] md:h-[450px] lg:h-[550px]' data-aos="fade-up" alt="" />
//                 </div>
//                 {/* aloevera */}
//                 <div className='absolute top-28 right-10 md:top-[150px] md:right-18 lg:top-[280px] lg:right-[300px]' data-aos="fade-left">
//                     <img src={aloeVera} className='w-[150px] md:w-[300px] lg:w-[300px] h-full' alt="" />
//                  </div>
//                 {/* Moisturizing */}
//                  <div className='hidden md:block absolute border-2 border-[#AD5915DB] md:p-4 lg:px-8 lg:py-5 rounded-[16px] md:-top-10 md:right-14 lg:top-0 lg:right-32 bg-white shadow' data-aos="fade-up" >
//                 <p className='text-[#000000] font-medium text-xl lg:text-3xl text-center'>Moisturizing <br /> Formula</p>
//                 </div>
//                      <img src={benefitArrow} className='hidden md:block absolute md:-top-28 md:-right-28 lg:-top-[32px] lg:right-14'  data-aos="fade-left" alt="" />
//                      {/* DetangLing */}
//                      <div className='hidden md:block absolute border-2 border-[#AD5915DB] md:p-4 lg:px-8 lg:py-5 rounded-[16px] md:right-10 lg:right-20  bottom-5 bg-white shadow'  data-aos="fade-left">
//                          <p className='text-[#000000] font-medium text-xl lg:text-3xl  text-center'>DetangLing & <br /> Shine-Boosting</p>
//                      </div>
//                      <img src={Arrow} className='hidden md:block absolute md:top-0 md:-right-[150px] lg:right-0 lg:top-24 lg:bottom-0' data-aos="fade-left" alt="" />
//                     {/* Tear-Free  */}
//                      <div className='hidden lg:block  absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] lg:top-[300px] lg:left-[270px] bg-white shadow' data-aos="fade-right">
//                          <p className='text-[#000000] text-3xl text-center'>Tear-Free <br /> Formula</p>
//                      </div>
//                      <img src={benefitArrow} className='hidden lg:block absolute lg:top-[130px] lg:right-[470px]' data-aos="fade-right"  alt="" />
//                      {/* Deep Cleansing */}
//                      <div className='hidden lg:block absolute border-2 border-[#AD5915DB] px-8 py-5 rounded-[16px] lg:bottom-14 lg:left-52 bg-white shadow' data-aos="fade-up" >
//                          <p className='text-[#000000] text-3xl text-center'>Deep Cleansing <br />& Conditioning</p>
//                      </div>
//                      <img src={benefitArrow} className='hidden lg:block absolute lg:top-[350px] lg:right-[460px]'  data-aos="fade-right" alt="" />

//             </div>
//       </div>
//         </div>
//     );
// };

// export default Features;


