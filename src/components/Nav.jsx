"use client";
import {headerLogo} from '../assets/images'
import {hamburger} from '../assets/icons'
import {navLinks} from '../constants'
import { useState,useEffect } from 'react';

const Nav = () => {

    const [toggle, setToggle] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () =>{
         setToggle(prev => !prev)
    }

    useEffect(()=>{

        const handleScroll = (e) =>{
            const scrollY = window.scrollY || e.clientY
            setScroll(scrollY > 1)
        }


        window.addEventListener("scroll",handleScroll)

        return(()=>{
          window.removeEventListener("scroll",handleScroll)
        })
    },[])

  return (
    <div>
        <header className={`padding-x py-8 max-lg:absolute fixed top-0 left-0 z-50 w-full  ${scroll ? ' bg-black bg-opacity-20 max-lg:bg-transparent' : 'bg-transparent'}`}>
            <nav className='flex justify-between items-center max-container'>
                <a href="/">
                    <img src={headerLogo} 
                    alt='Logo'
                    width={130}
                    height={29}
                    />
                </a>
                <ul className={`flex-1 flex 
                items-center justify-center gap-16 max-lg:flex-col max-lg:block  max-lg:bg-black w-full max-lg:absolute max-lg:text-center  max-lg:left-0 max-lg:top-0 max-lg:h-screen max-lg:items-center    ${toggle ? "" : "max-lg:hidden"}`}
                >
                   {
                    navLinks.map((item) =>(
                        <li key={item.label} className='max-lg:w-full max-lg:flex max-lg:justify-center max-lg:items-center max-lg:h-[60px] max-lg:mt-20 max-lg:hover:bg-[white] max-lg:cursor-pointer transition-all duration-200 ease-in-out'>
                            <a 
                            href={item.href}
                            className='font-monts errat leading-normal text-lg text-slate-gray'
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                   }
                </ul>
                <div className='max-lg:block hidden'>
                    <img 
                    src={toggle ? "https://cdn-icons-png.flaticon.com/512/10275/10275331.png" : hamburger}
                    alt='Hamburger'
                    width={25}
                    height={25}
                    className='cursor-pointer z-10 absolute right-4 top-8'
                    onClick={handleClick}
                    />
                </div>
            </nav>
        </header>
    </div>
  )
}

export default Nav