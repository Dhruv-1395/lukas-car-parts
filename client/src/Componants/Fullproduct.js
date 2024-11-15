import React from 'react'
import '../Css/Fullview.css'
import { FaShoppingBag } from "react-icons/fa";
import { BsArrowRepeat } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoEyeSharp } from "react-icons/io5";
import { Flex, Rate } from 'antd';
import { Link } from 'react-router-dom';
import { CiDiscount1 } from "react-icons/ci";


const Fullproduct = ({id, title, price, img ,sale,rate}) => {

    return (
        <>
            {/* <div className="row fullview"> */}

            <div className="col-12 fullview">
                <div className="card mb-3" style={{ maxWidth: "100%" }}>
                {
                    (sale>0)? <div className="sale">
                    <span><CiDiscount1 style={{fontSize:"15px"}}/> {sale}%</span>
                  </div>:null
                  }
                    <div className="row g-0">
                        <div className="col-md-4 d-flex justify-content-center flex-column">
                            <div className="img d-flex justify-content-center">
                                <Link to={`/cart/` + id}>
                                    <img src={require('../assets/'+img)} className="img-fluid rounded-start" alt="..." />
                                </Link>
                            </div>

                            <div className="rating d-flex justify-content-center">
                                <Flex gap="middle" vertical>
                                    <Rate disabled value={rate} />
                                </Flex>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{title}</h5>
                                <span className='prices'>Price: <span className='price'>${price}</span></span>
                                <div className="menu-icon">
                                    <ul className='nav'>
                                        <li><a href="/" className='nav-link'><FaShoppingBag /></a> </li>
                                        <li><a href="/" className='nav-link'><BsArrowRepeat /></a> </li>
                                        <li><a href="/" className='nav-link'><IoMdHeartEmpty /></a> </li>
                                        <li><a href="/" className='nav-link'><IoEyeSharp /></a> </li>
                                    </ul>
                                </div>
                                <hr />
                                <p className="card-text">
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* </div> */}


        </>
    )
}

export default Fullproduct