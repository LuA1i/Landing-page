import React from 'react'
import logo from '../images/logo.svg'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center center pt-15 px-25 ">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <ul className="flex justify-between gap-2">
          <li>
            <a href="">Pricings</a>
          </li>
          <li>
            <a href="">Products</a>
          </li>
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Careers</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
        </ul>
      </div>
      <button className="bg-orange-600 w-30 h-8 text-sm rounded-3xl cursor-pointer outline-none text-white shadow-lg shadow-gray-300 hover:bg-orange-700">
        Get Started
      </button>
    </div>
  )
}

export default Navbar
