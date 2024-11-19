import React, { useState, useEffect } from "react";
import "../Css/Orders.css";
import axios from "axios";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [singleproduct,setSingleProduct] = useState([]);
  console.log(singleproduct);
  

  useEffect(() => {
    const data = async () => {
      try {
        const response = await axios.get("http://localhost:5000/orders");
        setOrders(response.data);
  
        const productsArray = response.data.map(order => order.order);
        setProducts(productsArray); 
      } catch (error) {
        console.error(error);
      }
      
    };

    data();
   
     

  }, []);

  useEffect(()=>{
    let updatedProducts = [];

    for (let i = 0; i < orders.length; i++) {
    
         updatedProducts = [...updatedProducts, ...products[i]]; // Combine arrays
      
      
    }

    // Update the state once with the accumulated products
    setSingleProduct(updatedProducts);
  },[products])

 
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
           
          {orders.length > 0 ? (
              orders.map((order, orderIndex) => (
                <>
                  {/* Display the Order Row */}
                  <tr key={order.id}>
                    <td colSpan="9" style={{ fontWeight: "bold" }}>
                      Order ID: {order.id}
                    </td>
                  </tr>

                  {/* Loop over each product in the current order */}
                  {products[orderIndex]?.map((item) => (
                    <tr key={item.pid}>
                      <td>{order.id}</td>
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
                      <td>{item.grandTotal}</td>
                    </tr>
                  ))}
                </>
              ))
            ) : (
              <tr>
                <td colSpan="9">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
