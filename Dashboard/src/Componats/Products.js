import React, { useState, useEffect,useRef } from 'react'

import '../Css/product.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast'

const Products = () => {
    const [products, setProducts] = useState([]);
    const searchref = useRef(null);
    
    useEffect(() => {
        const data = async () => {
            try {
                const response = await axios.get('http://localhost:5000/product');
                setProducts(response.data);
            } catch (err) {
                console.error(err);
            }
        }
        data();
    }, [])

    const Handleremove = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/product/${id}`);
            toast.success('Item Removed Successfully!')
            setProducts(products.filter((product) => product.id!== id));
        } catch (err) {
            console.error(err);
        }
    }

    const HandleSearch = () =>{
    let searchval = searchref.current.value;
    const result = products.filter((item)=>{
        return item.title.trim().toLowerCase() === searchval.trim().toLowerCase();
    })    
    setProducts(result);        
    }
    return (
        <div className='products'>
            <div className="head d-flex justify-content-between">
                <h3 className='title mb-3'>Product List</h3>
                <div className="search">
                    <input ref={searchref} type="text" placeholder='search...'/>
                    <button className='btn btn-success' onClick={HandleSearch}>Search</button>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Product</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Sale</th>
                            <th>Edit</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.length > 0 ? (
                            products.map((product, index) => (
                                <tr key={product.id}>
                                    <td>{index + 1}</td>
                                    <td><img src={`/assets/${product.img}`} alt='product' width={80} /></td>
                                    <td>{product.title}</td>
                                    <td>{product.price}</td>
                                    <td>{product.sale || 0}%</td>
                                    <td><Link to={`/edit/${product.id}`} className='btn btn-primary'>Edit</Link></td>
                                    <td><button className='btn btn-danger' onClick={()=> Handleremove(product.id)}>Remove</button></td>
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
    )
}

export default Products