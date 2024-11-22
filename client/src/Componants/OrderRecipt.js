import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Css/Recipt.css";
const OrderRecipt = () => {
  const [orderdetail, setOrderDetail] = useState([]);
  const [subtotal, setSubTotal] = useState(0);
  const [items,setItems] = useState([])


  // console.log(orderdetail);
  const orderId = orderdetail.map((item) => {
    return item.id;
  });
  

  useEffect(() => {
   const FetchData = async () =>{
    try {
      const data = await  axios
      .get("http://localhost:5000/orders")
      .then((res) => setOrderDetail(res.data))
      .catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
      
    }
   }
   FetchData();
  }, []);
  const Items = orderdetail.map((item,index)=>{return item.order});
  let a = Items[0]
// setItems(a);
  // console.log(Items);
console.log(a);

  // useEffect(()=>{
  //   const sum = Items.reduce((acc, curr) => {
  //     return acc + curr.price;
  //   },0);
  //   setSubTotal(sum);
  //   console.log(subtotal);
  // },Items)
  
 
  
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
      <div className="container content">
        <div className="row">
          <div className="col-md-6">
            <h4>Order Details</h4>
            <p>Order ID: {orderId}</p>
            <p>Order Date: {Day}-{Month}-{Year}</p>
         
          </div>
          <div className="col-md-6 ">
            <h4>Customer Details</h4>
            <p>Name: John Doe</p>
            <p>Email: johndoe@example.com</p>
            <p>Phone: 1234567890</p>
          </div>
        </div>
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
                  (a)?
                  a.map((item)=>{
                    return(
                    <tr>
                      <td>{item.product}</td>
                      <td>{item.qty}</td>
                      <td>{item.price}</td>
                      <td>{item.total}</td>
                    </tr>
                    );
                  })
                  :
                  "none"
                }
                </>
               
              </tbody>
            </table>
          </div>
        </div>
        <div className="subtotal">
        <span>Sub Total :</span>
      </div>
      </div>
    </div>
  );
};

export default OrderRecipt;
