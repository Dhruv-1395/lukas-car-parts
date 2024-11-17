import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast'
import '../Css/Qty_Addcart.css'
import { useState } from 'react'
const QtyAddCart = ({pid,img,title,price,color,size}) => {

    const [qty,setQty] = useState(1);
    const navigate = useNavigate();

    const handleQtyInc = () =>{
       let qty = parseInt(document.getElementById('qty').value);
      let newqty = document.getElementById('qty').value = qty + 1;
      setQty(newqty);
    }
    const handleQtyDec = () =>{
        let qty = parseInt(document.getElementById('qty').value);
        if(qty !== 1){
            let newqty =document.getElementById('qty').value = qty - 1; 
            setQty(newqty);
        }
     }

     const handleAddCart = () =>{
        let cartcount = parseInt(document.getElementById('Cartcount').innerText);
        console.log(cartcount);
        
        axios.post('http://localhost:5000/cart',{pid:pid,img:img,pname:title,price:price,color:color,size:size,qty:qty})
        .then(res =>{
            if(res){
                toast.success('Product Added 👍');
                document.getElementById('Cartcount').innerText=cartcount += 1;
                navigate('/cartlist');
            }
        })
        .catch(err => console.log(err));
     }
    
  return (
   <>
   <div className="qty">
    <button onClick={handleQtyDec}>-</button>
    <input type="number" id='qty' min={0} value={qty} onChange={(e)=> setQty(e.target.value)}/>
    <button onClick={handleQtyInc}>+</button>
    <button onClick={handleAddCart}>Add To Cart</button>
   </div>
   </>
  )
}
export default QtyAddCart