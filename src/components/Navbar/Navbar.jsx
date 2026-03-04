import React from "react";

const Navbar = () => {
  return (
    <div>
     <div className="navbar bg-base-100 shadow-sm">

  {/* Navbar Start */}
  <div className="navbar-start">

    {/* Mobile Menu */}
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16"
          />
        </svg>
      </div>

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 w-52 p-2 shadow bg-base-100 rounded-box z-[1]"
      >
        <li><a>Home</a></li>
        <li><a>FAQ</a></li>
        <li><a>ChangeLog</a></li>
        <li><a>Blog</a></li>
        <li><a>Download</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>

   
    <a className="btn btn-ghost text-lg md:text-xl font-bold mr-2">
      CS-Ticket System
    </a>
  </div>


  
  <div className="navbar-end">

    <ul className="menu menu-horizontal items-center gap-1 px-1">

      <li className="hidden md:block"><a>Home</a></li>
      <li className="hidden md:block"><a>FAQ</a></li>
      <li className="hidden md:block"><a>ChangeLog</a></li>
      <li className="hidden md:block"><a>Blog</a></li>
      <li className="hidden md:block"><a>Download</a></li>
      <li className="hidden md:block"><a>Contact</a></li>

      <li>
        <a className="btn bg-[#422AD5] text-white ml-2">
          + New Ticket
        </a>
      </li>

    </ul>

  </div>

</div>
    </div>
  );
};

export default Navbar;
