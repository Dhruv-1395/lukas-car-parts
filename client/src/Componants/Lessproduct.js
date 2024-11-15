import React from 'react'
import { FaShoppingBag } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Flex, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { CiDiscount1 } from "react-icons/ci";

const Lessproduct = ({id,title,price,img,sale,rate}) => {
   
  return (
    <>
        {/* <div className="row lessview"> */}
          
              <div className="col-sm-6 col-md-4 lessview">              
                <div className="card" >
                  {
                    (sale>0)? <div className="sale">
                    <span><CiDiscount1 style={{fontSize:"15px"}}/> {sale}%</span>
                  </div>:null
                  }
                 
                  <div className="p-img  d-flex justify-content-center">
                  <Link to={`/cart/`+id}>
                  <img src={require('../assets/'+img)} className="card-img-top" alt="..." />
                  </Link>
                  </div>
                  <div className="card-body">
                    <div className="rating d-flex justify-content-center">
                      <Flex gap="middle" vertical>
                        <Rate disabled value={rate} />
                      </Flex>
                    </div>
                    <div className="detail d-flex flex-column">
                      <a href="/" className='nav-link titlee'>{title}</a>
                      <span className='prices'>Price: <span className='price'>${price}</span></span>
                      <div className="menu-icon">
                        <ul className='nav'>
                          <li><a href="/" className='nav-link'><FaShoppingBag /></a> </li>
                          <li><a href="/" className='nav-link'><BsArrowRepeat /></a> </li>
                          <li><a href="/" className='nav-link'><IoMdHeartEmpty /></a> </li>
                          <li><a href="/" className='nav-link'><IoEyeSharp /></a> </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            
        
        {/* </div>  */}
    </>
  )
}

export default Lessproduct