import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import "../Css/Recipt.css";
import Logo from '../assets/logo.webp'
import html2pdf from 'html2pdf.js'
import { MdOutlineSimCardDownload } from "react-icons/md";

const OrderRecipt = () => {
  const [orderdetail, setOrderDetail] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [items, setItems] = useState(null)
  const reciptRef = useRef(null);

  // console.log(orderdetail);
  const orderId = orderdetail.map((item) => {
    return item.id;
  });


  useEffect(() => {
    const FetchData = async () => {
      try {
        const data = await axios
          .get("http://localhost:5000/orders")
          .then((res) => setOrderDetail(res.data))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);

      }
    }
    FetchData();

  }, []);
  useEffect(() => {
    if (orderdetail && orderdetail.length > 0 && !items) {
      const Items = orderdetail.map((item) => item.order);
      setItems(Items[0]);

      const sum = Items[0].reduce((acc, curr) => {
        return acc + parseInt(curr.total);
      }, 0);
      setSubTotal(sum);

    }

  }, [orderdetail, items]);

  const handleDownload = () => {
    html2pdf()
      .from(reciptRef.current)
      .set({
        margin: 10,
        filename: 'receipt.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 4 },
        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' }
      })
      .save();

  }



  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const Day = new Date().getDate();
  const Month = months[new Date().getMonth()];
  const Year = new Date().getFullYear();

  return (
    <div className="recipt">
      <div className="container content" ref={reciptRef}>
        <div className="logo d-flex justify-content-center">
          <img src={Logo} alt="" />
        </div>
        <div className="row">
          <div className="col-md-6">
            <h4>Order Details</h4>
            <p>Order ID: {orderId}</p>
            <p>Order Date: {Day}-{Month}-{Year}</p>
          </div>
          <div className="col-md-6 d-flex justify-content-end ">
            <div>
              <h4>Customer Details</h4>
              <p>Name: John Doe</p>
              <p>Email: johndoe@example.com</p>
              <p>Phone: 1234567890</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <table className="table">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <>
                  {
                    (items) ?
                      items.map((item) => {
                        return (
                          <tr key={item.pid}>
                            <td>{item.product}</td>
                            <td>{item.qty}</td>
                            <td>₹{item.price}</td>
                            <td>₹{item.total}</td>
                          </tr>
                        );
                      })
                      :
                      <tr>
                        <td>Loading...</td>
                      </tr>
                  }
                </>

              </tbody>
            </table>
          </div>
        </div>
        <hr />
        <div className="subtotal w-25 d-flex flex-column">
          <span>Sub Total : ₹{subtotal}</span>
          <span>GST(18%) : ₹{(subtotal * 18) / 100}</span>
          <span>Dilivery Charges :₹{(subtotal * 2) / 100}</span>
          <hr />
          <span>Grand Total :₹{subtotal + ((subtotal * 18) / 100) + (subtotal * 2) / 100}</span>
        </div>
      </div>
      <div className="download-btn d-flex justify-content-center">
        <button className="btn btn-primary" onClick={handleDownload}><MdOutlineSimCardDownload /> Download</button>
      </div>
    </div>
  );
};

export default OrderRecipt;
