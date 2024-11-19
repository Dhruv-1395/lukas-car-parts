import React, { useState, useEffect } from "react";
import "../Css/Orders.css";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders");
        setOrders(response.data);
  
        // Create a new products array by mapping over orders
        const productsArray = response.data.map(order => order.order);
        setProducts(productsArray); // Set the products state once
      } catch (error) {
        console.error(error);
      }
      
    };

    data();

  }, []);
  return (
    <div className="orders">
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Product</th>
              <th>Name</th>
              <th>Price</th>
              <th>Color</th>
              <th>Size</th>
              <th>Qty</th>
              <th>Total</th>
              <th>Gran-Total</th>
            </tr>
          </thead>
          <tbody>
             {products.length > 0 ? (
              products.map((item, index) => (
                <tr key={item.pid}>
                  <td>{orders[0].id}</td>
                  <td>
                    <img
                      src={`/assets/${item.item}`}
                      alt="product"
                      width={80}
                    />
                  </td>
                  <td>{item.product}</td>
                  <td>{item.price}</td>
                  <td>{item.color}</td>
                  <td>{item.size}</td>
                  <td>{item.qty}</td>
                  <td>{item.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )} 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
