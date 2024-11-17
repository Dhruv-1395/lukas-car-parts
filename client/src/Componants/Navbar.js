import React,{useState,useEffect} from 'react'
import axios from 'axios';
import Logo from '../assets/logo.webp'
import '../Css/Navbar.css'
import { FaShoppingBag } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
const[count,setCount] = useState([]);
const navigate = useNavigate();

  const Openmenu = () =>{
    document.getElementById('sidebar').style.left='0%';
  }
  useEffect(() => {
    const fetchCartCount = async () => {
      try {
        const response = await axios.get('http://localhost:5000/cart');
        setCount(response.data); 
      } catch (err) {
        console.error('Error fetching cart count:', err);
        setCount(0);  
      }
    };

    fetchCartCount();
  }, [count]);  
  const handleCart = () =>{
      navigate('/cartlist')
  }
  return (
    <nav className="navbar navbar-light shadow ">
  <div className="container">
    <a className="navbar-brand" href="/">
      <img src={Logo} alt="logo" />
    </a>
    <ul className="nav justify-content-center">
  <li className="nav-item">
    <Link className="nav-link active" aria-current="page" to="/">
     Home
    </Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      About
    </a>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/">
      Shop
    </Link>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Blog
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Gallery
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Pages
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="/">
      Contact
    </a>
  </li>
</ul>
<div className="rigt-part d-flex align-items-center">
<ul className="nav d-flex">
  <li className="nav-item">
    <a className="nav-link login" href="/">
      Login
    </a>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/register">
      register
    </Link>
  </li>
</ul>
<div className="sidebar-toggle">
<TiThMenu onClick={Openmenu}/>
</div>
    <div className="cart" onClick={handleCart}>
    <FaShoppingBag /><sup><span id='Cartcount'>{count.length || 0}</span></sup>
    </div>
</div>
  </div>
</nav>

  )
}

export default Navbar