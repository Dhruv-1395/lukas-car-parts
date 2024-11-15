
import React, { useState, useEffect } from "react";
import './App.css';
import Footer from './Componants/Footer';
import Navbar from './Componants/Navbar';
import Product from './Products/Product';
import { Toaster } from 'react-hot-toast'
import Cart from './Cartpage/Cart';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import Register from './Componants/Register';
import Loader from "./Componants/Loader";
import Sidebar from "./Componants/Sidebar";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();  // Get the current location (route)

  // This effect will run whenever the route changes
  useEffect(() => {
    setLoading(true);  // Show loader when route changes
    setTimeout(() => {
      setLoading(false);  // Hide loader after 2 seconds
    },1000);
  }, [location]);  // Dependency array contains location, so it triggers on route change

  return (
    <div className="App">
      {loading ? <Loader /> : (
        <>
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path='/' element={<Product />} />
            <Route path='/cart/:id' element={<Cart />} />
            <Route path='/register' element={<Register />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
        </>
      )}
    </div>
  );
}

export default App;
