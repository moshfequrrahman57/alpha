'use client'
import React, { useRef, useState,useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AllPages from './AllPages';

function MenuDrawer() {


     const [windowResized,setWindowResized]=useState(null);


      
    const menu_button=useRef();
    const menu_link=useRef();
    const list_div=useRef();
    const demos_list_div=useRef();
    const all_pages_list=useRef();
    const company_div=useRef();
   
   const [isOpen,setIsOpen]=useState(false);
    const drawer=()=>{
           setIsOpen(!isOpen);
    }

    const [isDemosOpen,setDemosOpen]=useState(false);
    const expand_demos= async ()=>{
     await setDemosOpen(isDemosOpen=> !isDemosOpen);
     await setProductOpen(false);
     await setCompanyOpen(false);
     setAllPagesOPen(false);
    }
 const [isProductOpen,setProductOpen]=useState(false);
    const expand_product= async ()=>{
    await  setProductOpen(isProductOpen=> !isProductOpen);
     await setDemosOpen(false);
    await  setCompanyOpen(false);
    setAllPagesOPen(false);
    }
 const [isCompanyOpen,setCompanyOpen]=useState(false);
    const expand_company=async ()=>{
     await setCompanyOpen(isCompanyOpen => !isCompanyOpen);
     await setDemosOpen(false);
     await setProductOpen(false);
      setAllPagesOPen(false);
    }
  const [isAllPagesOpen,setAllPagesOPen]=useState(false);
     const expand_all_pages= async ()=>{
      await setAllPagesOPen(isAllPagesOpen => !isAllPagesOpen);
      await setDemosOpen(false);
      await setProductOpen(false);
      setCompanyOpen(false);
     }

  

     useEffect(  () => {
      // const clone_demos=demos_list_div.current.cloneNode(true);
      // all_pages_list.current.appendChild(clone_demos);
      // const clone_company=company_div.current.cloneNode(true);
      // all_pages_list.current.appendChild(clone_company);

     
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
        
        <nav className="fixed top-0 left-0 z-50 bg-white shadow w-full  flex justify-between items-center" >
         
          <div className='flex items-center justify-center mx-3 h-16 md:h-20'>
            <Link href={'/'} className='flex items-center justify-center'>
             <Image
            src="/speech-bubble-svgrepo-com (1).svg"
            width={40}
            height={40}
            alt="Logo"
            />
        <span className='mx-3 text-2xl font-extrabold text-[#007aff]'>alpha</span>
            </Link>
          </div>

         <ul className={`fixed top-0 md:top-0 left-0 h-full w-3/4 bg-white  transform 
         transition-transform duration-300 ease-in-out shadow md:shadow-none
          md:relative md:flex  gap-4  md:h-20 md:w-fit md:translate-x-0
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
         
          `}>

          <div  className='flex justify-between items-center   cursor-pointer h-16 shadow md:hidden'
                >
                  <div className='flex items-center justify-center gap-4 mx-3'>
                     <Image
                  src="/speech-bubble-svgrepo-com (1).svg"
                  width={40}
                  height={40}
                  alt="Logo"
                  />
                <span className="text-2xl font-extrabold text-[#007aff] md:text-base" 
                >alpha</span>
                  </div>
                 
                <Image
                  src="/close-svgrepo-com.svg"
                  width={40}
                  height={40}
                  alt="Logo"
                  onClick={drawer}
                  />
                </div>

            <div ref={list_div} className='flex flex-col md:flex-row md:items-center md:justify-center   pt-5 pl-5 md:pt-0 md:pl-0 '>
            
              <div   className='md:relative h-fit bg-white' >
                <div  className='flex justify-between items-center cursor-pointer h-fit mr-5'
                
                    onClick={expand_demos} 
                >
                <span className="text-2xl font-semibold md:text-base h-16 flex text-gray-500
                 hover:md:text-[#007aff]   items-center justify-center" 
                onMouseOver={expand_demos} onMouseOut={expand_demos}
                >Demos</span>
                <Image
                  src="/dropdown-arrow-svgrepo-com.svg"
                  width={30}
                  height={30}
                  alt="Logo"
                
                  />
                </div>
                <ul className={`md:absolute md:top-16 md:w-48 md:left-0 md:border
                 md:border-slate-200 md:shadow
                 transition-all  duration-700 
                ${isDemosOpen ? ' h-64':'h-0 md:hidden '}  
                `}
                 
                >
                  <div ref={demos_list_div} onMouseOver={()=>{ setDemosOpen(true)}} 
                  onMouseOut={()=>{ setDemosOpen(false)}} className='flex flex-col gap-2 p-5 bg-white'>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Home 1</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Home 2</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Home 3</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Home 4</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Home 5</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Home 6</li>
                  </div>
                </ul>

              </div>
            
             
               <div id='product_div' className='md:relative h-fit bg-white' >
                <div  className='flex justify-between items-center cursor-pointer h-fit mr-5'
                
                    onClick={expand_product} 
                >
                <span className="text-2xl font-semibold md:text-base h-16 flex text-gray-500
                 hover:md:text-[#007aff]   items-center justify-center"
                onMouseOver={expand_product} onMouseOut={expand_product}
                >Product Features</span>
                <Image
                  src="/dropdown-arrow-svgrepo-com.svg"
                  width={30}
                  height={30}
                  alt="Logo"
                  />
                </div>
                <ul className={`md:absolute md:top-16 md:w-48 md:left-0 md:border
                 md:border-slate-200 md:shadow
                 transition-all  duration-700 
                ${isProductOpen ? 'h-64':'h-0 md:hidden'}  
                `}
                 
                >

                    <div onMouseOver={()=>{ setProductOpen(true)}} 
                  onMouseOut={()=>{ setProductOpen(false)}} className='flex flex-col gap-2 p-5 bg-white'>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Features</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Compare</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Pricing</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Reviews</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Get Support</li>
                  </div>
                </ul>

              </div>
            
                <div  className='md:relative h-fit bg-white' >
                <div className='flex justify-between items-center cursor-pointer h-fit mr-5'
                
                    onClick={expand_company} 
                >
                <span className="text-2xl font-semibold md:text-base h-16 flex text-gray-500
                 hover:md:text-[#007aff]   items-center justify-center"
                onMouseOver={expand_company} onMouseOut={expand_company}
                >Company</span>
                <Image
                  src="/dropdown-arrow-svgrepo-com.svg"
                  width={30}
                  height={30}
                  alt="Logo"
                  />
                </div>
                <ul className={`md:absolute md:top-16 md:w-48 md:left-0 md:border
                 md:border-slate-200 md:shadow
                 transition-all  duration-700 
                ${isCompanyOpen ? 'h-64':'h-0 md:hidden'}  
                `}
                 
                >
                   <div onMouseOver={()=>{ setCompanyOpen(true)}} 
                  onMouseOut={()=>{ setCompanyOpen(false)}} className='flex flex-col gap-2 p-5 bg-white'>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>About Us</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Why Choose Us</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Our Team</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Services</li>
                  <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Career</li>
                   <li className='text-2xl md:text-base font-semibold text-gray-500 hover:text-blue-400'>Contact us</li>
                   </div>
                </ul>

              </div>
            
            <div className='w-full bg-white md:w-fit mr-5 py-5 md:pl-0'>
              <span className='text-2xl md:text-base font-semibold text-gray-500 hover:md:text-[#007aff]'> Show Cases</span>
            </div>
      
              <div  className=' h-fit bg-white' >
                <div   className='flex justify-between items-center cursor-pointer h-fit mr-5'
                
                    onClick={expand_all_pages} 
                >
                <span className="text-2xl font-semibold md:text-base h-16 flex text-gray-500
                 hover:md:text-[#007aff]   items-center justify-center"
                onMouseOver={expand_all_pages} onMouseOut={expand_all_pages}
                >All Pages</span>
                <Image
                  src="/dropdown-arrow-svgrepo-com.svg"
                  width={30}
                  height={30}
                  alt="Logo"
                  />
                </div>
                <ul ref={all_pages_list} className={`md:absolute md:top-16 md:w-fit md:left-0 md:border
                 md:border-slate-200 md:shadow
                 transition-all  duration-700 
                ${isAllPagesOpen ? 'h-64 md:h-fit':'h-0 md:hidden'} overflow-scroll  md:overflow-hidden
                `}
                >
               <div onMouseOver={()=>{ setAllPagesOPen(true)}} 
                  onMouseOut={()=>{ setAllPagesOPen(false)}} >    
                  <AllPages/>
                  </div>
                  
                </ul>

              </div>
              
              
            

           <div ref={menu_button}  className='h-64 md:h-fit flex flex-col bg-white pr-10 py-10
           md:py-0 '>
             <button className='btn btn-success rounded-full text-white hover:bg-white hover:text-[#007aff]' >Get Started</button>
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