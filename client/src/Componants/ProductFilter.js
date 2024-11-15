import React from 'react'
import '../Css/Product.css'
import Product1 from '../assets/product-1.png';
import Product2 from '../assets/product-2.webp';
import Product3 from '../assets/product-3.webp';

import { Flex, Rate } from 'antd';
import { Link } from 'react-router-dom';
const ProductFilter = () => {
    const Colors = [{ color: "Black", qty: 2 }, { color: "Green", qty: 3 }, { color: "Blue", qty: 1 }];

    const Items = [{ title: "Injected humour", price: "$799.99", rate: 2, img: Product1 }, { title: "Classical literature", price: "$699.99", rate: 4, img: Product2 }, { title: "Classical literature", price: "$599.99", rate: 1, img: Product3 }];

    const Category = ["All Product", "Best Seller", "Car", "Parts", "Shop", "Tayer", "Uncategorized"];

    const Tags = ["Car","Parts","Shop","Tayer","Seat","Engine","Fuel","Modern","Breake"]
    return (
        <>
            <div className="Filter-Color">
                <h5 className="title">Filter By Color</h5>
                <ul className="nav flex-column">
                    {Colors.map((item, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href="/">
                                    {item.color} <span className='qty'>({item.qty})</span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="Recent-product">
                <h5 className="title">Recent Products</h5>
                <div className="recent-products">
                    {Items.map((item, index) => {
                        return (
                            <div className="item d-flex" key={index}>
                                <div className="img">
                                    <Link to="/cart">
                                    <img src={item.img} alt="" />
                                    </Link>
                                </div>
                                <div className="content">
                                    <a className='nav-link' href='/'>{item.title}</a>
                                    <span className='price'>{item.price}</span>
                                    <div className="rating">
                                        <Flex gap="middle" vertical>
                                            <Rate disabled value={item.rate} />
                                        </Flex>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="product-cate">
                <h5 className="title">Product categories</h5>
                <ul className="nav flex-column">
                    {Category.map((item, index) => {
                        return (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href="/">
                                    {item}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="product-tag mt-4">
                <h5 className='title'>Product tags</h5>
                <div className="tags">
                    {Tags.map((item,index)=>{
                        return(
                            <a href="/" className='nav-link' key={index}>{item}</a>
                        );
                    })}
                    
                </div>
            </div>
        </>
    )
}

export default ProductFilter