import React from 'react';

const Navbar = () => {
  return (
    <div className='flex'>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-3xl text-white font-poppins">Portfolio</a>
        </div>
        <div className="flex-none">
          <ul className="hidden md:flex menu menu-horizontal px-1">
            <li><a className='text-xl text-white hover:text-[#0ef] font-poppins'>Home</a></li>
            <li><a className='text-xl text-white hover:text-[#0ef] font-poppins'>About</a></li>
            <li><a className='text-xl text-white hover:text-[#0ef] font-poppins'>Projects</a></li>
            <li><a className='text-xl text-white hover:text-[#0ef] font-poppins'>Contact</a></li>
          </ul>
          <div className="dropdown dropdown-end md:hidden">
            <button className="btn btn-square dropdown-trigger btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
            <ul className=" shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-24">
              <li><a className=" text-white hover:text-[#0ef] font-poppins">Home</a></li>
              <li><a className=" text-white hover:text-[#0ef] font-poppins">About</a></li>
              <li><a className=" text-white hover:text-[#0ef] font-poppins">Projects</a></li>
              <li><a className=" text-white hover:text-[#0ef] font-poppins">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
