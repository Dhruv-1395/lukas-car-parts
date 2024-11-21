import React,{useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import required modules
import { FreeMode, Pagination,Autoplay } from 'swiper/modules';
import { Flex, Rate } from 'antd';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
const Review = () => {
    const [reviewdata ,setReviewData] = useState([]);
    const [ratevalue, setRateValue] = useState(0);
    const [fname,setFname] = useState('');
    const [review,setReview] = useState('');
    const { id } = useParams();

    const handleSubmit = async () =>{
        await axios.post("http://localhost:5000/review",{pid:id,fname:fname,review:review,rate:ratevalue})
        .then(Result => {
            if(Result.data){
                toast.success("Review added!")
            }
        })
        .then(err => console.log(err));

        setFname('');
        setRateValue(0);
        setReview('');
    }

    useEffect(()=>{
        async function fetchData(){
            try{
                const data = await axios.get("http://localhost:5000/review")
                .then(res => setReviewData(res.data))
                .then(err => console.log(err));
            } catch(err){
                console.log(err);
            }
        }
       fetchData()
    },[])
    
    const productReview = reviewdata.filter((item,index)=>item.pid === id);
    
    return (
        <>
            <div className="review">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2000,  // time in ms for each slide to stay visible
                        disableOnInteraction: false,  // autoplay won't stop when the user interacts with the Swiper
                      }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination,Autoplay]}
                    className="mySwiper"
                >
                    {
                        productReview.map((item,index)=>{
                            return(
                                <SwiperSlide key={index}>
                                <div className="card shadow w-100">
                                    <div className="card-body">
                                        <div className="profile-pic d-flex justify-content-center">
                                            <img src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" alt="" />
                                        </div>
                                        <hr />
                                        <div className="ratings">
                                        <Flex gap="middle" vertical>
                                            <Rate disabled value={item.rate} />
                                        </Flex>
                                        </div>
                                       
                                        <h5 className="title">{item.fname}</h5>
                                        <p>{item.review}</p>
                                    </div>
                                </div>
        
                            </SwiperSlide>
                            );
                        })
                    }
                  

                </Swiper>
                <div className="row mt-5">
                    <h5 className="title">Add your Reviews</h5>
                    <span>Your Rating:</span>
                    <Flex className='mb-4' gap="middle" vertical>
                        <Rate onChange={setRateValue} value={ratevalue}/>
                    </Flex>
                   
                    <div className="col-6">
                        <input className='w-100' type="text" name='fullname' placeholder='Name' onChange={(e)=> setFname(e.target.value)} value={fname}/>
                    </div>
                    <div className="col-6">
                        <input className='w-100' type="email" name='email' placeholder='E-mail'/>
                    </div>
                    <div className="col-12 mt-4">
                        <textarea className='w-100' name="review" id="" placeholder='Write a review' onChange={(e)=> setReview(e.target.value)} value={review}></textarea>
                    </div>
                    <button className='btn btn-warning' onClick={handleSubmit}>Submit</button>
                </div>
            </div>

        </>
    )
}

export default Review