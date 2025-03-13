// import React from 'react';
// import { FaStar } from 'react-icons/fa';
// import dog from '../assets/client/dog.png'
// const ClientSay = () => {
//     return (
//         <section className='bg-[#EEE6C1] py-10 px-5'>
//             {/* heading */}
//             <div className="text-center mb-8">
//                 <h2
//                     className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#90610F]"
//                     style={{
//                         textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
//                         WebkitTextStroke: '1px #ffffff'
//                     }}
//                 >
//                     What Our Clients Say
//                 </h2>
//             </div>
//             {/* content */}
//             <div className='flex justify-between'>
//                 <div className='space-y-5 relative z-0'>
//                     {/* Suhad Ajmani */}
//                     <div className='p-5 bg-white shadow space-y-2 rounded-lg mt-14 -mr-20 -rotate-2'>
//                         {/* name */}
//                         <h2>Suhad Ajmani</h2>
//                         {/* rating */}
//                         <div className='flex gap-1 text-yellow-600'>
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         </div>
//                         {/* sms */}
//                         <p className='text-[#000000] font-sans font-bold'>
//                         "Finally, a shampoo that actually makes my dog's coat look healthy and luxurious!"
//                         </p>
//                     </div>
//                     {/* Amazon Customer */}
//                     <div className='p-5 bg-white shadow space-y-2 rounded-lg mt-8 left-0 z-50 -mr-18 rotate-2'>
//                         {/* name */}
//                         <h2>Amazon Customer</h2>
//                         {/* rating */}
//                         <div className='flex gap-1 text-yellow-600'>
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         </div>
//                         {/* sms */}
//                         <p className='text-[#000000] font-sans font-bold'>
//                         "Fluff N Shine turned my dog's dull fur into a glossy, show-ready coat in one wash!"                        </p>
//                     </div>
//                     {/* Deep Barman */}
//                     <div className='p-5 bg-white shadow space-y-2 rounded-lg absolute z-10 -mr-20 bottom-0'>
//                         {/* name */}
//                         <h2>Deep Barman</h2>
//                         {/* rating */}
//                         <div className='flex gap-1 text-yellow-600'>
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         </div>
//                         {/* sms */}
//                         <p className='text-[#000000] font-sans font-bold'>
//                         "My Golden Retriever looks like a walking cloud—soft, fluffy, and gorgeous!"
//                         </p>
//                     </div>
//                 </div>
//                 {/* image */}
//                 <div className='z-20 relative'>
//                     <img src={dog} alt="" />
//                 </div>
//                 <div className='space-y-5 relative'>
//                     {/* Fania */}
//                     <div className='p-5 bg-white shadow space-y-2 rounded-lg rotate-4 -ml-20'>
//                         {/* name */}
//                         <h2>Fania</h2>
//                         {/* rating */}
//                         <div className='flex gap-1 text-yellow-600'>
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         </div>
//                         {/* sms */}
//                         <p className='text-[#000000] font-sans font-bold'>
//                         "It's like a spa day for my pup—smells amazing and leaves the fur super smooth!"
//                         </p>
//                     </div>
//                     {/* Vaibhav Bhatt */}
//                     <div className='p-5 bg-white shadow space-y-2 rounded-lg absolute -ml-20 z-50 right-0 mt-9'>
//                         {/* name */}
//                         <h2>Vaibhav Bhatt</h2>
//                         {/* rating */}
//                         <div className='flex gap-1 text-yellow-600'>
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         </div>
//                         {/* sms */}
//                         <p className='text-[#000000] font-sans font-bold'>
//                         "Tangles? Gone. Frizz? Gone. Just a silky, fluffy coat that I can't stop touching!"
//                         </p>
//                     </div>
//                     {/* Rakesh Rathor*/}
//                     <div className='p-5 bg-white shadow space-y-2 rounded-lg absolute -ml-20 bottom-0 z-50'>
//                         {/* name */}
//                         <h2>Rakesh Rathor</h2>
//                         {/* rating */}
//                         <div className='flex gap-1 text-yellow-600'>
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         </div>
//                         {/* sms */}
//                         <p className='text-[#000000] font-sans font-bold'>
//                         "My dog's fur has NEVER been this soft and shiny—absolutely magical!"
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ClientSay;

import React from 'react';
import { FaStar } from 'react-icons/fa';
import dog from '../assets/client/dog.png';

const ClientSay = () => {
  return (
    <section className='bg-[#EEE6C1] py-10 px-5'>
      {/* Heading */}
      <div className="text-center mb-8" data-aos="fade-down">
        <h2
          className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#90610F]"
          style={{
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            WebkitTextStroke: '1px #ffffff',
          }}
        >
          What Our Clients Say
        </h2>
      </div>

      {/* Content */}
      <div className='flex justify-between'>
        {/* Left Testimonials */}
        <div className='space-y-5 relative z-0'>
          {/* Suhad Ajmani */}
          <div
            className='p-5 bg-white shadow space-y-2 rounded-lg mt-14 -mr-20 -rotate-2'
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2>Suhad Ajmani</h2>
            <div className='flex gap-1 text-yellow-600'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className='text-[#000000] font-sans font-bold'>
              "Finally, a shampoo that actually makes my dog's coat look healthy and luxurious!"
            </p>
          </div>

          {/* Amazon Customer */}
          <div
            className='p-5 bg-white shadow space-y-2 rounded-lg mt-8 left-0 z-50 -mr-18 rotate-2'
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h2>Amazon Customer</h2>
            <div className='flex gap-1 text-yellow-600'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className='text-[#000000] font-sans font-bold'>
              "Fluff N Shine turned my dog's dull fur into a glossy, show-ready coat in one wash!"
            </p>
          </div>

          {/* Deep Barman */}
          <div
            className='p-5 bg-white shadow space-y-2 rounded-lg absolute z-10 -mr-20 bottom-0'
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h2>Deep Barman</h2>
            <div className='flex gap-1 text-yellow-600'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className='text-[#000000] font-sans font-bold'>
              "My Golden Retriever looks like a walking cloud—soft, fluffy, and gorgeous!"
            </p>
          </div>
        </div>

        {/* Dog Image */}
        <div className='z-20 relative' data-aos="zoom-in" data-aos-delay="400">
          <img src={dog} alt="Dog" />
        </div>

        {/* Right Testimonials */}
        <div className='space-y-5 relative'>
          {/* Fania */}
          <div
            className='p-5 bg-white shadow space-y-2 rounded-lg rotate-4 -ml-20'
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <h2>Fania</h2>
            <div className='flex gap-1 text-yellow-600'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className='text-[#000000] font-sans font-bold'>
              "It's like a spa day for my pup—smells amazing and leaves the fur super smooth!"
            </p>
          </div>

          {/* Vaibhav Bhatt */}
          <div
            className='p-5 bg-white shadow space-y-2 rounded-lg absolute -ml-20 z-50 right-0 mt-9'
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h2>Vaibhav Bhatt</h2>
            <div className='flex gap-1 text-yellow-600'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className='text-[#000000] font-sans font-bold'>
              "Tangles? Gone. Frizz? Gone. Just a silky, fluffy coat that I can't stop touching!"
            </p>
          </div>

          {/* Rakesh Rathor */}
          <div
            className='p-5 bg-white shadow space-y-2 rounded-lg absolute -ml-20 bottom-0 z-50'
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <h2>Rakesh Rathor</h2>
            <div className='flex gap-1 text-yellow-600'>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className='text-[#000000] font-sans font-bold'>
              "My dog's fur has NEVER been this soft and shiny—absolutely magical!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;

