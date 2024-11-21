import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "../Css/Cartlist.css";
import emptycart from "../assets/empty-cart.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTruckArrowRight } from "react-icons/fa6";
import { useRef } from "react";
import Spinner from 'react-bootstrap/Spinner';
import { useNavigate } from "react-router-dom";
const Cartlist = () => {
  const [items, setItems] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [isloading,setIsLoading] = useState(false);
  const count = items.length;
  const gtotal = useRef(null);
  const totalref = useRef(null);
  const checkoutref = useRef(null);
  const navigate = useNavigate();
  const Subtotal = () => {
    const sum = items.reduce((acc, curr) => {
      return acc + curr.price * curr.qty;
    }, 0);
    setSubTotal(sum);
  };

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const data = await axios
          .get("http://localhost:5000/cart")
          .then((res) => setItems(res.data))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    fetchItem();
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      Subtotal();
    }
  }, [items]);

  const handleCheckOut = async () => {
    setIsLoading(true);
    const btn = checkoutref.current;
    btn.classList.add('disabled');
    
    const orderObjects = items.map((item) => {
      return {
        pid: item.id,
        item: item.img,
        product: item.pname,
        color: item.color,
        size: item.size,
        price: item.price,
        qty: item.qty,
        total: item.price * item.qty // Assuming gtotal is a ref
      };
    });

    const cid = items.map(item => item.id);
    const date = new Date();
    try {
      const orderResponse = await axios.post('http://localhost:5000/orders', { order: orderObjects, date: date.toUTCString() });
      console.log('Order response:', orderResponse);


      const cartClear = cid.map((id) => axios.delete(`http://localhost:5000/cart/${id}`));


    } catch (error) {
      console.error('Error during checkout process:', error);
    }

    setTimeout(()=>{
      navigate('/checkout');
    },2000);
  };


  const handleRemove = (id) => {
    let cartcount = parseInt(document.getElementById("Cartcount").innerText);
    axios
      .delete("http://localhost:5000/cart/" + id)
      .then((res) => {
        if (res) {
          toast.success("Item removed!");
        }
        document.getElementById("Cartcount").innerText = cartcount -= 1;
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cartlist">
      <div className="container">
        <h3 className="title text-center">Your Cart [{count} items]</h3>
        {items.length == 0 ? (
          <div className="emptycart">
            <img src={emptycart} className="animated-image" alt="" />
            <Link to="/">Back to shop</Link>
          </div>
        ) : (
          <>
            <div className="table-responsive">
              <table className="table ">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Name</th>
                    <th>color</th>
                    <th>Size</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((items) => {
                    return (
                      <tr key={items.id}>
                        <td>
                          {" "}
                          <img
                            src={require("../assets/" + items.img)}
                            width={70}
                            alt="item"
                          />
                        </td>
                        <td>{items.pname}</td>
                        <td>{items.color}</td>
                        <td>{items.size}</td>
                        <td>₹{items.price}</td>
                        <td>{items.qty}</td>
                        <td ref={totalref}>₹{items.qty * items.price}</td>
                        <td>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleRemove(items.id)}
                          >
                            Remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="row">
              <div className="col-7"></div>
              <div className="col-5">
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Sub-total :</td>
                      <td>₹{subtotal}</td>
                    </tr>
                    <tr>
                      <td>Sales Tax :</td>
                      <td>₹{(subtotal * 18) / 100}</td>
                    </tr>
                    <tr>
                      <td>
                        <FaTruckArrowRight /> Dilivery Charges :
                      </td>
                      <td>₹{(subtotal * 2) / 100}</td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: 600, color: "#eeb644" }}>
                        Grand-Total :
                      </td>
                      <td ref={gtotal} style={{ fontWeight: 600, color: "#eeb644" }}>
                        ₹
                        {subtotal +
                          (subtotal * 18) / 100 +
                          (subtotal * 2) / 100}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                ref={checkoutref}
                  className="btn btn-primary w-100"
                  onClick={handleCheckOut}
                >
                  {
                    (isloading)?<Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </Spinner>
                  :
                  "Check out"
                  }
                  
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cartlist;
