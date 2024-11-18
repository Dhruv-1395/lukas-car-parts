import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useParams } from 'react-router-dom';
import '../Css/Product_slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import QtyAddCart from './Qty_addcart';

const Singleproduct = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [pcolor,setColor] = useState('black');
    const [psize,setSize] = useState('large')
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        
            // axios.get("http://localhost:5000/api/products")
            //     .then(result => setProducts(result.data))
            //     .catch(err => console.log(err))

            axios.get("http://localhost:5000/product")
            .then(result => setProducts(result.data))
            .catch(err => console.log(err))
        

    }, [])
    const { id } = useParams();
    const selectItem = products.filter((item) => item.id == id);
    const othersItem = products.filter((item) => item.id !== id);
    const title = selectItem.length > 0 ? selectItem[0].title : null;
    const price = selectItem.length > 0 ? selectItem[0].price : null;
    const img = selectItem.length > 0 ? selectItem[0].img : null;
    

    const ProductColor = (color) => {
        if(color === pcolor){
            return {backgroundColor:"black",color:"white"};
        }
        else{}
    }
    const ProductSize = (size) => {
        if(size === psize){
            return {backgroundColor:"black",color:"white"};
        }
        else{}
    }


    return (
        <div className="single-product">
            <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#fff',
                                        '--swiper-pagination-color': '#fff',
                                        border: "1px solid #cacfd2 "
                                    }}
                                    spaceBetween={10}
                                    navigation={false}
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    {
                                        selectItem.map((item,index) => (
                                            <SwiperSlide key={index}>
                                                <img src={require('../assets/'+item.img)} alt='' />
                                            </SwiperSlide>
                                        ))
                                    }

                                    {
                                        othersItem.map((item, index) => (
                                            <SwiperSlide key={index} >
                                                <img src={require('../assets/'+item.img)} alt={`Nature ${index + 1}`} />
                                            </SwiperSlide>
                                        ))
                                    }


                                </Swiper>
                                <Swiper
                                    onSwiper={setThumbsSwiper}
                                    spaceBetween={10}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper mt-3"
                                >
                                    {
                                        selectItem.map((item,index) => (
                                            <SwiperSlide key={index} style={{ border: "1px solid #cacfd2 " }} >
                                                <img src={require('../assets/'+item.img)} alt='' />
                                            </SwiperSlide>
                                        ))
                                    }

                                    {
                                        othersItem.map((item, index) => (
                                            <SwiperSlide key={index} style={{ border: "1px solid #cacfd2 " }} >
                                                <img src={require('../assets/'+item.img)} alt={`Nature ${index + 1}`} />
                                            </SwiperSlide>
                                        ))
                                    }

                                </Swiper>
                            </div>
                            <div className="col-lg-7">
                                <h1 className="title">{title}</h1>
                                <span>Price:${price}</span>
                                <p>Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circles
                                    <br />
                                    <br />
                                    Pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circles occur in and pain can procure him some great ple cum solute nobie est eligendi option</p>

                                <table className='table '>
                                    <tbody>
                                    <tr>
                                        <td>Color</td>
                                        <td >
                                            <ul className='d-flex align-items-center color'>
                                                <li 
                                                style={ProductColor('black')}
                                                onClick={()=> setColor('black')}
                                                >Black</li>
                                                <li  
                                                style={ProductColor('blue')}
                                                onClick={()=> setColor('blue')}
                                                >Blue</li>
                                                <li  
                                                style={ProductColor('green')}
                                                onClick={()=> setColor('green')}
                                                >Green</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Size</td>
                                        <td>
                                            <ul className='d-flex align-items-center size'>
                                                <li
                                                  style={ProductSize('large')}
                                                onClick={()=> setSize('large')}
                                                >Large</li>
                                                <li
                                                  style={ProductSize('medium')}
                                                onClick={()=> setSize('medium')}
                                                >Medium</li>
                                                <li
                                                  style={ProductSize('small')}
                                                onClick={()=> setSize('small')}
                                                >Small</li>
                                            </ul>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className="qty-addcart">
                                    <QtyAddCart 
                                    pid={id}
                                    img={img}
                                    title={title}
                                    price={price}
                                    color={pcolor}
                                    size={psize}
                                    />
                                </div>
                            </div>
                        </div>
                
            </div>
        </div>
    );
}

export default Singleproduct;
