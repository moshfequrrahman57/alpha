'use client'
import React, { useRef, useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';


function MenuDrawer() {


     const [windowResized,setWindowResized]=useState(null);


      
    const menu_button=useRef();
    const menu_link=useRef();
    const list_div=useRef();
   
   const [isOpen,setIsOpen]=useState(false);
    const drawer=()=>{
           setIsOpen(!isOpen);
    }

    const [isDemosOpen,setDemosOpen]=useState(false);
    const expand_demos= async ()=>{
     await setDemosOpen(isDemosOpen=> !isDemosOpen);
     await setProductOpen(false);
      setCompanyOpen(false);
    }
 const [isProductOpen,setProductOpen]=useState(false);
    const expand_product= async ()=>{
    await  setProductOpen(isProductOpen=> !isProductOpen);
     await setDemosOpen(false);
      setCompanyOpen(false);
    }
 const [isCompanyOpen,setCompanyOpen]=useState(false);
    const expand_company=async ()=>{
     await setCompanyOpen(isCompanyOpen => !isCompanyOpen);
     await setDemosOpen(false);
      setProductOpen(false);
    }


     useEffect(() => {

      console.log(isDemosOpen,isProductOpen,isCompanyOpen);

         const get_break_point=()=>{

      const breakpoints={
         'xs': '(max-width: 639px)',
    'sm': '(min-width: 640px) and (max-width: 767px)',
    'md': '(min-width: 768px) and (max-width: 1023px)',
    'lg': '(min-width: 1024px) and (max-width: 1279px)',
    'xl': '(min-width: 1280px)',
      };

      for( const breakpoint in breakpoints){
          if(window.matchMedia(breakpoints[breakpoint]).matches){
            if(breakpoint==='md' || breakpoint==='lg' || breakpoint==='xl'){
              console.log("Hello Medium Device");
              menu_link.current.appendChild(menu_button.current);
            }
            else if(breakpoint==='xs' || breakpoint==='sm'){
              console.log("device is xs and sm");
              list_div.current.appendChild(menu_button.current);
            }
          }
      }

    }



       get_break_point();
       function handleSize(){
          setWindowResized(window.innerWidth);
         }
        
         window.addEventListener('resize',handleSize);
         console.log(`wind widhth: ${windowResized}`);
         return ()=> window.removeEventListener("resize",handleSize);

      }, [windowResized]);

    return (
        
        <nav className="bg-gray-100 shadow w-full flex justify-between items-center" >
         
          <div className='flex items-center justify-center mx-3'>
            <Link href={'/'} className='flex items-center justify-center'>
             <Image
            src="/medium-color-svgrepo-com.svg"
            width={50}
            height={50}
            alt="Logo"
            />
        <span className='mx-3 text-2xl font-extrabold text-blue-300'>Alpha</span>
            </Link>
          </div>

         <ul className={`fixed top-0 md:top-0 left-0 h-full w-3/5 bg-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out
          md:relative md:flex  gap-4 md:bg-gray-600 md:h-fit md:w-fit md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
         
          `}>
            <div ref={list_div} className='flex flex-col md:flex-row  gap-0 pt-10 pl-10 md:pt-0 md:pl-0 bg-pink-500'>
            
              <div  id="demos_div" className='md:relative h-fit'>
                <div  className='flex justify-between items-center  bg-red-400 cursor-pointer'
                
                    onClick={expand_demos} 
                >
                <span className="text-2xl font-bold md:text-base hover:text-violet-500 " 
                onMouseOver={expand_demos} onMouseOut={expand_demos}
                >Demos</span>
                <Image
                  src="/dropdown-arrow-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="Logo"
                  />
                </div>
                <ul className={`md:absolute md:top-14 md:left-0 bg-green-300 transition-all  duration-700
                ${isDemosOpen ? ' h-40':'h-0 md:hidden '}  
                `}
                 
                >
                  <li>Home 1</li>
                  <li>Home 2</li>
                  <li>Home 3</li>
                  <li>Home 4</li>
                  <li>Home 5</li>
                  <li>Home 6</li>
                </ul>

              </div>
            
             
               <div id='product_div' className='md:relative h-fit' >
                <div  className='flex justify-between items-center  bg-red-400 cursor-pointer'
                
                    onClick={expand_product} 
                >
                <span className="text-2xl font-bold md:text-base hover:text-violet-500 " 
                onMouseOver={expand_product} onMouseOut={expand_product}
                >Product Features</span>
                <Image
                  src="/dropdown-arrow-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="Logo"
                  />
                </div>
                <ul className={`md:absolute md:top-14 md:left-0 bg-green-300 transition-all  duration-700
                ${isProductOpen ? 'h-52':'h-0 md:hidden'}  
                `}
                 
                >
                  <li>Features</li>
                  <li>Compare</li>
                  <li>Pricing</li>
                  <li>Reviews</li>
                  <li>Get Support</li>
                  
                </ul>

              </div>
            
                <div id='company_div' className='md:relative h-fit' >
                <div  className='flex justify-between items-center  bg-red-400 cursor-pointer'
                
                    onClick={expand_company} 
                >
                <span className="text-2xl font-bold md:text-base hover:text-violet-500 " 
                onMouseOver={expand_company} onMouseOut={expand_company}
                >Company</span>
                <Image
                  src="/dropdown-arrow-svgrepo-com.svg"
                  width={50}
                  height={50}
                  alt="Logo"
                  />
                </div>
                <ul className={`md:absolute md:top-14 md:left-0 bg-green-300 transition-all  duration-700
                ${isCompanyOpen ? 'h-52':'h-0 md:hidden'}  
                `}
                 
                >
                  <li>About Us</li>
                  <li>Why Choose Us</li>
                  <li>Our Team</li>
                  <li>Services</li>
                  <li>Career</li>
                   <li>Contact us</li>
                </ul>

              </div>
            
      
            
                  <li  className="text-white text-2xl md:text-base font-semibold underline-offset-4 underline
                  bg-red-400
               hover:font-extrabold hover:no-underline hover:text-orange-200 "
              onClick={drawer}
              >All Pages</li>
           <div className='h-40 bg-amber-400'>
             <button ref={menu_button} className='btn btn-success rounded-full' >Get Started</button>
           </div>
            </div>
          
          </ul>
         
           
           <div ref={menu_link}  className='flex items-center justify-center '>
             <Image
              src="/menu-alt-02-svgrepo-com.svg"
              width={40}
              height={40}
              alt="Logo"
            onClick={drawer}
            className='md:hidden '
            />

            </div>
          
        </nav>
       
    );
}

export default MenuDrawer;