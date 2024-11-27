import React, { useState, useEffect } from "react";
import '../Css/Edit.css';
import axios from "axios";
import toast from 'react-hot-toast';
import { useParams, useNavigate } from "react-router-dom";
const Edit = () => {
  const { id } = useParams();
  const [pname, setPname] = useState('');
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');
  const [rate, setRate] = useState('');
  const [time,setTime] = useState('');
  const [image, setImage] = useState('');
  const [newimage, setNewImage] = useState('');
  const navigate = useNavigate();

  console.log(image);
console.log(newimage.name);

  useEffect(() => {
    const Fetchdata = async () => {
      try {
        await axios.get(`http://localhost:5000/product/${id}`)
          .then(res => {

            setPname(res.data.title);
            setPrice(res.data.price);
            setSale(res.data.sale);
            setRate(res.data.rate);
            setImage(res.data.img);
            setTime(res.data.time);
          })
          .catch(err => console.log(err));
      } catch (error) {
        console.log(error);
      }

    }
    Fetchdata();
  }, []);

  const Handlesubmit = async (e) => {
    e.preventDefault();
    
    

    try {
        await axios.put(`http://localhost:5000/product/${id}`,{title: pname, price: price, sale: sale,rate:rate, img:(newimage)? newimage.name : image,time:time})
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
        toast.success("Product updated successfully!");
        navigate('/');
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <div>
      <div className="container">
        <form className="form" onSubmit={Handlesubmit}>
          <h2>Edit Product</h2>
          <label htmlFor="pname">Product Name</label>
          <input
            type="text"
            id="pname"
            value={pname}
            onChange={(e) => setPname(e.target.value)}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label htmlFor="sale">Sale</label>
          <input
            type="number"
            id="sale"
            value={(sale) || 0}
            onChange={(e) => setSale(e.target.value)}
          />
           <label htmlFor="rate">Rate</label>
          <input
            type="number"
            id="rate"
            value={(rate) || 0}
            onChange={(e) => setRate(e.target.value)}
          />
          <label htmlFor="img">Image</label>
          <input
            type="file"
            id="img"
            onChange={(e) => setNewImage(e.target.files[0])}

          />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
