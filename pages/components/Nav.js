import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  const [userlogin, setUserlogin] = useState(false)
  function handelprofile() {
    if (showprofile) { setShowprofile(false) }
    else { setShowprofile(true) }
  }
  const [showprofile, setShowprofile] = useState(false)

  function handelmenu() {
    if (showmenu) { setShowmenu(false) }
    else { setShowmenu(true) }
  }
  const [showmenu, setShowmenu] = useState(false)
  
  return (
    <>
      <nav className='flex nav-bg items-center fixed top-0 right-0 left-0 z-10 py-4 justify-between px-8'>
        <div className="logo flex items-center">
          <Image src="/logo.png" width={35} className="-ml-5" height={30} />
          <span className='text-white mx-2 font-bold text-lg '>RSETARANT NAME</span>
        </div>
        <div className="hidden navitems md:flex items-center ">
          <Link href="/" className="mx-4 text-white text-[1rem] font-bold hover:text-red-500 cursor-pointer">Home</Link>
          
          <Link href="/#about"  className="mx-4 text-white text-[1rem] font-bold hover:text-red-500 cursor-pointer">About</Link>
          <Link href="/orders/order"  className="mx-4 text-white text-[1rem] font-bold hover:text-red-500 cursor-pointer">order</Link>
          <Link href="/#contact"  className="mx-4 text-white text-[1rem] font-bold hover:text-red-500 cursor-pointer">contact</Link>
           
          <div className="login">
           {userlogin?
           
            <Link href="http://localhost:3000/login/login"><button className='bg-red-500 pb-2 mx-2 pt-1 text-white font-bold px-4 rounded-lg hover:text-red-500 hover:bg-white'>login</button></Link>
            :
            <Link href="http://localhost:3000/login/login"><button className='bg-red-500 pb-2 mx-2 pt-1 text-white font-bold px-4 rounded-lg hover:text-red-500 hover:bg-white'>logout</button></Link>
            }
          </div>
        </div>
        <div className="md:hidden navbtn">
          <button onClick={() => { handelmenu() }} className='bg-black z-0 text-white font-bold p-2 rounded-lg hover:text-red-500 '>
            {showmenu ?
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white transition-all  duration-700 " viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"/>
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white transition-all  duration-700 " fill="none"  viewBox="0 0 24 24"  stroke="currentColor" strokeWidth={2} >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            }
          </button>
        </div>
        <div style={{ "top": showmenu ? "10vh" : "-50vh" }} className="md:hidden navbar transition-all  duration-700 easy-out bg-neutral-800 w-screen absolute z-50 justify-center left-0">
          <div className="flex items-center flex-col">
            <Link onClick={() => { handelmenu() }} href="/"  className="m-4 text-white text-[1rem] font-bold hover:text-red-500 cursor-pointer">Home</Link>
            <Link onClick={() => { handelmenu() }} href="/#about"  className="m-4 text-white text-[1rem] font-bold hover:text-red-500 cursor-pointer">About</Link>
            <Link onClick={() => { handelmenu() }} href="/orders/order"  className="m-4 text-white text-[1rem] font-bold hover:text-red-500 cursor-pointer">order</Link>
            <Link onClick={() => { handelmenu() }} href="/#contact"  className="m-4 text-white text-[1rem] font-bold hover:text-red-500 cursor-pointer">contact</Link>
            <div onClick={() => { handelmenu() }} className="login m-4">
            {userlogin?
           
           <Link onClick={() => { handelmenu() }} href="http://localhost:3000/login/login"><button className='bg-red-500 pb-2 mx-2 pt-1 text-white font-bold px-4 rounded-lg hover:text-red-500 hover:bg-white w-80'>login</button></Link>
           :
           <Link onClick={() => { handelmenu() }} href="http://localhost:3000/login/login"><button className='bg-red-500 pb-2 mx-2 w-80 pt-1 text-white font-bold px-4 rounded-lg hover:text-red-500 hover:bg-white'>logout</button></Link>
           }
            </div>
          </div>
        </div>
      </nav>
      <hr className='bg-gray-200' />

    </>
  )
}

export default Nav