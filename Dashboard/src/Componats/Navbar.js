import React,{useState} from "react";
import '../Css/Navbar.css'
import { Link,useLocation } from "react-router-dom";

const menus = [
  { name: "Products", path: "/" },
  { name: "Add Products", path: "/add" },
  { name: "Users", path: "/users" },
  { name: "Orders", path: "/orders" },
]
const Navbar = () => {
  const [activemenu,setActiveMenu] = useState('/');
  let location = useLocation();
  // console.log(location.pathname);
  
  const MenuActive = (menu) =>{
    console.log(menu);
    
    if (menu === activemenu) {
      return { color: '#eeb644'};
  }
  return { color: 'black' };
    
  }
  return (
    <div>
      <nav className="navbar navbar-light shadow ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
           Dashboard
          </a>
          <ul className="nav justify-content-end">
            {
              menus.map((menus, index) => (
                <li key={index} className="nav-item">
                  <Link to={menus.path} className="nav-link" 
                  onClick={()=> setActiveMenu(location.pathname)}
                  style={MenuActive(menus.path)}>{menus.name}
                  </Link>
                </li>
              ))
            }
           
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
