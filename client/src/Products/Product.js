import React from 'react'
import '../Css/Product.css'
import Banner from '../Componants/Banner'
import ProductFilter from '../Componants/ProductFilter'
import ProductDisplay from '../Componants/ProductDisplay'

const Product = () => {
  return (
    <>
    <Banner />
    <div className='product'>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <ProductFilter />
                </div>
                <div className="col-lg-8">
                    <ProductDisplay />
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Product