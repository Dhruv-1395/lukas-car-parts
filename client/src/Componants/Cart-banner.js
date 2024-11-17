import React from 'react'
import '../Css/Banner.css'
import { FaAngleRight } from "react-icons/fa6";
const Cartbanner = () => {
  return (
    <div className='banner d-flex  align-items-center text-white '>
    <div className="container text-center">
            <h1 className="title">Product Details</h1>
            <div className="navigate  d-flex align-items-center justify-content-center">
                <a className='nav-link' href='/'>Home</a>
                <FaAngleRight />
                <a className='nav-link ' href='/' >Shop</a>
                <FaAngleRight />
                <a className='nav-link active' href='/' >product details</a>
            </div>
    </div>
</div>
  )
}

export default Cartbanner