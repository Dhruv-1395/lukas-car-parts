import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import "../Css/Cartlist.css";
import emptycart from "../assets/empty-cart.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaTruckArrowRight } from "react-icons/fa6";
import { jsPDF } from "jspdf";
import { useRef } from "react";
import "jspdf-autotable";

const Cartlist = () => {
  const [items, setItems] = useState([]);
  // console.log(items[0]);
  
  const [orders,setOrders] = useState({});
  const [subtotal, setSubTotal] = useState(0);
  const count = items.length;
  const pdfref = useRef();
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

  const handleCheckOut = () => {
    // axios.post('http://localhost:5000/orders')
    // .then(res => console.log(res))
    // .catch(err => console.log(err))
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
              <table ref={pdfref} className="table ">
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
                        <td>₹{items.qty * items.price}</td>
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
                      <td style={{ fontWeight: 600, color: "#eeb644" }}>
                        ₹
                        {subtotal +
                          (subtotal * 18) / 100 +
                          (subtotal * 2) / 100}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="btn btn-primary w-100"
                  onClick={handleCheckOut}
                >
                  Check out
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
