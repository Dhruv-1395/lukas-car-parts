import React,{useState} from "react";
import '../Css/Edit.css';
import axios from "axios";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const Edit = () => {
    const [pname,setPname] = useState('');
    const [price,setPrice] = useState('');
    const [sale,setSale] = useState('');
    const [rate,setRate] = useState('');
    const [image,setImage] = useState('');

    const navigate = useNavigate();
    const Time = new Date().toUTCString();
    
    const Handlesubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`http://localhost:5000/product/`,{title:pname,price:price,img:image.name,sale:sale,rate:rate,time:Time})
            .then(res =>{
                if(res){
                    toast.success('Product Added Successfully!');
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <div>
      <div className="container">
        <form className="form" onSubmit={Handlesubmit} enctype="multipart/form-data">
          <h2>Add New Product</h2>
          <label htmlFor="pname">Product Name</label>
          <input
            type="text"
            id="pname"
            value={pname}
            onChange={(e)=> setPname(e.target.value)}
          />
          <label htmlFor="price">Price</label>
          <input
            type="text"
            id="price"  
            value={price}
            onChange={(e)=> setPrice(e.target.value)}        
          />
          <label htmlFor="sale">Sale</label>
          <input
            type="number"
            id="sale"    
            value={sale}
            onChange={(e)=> setSale(e.target.value)}      
          />
          <label htmlFor="rate">Rate</label>
          <input
            type="number"
            id="rate"    
            value={rate}
            onChange={(e)=> setRate(e.target.value)}      
          />
           <label htmlFor="img">Image</label>
          <input
            type="file"
            id="img"  
            onChange={(e)=> setImage(e.target.files[0])}
          />
          <button type="submit">Add product</button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
