import React from 'react'
import '../Css/Footer.css'
import Logo from '../assets/logo-light.webp'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="logo">
                            <img src={Logo} alt="" />
                        </div>
                        <p>Lukas is the best parts shop for your car accessories. What kind of parts do you need you can get here soluta nobis</p>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Information</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">our company</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Our services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Why we?</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Careers</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Quick links</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-2">
                        <h5 className="title">Support</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="/">Blog</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Return Policy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Online Support</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">Money Back</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-3">
                        <h5 className="title">Store Information</h5>
                        <p>2005 Stokes Isle Apartment. 896, Washington 10010, USA
                            https://example.com
                            (+68) 120034509</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer