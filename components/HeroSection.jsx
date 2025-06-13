'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HeroSectionMobile from './HeroSectionMobile';
import Link from 'next/link';


const HeroSection = () => {


 

    useEffect(()=>{
        (
            ()=>{
                const element=document.getElementById('top_title');

              //  console.log(item.outerHTML);
                const observer= new IntersectionObserver((items)=>{
                    items.forEach((item)=>{
                      if(item.isIntersecting ){
                       
                             console.log("Intersecting");
                            item.target.classList.add('anim');
                            observer.unobserve(element);
                        }
                    }, )
                },{threshold:0.1});

          
            observer.observe(element);                
                

            }
        )()
    },[])


    return (
        <div  >
            <div id='top_title' className='animation_before'>
                 <h1 className=' px-10 py-20 pt-40 pb-6 font-bold
           text-5xl md:px-30 md:pt-50 md:pb-8 md:font-extrabold text-center bg-green-200 '>Elevate your experience -<br/> download our app today</h1> 
           <h5 className='px-9 md:px-20  
           text-center text-xl font-medium text-gray-400'>Unlock a world of convenience and innovation by downloading our app.</h5>
           <div className='flex flex-col md:flex-row items-center justify-center gap-5 my-8'>

            <Image   src="/android download.svg"
                  width={150}
                  height={50}
                  alt="Logo"
                className='cursor-pointer'
                  />
           
            <Image   src="/google download.svg"
                  width={150}
                  height={50}
                  alt="Logo"
                  className='cursor-pointer'
                  />
            <Link href={`/table`}>
             <button className='btn btn-secondary'> Data Table</button>
            </Link>
          
            <button className='btn btn-warning'> React PDF</button>

           </div>

            </div>
         <HeroSectionMobile/>
        </div>
    );
};

export default HeroSection;