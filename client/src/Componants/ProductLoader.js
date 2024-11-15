import React from 'react'
// import Spinner from 'react-bootstrap/Spinner';
import '../Css/ProductLoader.css'

const ProductLoader = () => {
    return (
        <>
         <div className="spinner">
    <div className="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>

    <div>Loading...</div>
</div>

        </>
    );

}

export default ProductLoader