import React from 'react'
import '../Css/Qty_Addcart.css'
import { useState } from 'react'
const QtyAddCart = () => {

    const [qty,setQty] = useState(0);
    const handleQtyInc = () =>{
       let qty = parseInt(document.getElementById('qty').value);
       document.getElementById('qty').value = qty + 1;
    }
    const handleQtyDec = () =>{
        let qty = parseInt(document.getElementById('qty').value);
        if(qty !== 0){
            document.getElementById('qty').value = qty - 1; 
        }
     }
    
  return (
   <>
   <div className="qty">
    <button onClick={handleQtyDec}>-</button>
    <input type="number" id='qty' min={0} value={qty} onChange={(e)=> setQty(e.target.value)}/>
    <button onClick={handleQtyInc}>+</button>
    <button>Add To Cart</button>
   </div>
   </>
  )
}
export default QtyAddCart