'use client'
import React, { useEffect } from 'react';
import Image from 'next/image';

const HeroSectionMobile = () => {

    useEffect(()=>{
        (
            ()=>{
                const observer1= new IntersectionObserver((items)=>{
                    items.forEach((item)=>{
                        if(item.isIntersecting){
                            item.target.classList.add('anim2');
                            observer1.unobserve(document.getElementById('left'));
                        }
                    })
                },{threshold : 0.8})
                observer1.observe(document.getElementById('left'));


                 const observer2= new IntersectionObserver((items)=>{
                    items.forEach((item)=>{
                        if(item.isIntersecting){
                            item.target.classList.add('anim4');
                            observer2.unobserve(document.getElementById('right'));
                        }
                    })
                },{threshold : 0.8})
                observer2.observe(document.getElementById('right'));

                const observer3= new IntersectionObserver((items)=>{
                    items.forEach((item)=>{
                        if(item.isIntersecting){
                            item.target.classList.add('anim3');
                            observer3.unobserve(document.getElementById('middle'));
                        }
                    })
                },{threshold : 0.8})
                observer3.observe(document.getElementById('middle'));
            }
        )()
    },[])

    return (
        <div  className='flex flex-col gap-y-5 md:flex-row items-center justify-center md:mx-20 my-10'>
            
            <div id='left' className='flex flex-col md:gap-y-40 mx-8 gap-y-5 animation_before2'>
             <div className='flex flex-col items-center justify-center'>
                <h1 className='font-extrabold text-5xl md:text-7xl text-blue-400'>23+</h1>
            <span className='text-gray-400 font-semibold text-xl'>Years experience</span>
            </div>
            
            <div className='flex flex-col items-center justify-center'>
                <h1 className='font-extrabold text-5xl md:text-7xl text-blue-400'>3K+</h1>
            <span className='text-gray-400 font-semibold text-xl'>Satisfied clients</span>
            </div>

            </div>
           
           <div id='middle' className='animation_before3'>
               <Image
            src='/alpha mobile.webp'
            width={250}
            height={600}
            alt='alpha mobile'
            />
           </div>
          <div id='right' className='flex flex-col md:gap-y-40 mx-8 gap-y-5 animation_before4'>
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