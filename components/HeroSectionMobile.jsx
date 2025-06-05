'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';

const HeroSectionMobile = () => {

    // useEffect(()=>{
    //     (
    //         ()=>{
            

    //         }
    //     )()
    // },[])

    return (
        <div id='top_mobile' className='flex flex-col gap-y-5 md:flex-row items-center justify-center md:mx-20 my-10'>
            
            <div className='flex flex-col md:gap-y-40 mx-8 gap-y-5'>
             <div className='flex flex-col items-center justify-center'>
                <h1 className='font-extrabold text-5xl md:text-7xl text-blue-400'>23+</h1>
            <span className='text-gray-400 font-semibold text-xl'>Years experience</span>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-extrabold text-5xl md:text-7xl text-blue-400'>3K+</h1>
            <span className='text-gray-400 font-semibold text-xl'>Satisfied clients</span>
            </div>

            </div>
           
           <div>
               <Image
            src='/alpha mobile.webp'
            width={250}
            height={600}
            alt='alpha mobile'
            />
           </div>
          <div className='flex flex-col md:gap-y-40 mx-8 gap-y-5'>
             <div className='flex flex-col items-center justify-center'>
                <h1 className='font-extrabold text-5xl md:text-7xl text-blue-400'>$8M+</h1>
            <span className='text-gray-400 font-semibold text-xl'>Clients revenue generated</span> 
                </div> 
             <div className='flex flex-col items-center justify-center'>
                <h1 className='font-extrabold text-5xl md:text-7xl text-blue-400'>38</h1>
            <span className='text-gray-400 font-semibold text-xl'>Professionals in team</span> 
                </div> 
           </div>
         
         
        </div>
    );
};

export default HeroSectionMobile;